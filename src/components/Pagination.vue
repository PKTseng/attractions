<template>
  <div class="mt-10">
    <t-pagination :total-items="totalRows" :per-page="perPage" :limit="limit" v-model.trim="pageNumber" />
  </div>
</template>

<script>
export default {
  props: {
    totalRows: {
      type: [Number, String],
    },
    perPage: {
      type: [Number, String],
    },
    limit: {
      type: [Number, String],
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      pageNumber: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.pageNumber = newValue
    },
  },
}
</script>

<style>
</style>