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
    align-items: center;

    .title {
      margin-left: 16px;

      @media (max-width: 767px) {
        margin: 0;
        font-size: 20px;
      }

      @media (max-width: 374px) {
        width: 150px;
      }
    }
  }

</style>
