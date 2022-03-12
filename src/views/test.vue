<template>
  <div>
    <div class="curtain" :class="{ 'curtain-show': !isOpen }"></div>
  </div>
</template>
<script>
import { defineComponent, computed, useStore } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const store = useStore()
    const isOpen = computed(() => store.state.loading.isOpen)
    return {
      isOpen,
    }
  },
})
</script>
<style lang="scss" scoped>
.curtain {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 9999;
  &::after {
    content: "";
    transform: scaleX(1);
    transform-origin: bottom right;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    z-index: -1;
    transition: transform 0.9s cubic-bezier(0.89, 0.12, 0.28, 0.97);
  }
  &-show {
    pointer-events: none;
  }
  &-show::after {
    transform: scaleX(0);
    transform-origin: bottom left;
  }
}
</style>