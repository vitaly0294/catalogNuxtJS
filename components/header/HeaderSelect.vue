<template>
  <div class="select">
    <ul class="select-value" @click="selectionSort">
      <li id="none" :class="toggleClassLiNone">
        По умолчанию
      </li>
      <li id="min" :class="toggleClassLiMin">
        По цене min
      </li>
      <li id="max" :class="toggleClassLiMax">
        По цене max
      </li>
      <li id="name" :class="toggleClassLiName">
        По имени
      </li>
    </ul>
    <div :class="toggleClassArrow" />
  </div>
</template>

<script>
export default {
  name: 'HeaderSelect',

  data () {
    return {
      id: {
        none: true,
        min: false,
        max: false,
        name: false
      },
      select: false,
      arrowRotate: false,
      sort: false
    }
  },

  computed: {
    toggleClassLiNone () {
      return this.id.none ? 'select-option select-option_show' : 'select-option'
    },
    toggleClassLiMin () {
      return this.id.min ? 'select-option select-option_show' : 'select-option'
    },
    toggleClassLiMax () {
      return this.id.max ? 'select-option select-option_show' : 'select-option'
    },
    toggleClassLiName () {
      return this.id.name ? 'select-option select-option_show' : 'select-option'
    },
    toggleClassArrow () {
      return this.arrowRotate ? 'arrow arrow_rotate' : 'arrow'
    }
  },

  methods: {
    selectionSort (event) {
      if (!this.select) {
        this.select = true
        this.arrowRotate = true
        for (const key in this.id) {
          if (Object.hasOwnProperty.call(this.id, key)) {
            this.id[key] = !((this.sort && key === 'none'))
          }
        }
      } else {
        const id = event.target.id
        this.select = false
        this.arrowRotate = false

        if (id !== 'none') {
          this.sort = true
          this.$store.commit('main/sortCards', id)
        }

        for (const key in this.id) {
          if (Object.hasOwnProperty.call(this.id, key)) {
            if (id !== key) {
              this.id[key] = false
            }
          }
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

  .select {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 120px;
    height: 36px;
    background: $backgroundSelect;
    box-shadow: $boxShadowOne;
    border-radius: $borderRadius;

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    cursor: pointer;

    z-index: 10;

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

      &_show {
        display: block;
        background: #eaeafb;
        border-radius: 4px;

        &:hover, &:focus {
          color: black;
          background: #c6c6fb;
        }
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      width: 8px;
      height: 6px;
      background: url(@/assets/images/arrow.png) no-repeat right;

      &_rotate {
        transform: rotate(180deg) translateY(50%);
      }
    }
  }
</style>
