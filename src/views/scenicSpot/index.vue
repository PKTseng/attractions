<template>
  <div class="w-full min-h-screen p-10 bg-blue-500">
    <h1 class="text-center pb-10">新北旅遊網</h1>
    <div class="grid grid-cols-3 gap-6">
      <div class="relative w-full h-full rounded-lg overflow-hidden cursor-pointer group" v-for="(item, index) in scenicSpot" :key="item.ScenicSpotID" @click="goDetailPage(item)">
        <img class="w-full h-full bg-gradient-to-b from-cyan-500 to-blue-500" :src="item.Picture.PictureUrl1" :alt="item.PictureDescription1" />
        <div
          class="absolute top-0 right-0 bottom-0 left-0 bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center"
          style="background-color: rgba(251, 251, 251, 0.7)"
        ></div>
        <div class="absolute top-5 left-10 text-white font-bold flex items-center text-2xl">
          <p class="bg-white w-12 h-12 flex justify-center text-black items-center rounded-lg mr-2">{{ index + 1 }}</p>
          <p class="group-hover:text-black">{{ item.ScenicSpotName }}</p>
        </div>
      </div>
    </div>

    <Pagination :totalRows="totalRows" :perPage="perPage" :limit="limit" />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue"
export default {
  components: { Pagination },
  data() {
    return {
      totalRows: 10,
      perPage: 1,
      limit: 10,
      listQuery: {
        $top: 3,
        $format: "JSON",
      },
      scenicSpot: [],
    }
  },
  methods: {
    goDetailPage(item) {
      this.$router.push({
        name: "scenicSpotDetail",
        params: { id: item.ScenicSpotID },
      })
    },
    getList() {
      this.$api.scenicSpot.Load(this.listQuery).then((res) => {
        console.log(JSON.parse(JSON.stringify(res)))
        this.scenicSpot = res.filter((item) => item.Picture.PictureUrl1)
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