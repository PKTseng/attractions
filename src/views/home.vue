<template>
  <div>
    HOME
    <p @click="goPage">風景</p>
  </div>
</template>

<script>
export default {
  methods: {
    goPage() {
      this.$router.push({
        name: "scenicSpotList",
      })
    },
  },
}
</script>

<style>
</style>