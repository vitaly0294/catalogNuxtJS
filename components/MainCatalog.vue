<template>
  <main class="flex">
    <MainForm />
    <MainContent />
  </main>
</template>

<script>
export default {
  name: 'MainCatalog'
}

</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
    align-items: flex-start;

    @media (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

</style>
