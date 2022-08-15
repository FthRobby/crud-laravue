<template>
  <div class="greetings">
    <div class="text-center mb-6">
      <span class="green text-4xl font-bold">CRUD</span> <span class="text-error text-4xl  font-semibold">LARAVUE</span>
    </div>
    
    <h3>
      Belajar CRUD menggunakan framework
      <a target="_blank" class="text-error" href="https://laravel.com/">Laravel</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1, span
  .greetings h3 {
    text-align: left;
  }
}
</style>
