<template>
  <div flex flex-col items-center>
    <div flex flex-col items-center p="t-10 md:t-20 b-10">
      <img src="/logo.svg" h="40 md:60">
      <h1 text-3em md:text-4em font-light>
        Vitest
      </h1>
      <p text="1.2em center" leading-7 op60 font-normal tracking-wide>
        A blazing fast unit-test framework<br>powered by
        <a href="https://vitejs.dev" target="_blank" font="bold">Vite ⚡️</a>
      </p>
      <div
        text-center
        flex
        flex-col
        sm:flex-row
        flex-wrap
        items-center
        gap-4
        mt-5
        children:my0
      >
        <a class="btn bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 saturate-80" href="/guide/">
          <span class="i-carbon:page-last inline-block text-lg" />
          <span ma>Get Started</span>
        </a>
        <a class="btn bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700 saturate-80" href="/guide/why">
          <span class="i-carbon:list-checked inline-block text-lg" />
          <span ma>Learn More</span>
        </a>
      </div>
    </div>

    <p text="1.4em center yellow-500" leading-7 font-normal tracking-wide>
      <span i-carbon-warning-alt inline-block align-mid /> Vitest is still in development
    </p>
    <p
      text="1em center"
      leading-7
      op60
      font-normal
      tracking-wide
    >
      It's not recommended to migrate your current testing setups yet<br>You can try it out in new projects if you are willing to get involved and help us
    </p>

    <h3 op50 font-normal pt-10>
      Features
    </h3>
    <FeaturesList class="max-w-140 text-lg" />

    <h3 id="meet-the-team" op50 font-normal pt-5 pb-2>
      Meet The Team
    </h3>
    <div grid="~ sm:cols-2 gap-x-8 gap-y-20 items-center" p-10>
      <Avatar
        name="Anthony Fu"
        avatar="https://antfu.me/avatar.png"
        github="antfu"
        twitter="antfu7"
        :sponsors="true"
      >
        A fanatical open sourceror<br>Core team member of Vite & Vue<br>Working at NuxtLabs
      </Avatar>
      <Avatar
        name="Patak"
        avatar="https://patak.dev/images/patak.jpg"
        github="patak-dev"
        twitter="patak_dev"
        :sponsors="true"
      >
        A collaborative being<br>Core team member of Vite<br>Team member of Vue
      </Avatar>
      <Avatar
        name="Aslemammad"
        avatar="https://avatars.githubusercontent.com/u/37929992?v=4"
        github="Aslemammad"
        twitter="asleMammadam"
      >
        An open source developer<br>Team member of Poimandres and Vike
      </Avatar>
      <Avatar
        name="Vladimir"
        avatar="https://avatars.githubusercontent.com/u/16173870?v=4"
        github="sheremet-va"
      >
        An open source fullstack developer
      </Avatar>
    </div>
    <h3 id="the-team" op50 font-normal pt-5 pb-2>
      Contributors
    </h3>
    <p op80 text-lg max-w-150 text-center leading-7>
      <Contributors />
      <br>
      <a href="https://chat.vitest.dev">Join the community</a> and get involved!
    </p>

    <h3 id="sponsored-by" op50 font-normal pt-5 pb-2>
      Sponsored by
    </h3>
    <div grid="~ cols-1 lg:cols-2" w-screen text-center mt-10>
      <div>
        <a text-lg href="https://github.com/sponsors/antfu">Anthony's Sponsors</a>
        <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg" target="_blank">
          <img src="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
        </a>
      </div>
      <div>
        <a text-lg href="https://github.com/sponsors/patak-dev">Patak's Sponsors</a>
        <a href="https://patak.dev/sponsors.svg" target="_blank">
          <img src="https://patak.dev/sponsors.svg">
        </a>
      </div>
    </div>

    <p class="text-center opacity-75">
      <a href="https://www.netlify.com">
        <img src="/netlify.svg" alt="Deploys by Netlify">
      </a>
    </p>
    <div mb-30 />
  </div>
</template>
