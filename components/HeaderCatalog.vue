<template>
  <div class="header">
    <h2 class="title">
      Добавление товара
    </h2>

    <HeaderSelect />
  </div>
</template>

<script>
export default {
  name: 'HeaderCatalog'
}

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    .title {
      margin-top: 16px;
      margin-left: 16px;
    }
  }

</style>
