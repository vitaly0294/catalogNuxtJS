<template>
  <div class="get">
    <div class="sk-circle-bounce">
      <div class="sk-child sk-circle-1" />
      <div class="sk-child sk-circle-2" />
      <div class="sk-child sk-circle-3" />
      <div class="sk-child sk-circle-4" />
      <div class="sk-child sk-circle-5" />
      <div class="sk-child sk-circle-6" />
      <div class="sk-child sk-circle-7" />
      <div class="sk-child sk-circle-8" />
      <div class="sk-child sk-circle-9" />
      <div class="sk-child sk-circle-10" />
      <div class="sk-child sk-circle-11" />
      <div class="sk-child sk-circle-12" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinKit'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

  @keyframes sk-circle-bounce-delay {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1.0);
    }
  }

  .get {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .7;
    background: $spinkit-backgruond;
  }

  .sk-circle-bounce {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: $spinkit-size;
    height: $spinkit-size;

    .sk-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .sk-child:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: $spinkit-spinner-color;
      border-radius: 100%;
      animation: sk-circle-bounce-delay $animationDuration infinite ease-in-out both;
    }

    @for $i from 2 through $circleCount {
      .sk-circle-#{$i} {
        transform: rotate((calc(360deg / $circleCount) * ($i - 1)));
      }
    }

    @for $i from 2 through $circleCount {
      .sk-circle-#{$i}:before {
        animation-delay: (-$animationDuration + calc($animationDuration / $circleCount) * ($i - 1));
      }
    }
  }
</style>
