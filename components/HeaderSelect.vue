<template>
  <div class="select">
    <ul class="select-value">
      <li value="" class="select-option select-option_active">
        По умолчанию
      </li>
      <li value="min" class="select-option">
        По цене min
      </li>
      <li value="max" class="select-option">
        По цене max
      </li>
      <li value="name" class="select-option">
        По наименованию
      </li>
    </ul>
    <div class="arrow" />
  </div>
</template>

<script>
export default {
  name: 'HeaderSelect'
}

</script>

<style lang="scss" scoped>
  .select {
    position: relative;
    width: 120px;
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    cursor: pointer;

    .select-value {
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 36px;
      background: inherit;
      border-radius: inherit;
    }

    .select-option {
      display: none;
      width: 120px;
      height: 36px;
      padding: 10px 16px;
      list-style-type: none;

      &_active {
        display: block;
      }
    }

    .arrow {
      z-index: 100;
      position: absolute;
      top: 0;
      right: 16px;
      width: 120px;
      height: 36px;
      background: url(@/assets/images/arrow.png) no-repeat right;
    }
  }
</style>
