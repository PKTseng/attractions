import Vue from "vue"
import VueSweetalert2 from "vue-sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

const options = {
  confirmButtonText: "確定",
  cancelButtonText: "取消",
}

Vue.use(VueSweetalert2, options)
