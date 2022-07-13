<template>
  <div class="popup">
    <div class="message">
      <h2>Позиция добавленна в каталог!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp'
}

</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(229, 229, 229, .3);

    .message {
      padding: 32px;
      background: rgba(218, 217, 217, .7);
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
    }
  }

</style>
