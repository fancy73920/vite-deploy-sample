<template>
  <div>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="replace">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr>
    <button type="button" @click="addRoute">新增路由</button>
  </div>
</template>

<script>
  export default {
    methods: {
      // 取得常用參數
      getRoute() {
        // 取得路由的屬性
        // 在網址列直接寫上?search=123，query會取得參數跟值
        console.log(this.$route);

        // 呼叫路由的方法
        // console.log(this.$router);
      },

      // 包含歷史紀錄
      push() {
        // this.$router.push('/newpage/dynamicRouter/f9582c8d13b55ba5')
        this.$router.push({
          name: 'about'
        })
      },
      // 沒有歷史紀錄
      replace() {
        this.$router.replace({
          name: 'about'
        })
      },
      // 操作歷史紀錄：正負數來表示返回上一頁或前往下一頁
      go() {
        this.$router.go(-1)
      },
      // 臨時新增路由
      addRoute() { 
        this.$router.addRoute({
          path: '/newAbout',
          name: 'newAbout',
          component: () => import('./AboutView.vue')
        })
      },
    }
  }
</script>