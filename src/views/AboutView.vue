<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    const url = import.meta.env.VITE_PATH;
    this.$http.get(url)
      .then(res => {
        this.data = res.data.results[0]
      })
  }
}
</script>

<style>

</style>
