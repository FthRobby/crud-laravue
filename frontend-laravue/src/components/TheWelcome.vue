<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Aplikasi CRUD ini mengimplementasikan penggunaan 
    <a target="_blank" href="https://vuejs.org/">Vue js</a>
    sebagai Frotnend dan 
    <a target="_blank" class="text-error" href="https://laravel.com/">Laravel</a>
    sebagai Backend.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    Project ini dijalankan dan dibundling dengan
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
    Setup IDE yang disarankan adalah
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
    API yang tersedia untuk aplikasi ini dibuat menggunakan
    <a class="text-error" target="_blank" href="https://pinia.vuejs.org/">Laravel</a>,
    dan untuk pengujian nya menggunakan 
    <a class="text-yellow-400" target="_blank" href="https://postman.com/">Postman</a>.
  </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
    You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem> -->

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    Link Repository untuk project ini :

    <a target="_blank" href="https://github.com/FthRobby/crud-laravue">CRUD Laravel 8 & Vue 3 </a>.
  </WelcomeItem>
</template>
