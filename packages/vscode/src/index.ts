import type { ExtensionContext, TestController, TestItem, TestItemCollection, TestRun } from 'vscode'
import { TestMessage, TestRunRequest, TestRunProfileKind, tests, Uri } from 'vscode'
import { parse } from 'flatted'
import fetch from 'node-fetch'
import type { File, Task } from '../../vitest/src/types'

function url(path = '/') {
  return `http://localhost:51204/__vitest_api__${path}`
}

async function fetchAPI(path = '/') {
  return parse(await fetch(url(path)).then(res => res.text()))
}

const tasksMap: Map<string, TestItem> = new Map()

function updateRunState(data: Task, run: TestRun) {
  const item = tasksMap.get(data.id)!
  if (data.mode === 'skip' || data.mode === 'todo') {
    item.busy = false
    run.skipped(item)
  }
  else if (!data.result || data.result.state === 'run') {
    item.busy = true
  }
  else if (data.result?.state === 'pass') {
    item.busy = false
    run.passed(item, data.result.end! - data.result.start)
  }
  else if (data.result?.state === 'fail') {
    item.busy = false
    run.failed(
      item,
      new TestMessage(String(data.result.error)),
      data.result.end! - data.result.start,
    )
  }
}

function createTaskItem(task: Task, parent: TestItemCollection, controller: TestController, run?: TestRun) {
  const filepath = task.file?.filepath || (task as File).filepath
  const item = parent.get(task.id) || controller.createTestItem(task.id, task.name, Uri.file(filepath))
  parent.add(item)
  tasksMap.set(task.id, item)
  if (task.type === 'test') {
    item.canResolveChildren = false
  }
  else {
    task.tasks.forEach((t) => {
      createTaskItem(t, item.children, controller, run)
    })
  }
  if (run)
    updateRunState(task, run)
  return item
}

export async function activate(context: ExtensionContext) {
  const ctrl = tests.createTestController('vitest', 'Vitest')
  context.subscriptions.push(ctrl)

  ctrl.createRunProfile('Run Tests', TestRunProfileKind.Run, (request, token) => {
    // console.log({ request })
  }, true)

  ctrl.resolveHandler = async(item) => {
    if (!item) {
      const run = ctrl.createTestRun(new TestRunRequest(), 'hi')
      const { files } = await fetchAPI('/') as { files: Record<string, File> }
      Object.values(files).forEach((file) => {
        createTaskItem(file, ctrl.items, ctrl, run)
      })
      run.end()
    }
  }
}

export function deactivate() {}