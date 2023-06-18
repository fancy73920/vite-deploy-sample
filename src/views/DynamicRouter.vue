<template>
  <div></div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.params.id)
      const seed = this.$route.params.id;
      // const seed = 'f9582c8d13b55ba5';
      const url = `${import.meta.env.VITE_PATH}?seed=${seed}`;
      this.$http.get(url)
        .then(res => {
          console.log(res)
        })
    }
  }
</script>