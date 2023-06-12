<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <router-link to="/newpage/a" href="#" class="list-group-item list-group-item-action" aria-current="true">
            A
          </router-link>
          <router-link to="/newpage/b" href="#" class="list-group-item list-group-item-action" aria-current="true">
            B
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
