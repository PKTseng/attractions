<template>
  <div class="w-full min-h-screen p-10">
    <h1 class="text-center pb-10">新北旅遊網</h1>
    <div class="grid grid-cols-4 gap-4">
      <div class="w-full bg-white rounded-lg overflow-hidden" v-for="item in scenicSpot" :key="item.ScenicSpotID">
        <div class="h-3/4 flex justify-center items-center">
          <img v-if="item.Picture.PictureUrl1" class="w-full h-full" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1" />
          <p v-else class="text-gray-400 font-bold text-3xl">尚未提供圖片</p>
        </div>
        <div class="h-1/4 p-4">
          <p class="">景點名稱：{{ item.ScenicSpotName }}</p>
          <p>門票：{{ item.TicketInfo }}</p>
        </div>
        <!-- <p>地址：{{ item.Address }}</p>
      <p>開放時間：{{ item.Address }}</p>
      <p>描述：{{ item.Description }}</p>
      <p>詳細資訊：{{ item.Description }}</p>
      <p>更新時間：{{ item.SrcUpdateTime }}</p>
      <p>聯絡電話：{{ item.Phone }}</p> -->
      </div>
    </div>

    <Pagination :totalRows="totalRows" :perPage="perPage" :limit="limit" />
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue"
export default {
  components: { Pagination },
  data() {
    return {
      totalRows: 10,
      perPage: 1,
      limit: 10,
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