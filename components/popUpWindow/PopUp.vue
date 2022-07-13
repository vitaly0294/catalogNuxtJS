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
@import '@/assets/scss/_variables.scss';

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $backgraundPopUp;

    .message {
      padding: 32px;
      background: $backgraundPopUpMessage;
      box-shadow: $boxShadowTwo;
      border-radius: $borderRadius;
    }
  }

</style>
