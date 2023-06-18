<template>
  <div></div>
</template>

<script>
  export default {
    props: ['id'],
    created() {
      console.log('props',this.id)
      const seed = this.id;
      const url = `${import.meta.env.VITE_PATH}?seed=${seed}`;
      this.$http.get(url)
        .then(res => {
          console.log(res)
        })
    }
  }
</script>