<template>
  <div id="app">
    <div v-for="item in scenicSpot" :key="item.ScenicSpotID">
      <img :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1" />
      <p>地址：{{ item.Address }}</p>
      <p>開放時間：{{ item.Address }}</p>
      <p>景點名稱：{{ item.ScenicSpotName }}</p>
      <p>描述：{{ item.Description }}</p>
      <p>詳細資訊：{{ item.Description }}</p>
      <p>更新時間：{{ item.SrcUpdateTime }}</p>
      <p>聯絡資訊：{{ item.Phone }}</p>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      listQuery: {
        $top: 10,
        $format: "JSON",
      },
      scenicSpot: [],
    }
  },
  methods: {
    getList() {
      this.$api.scenicSpot.Load(this.listQuery).then((res) => {
        console.log(JSON.parse(JSON.stringify(res)))
        this.scenicSpot = res
      })
    },
  },
  mounted() {
    this.getList()
  },
}
</script>
<style>
</style>
