<template>
  <el-submenu
    :index="data.key"
    v-if="data.children"
    popper-append-to-body="true">
    <template v-if="data.mini" slot="title">
      <i class="el-icon-d-arrow-right" style="margin-left:-7px"></i>
    </template>
    <template v-else slot="title">
      {{data.title}}
    </template>
    <mlSubMenu v-for="(item,index) in data.children" :key="index" :data="item"></mlSubMenu>
  </el-submenu>
  <el-menu-item v-else :index="data.key">
    <div>{{data.title}}</div>
  </el-menu-item>
</template>

<script>
export default {
  name: "mlSubMenu",
  props:{
    data:{
      default: []
    },
  },
}
</script>