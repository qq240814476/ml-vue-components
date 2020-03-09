<template>
  <div class="ml-horizontal-menu-doublefly">
    <el-menu
      mode="horizontal"
      @select="menuChange"
      background-color="#545c64"
      text-color="#fff"
      ref="hmenu"
      active-text-color="#ffd04b">
      <mlSubMenu v-for="(item, index) in arr" :key="index" @menuChange="menuChange" :data="item"/>
    </el-menu>
  </div>
</template>

<script>
import mlSubMenu from "./submenu";
export default {
  props: ['arr'],
  methods:{
    menuChange(key){
      this.$emit('menu-change', key)
    }
  },
  components: {mlSubMenu}
}
</script>
<style scoped>
.ml-horizontal-menu-doublefly{
  margin-right: 50px;
}
</style>