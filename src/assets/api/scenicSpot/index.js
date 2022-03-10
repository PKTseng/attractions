import request from "@/utils/request"

export default {
  Load(params) {
    return request({
      methods: "get",
      url: "/v2/Tourism/ScenicSpot",
      params,
    })
  },
}
