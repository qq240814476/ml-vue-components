<template>
  <div ref="ml-horizontal-menu" class="ml-horizontal-menu">
    <div class="ml-horizontal-menu-content">
      <mlmenu :arr="mainArr" @menuChange="menuChange"></mlmenu>  
    </div>
    <div class="ml-horizontal-menu-right">
      <el-menu
        mode="horizontal"
        @select="menuChange"
        background-color="#545c64"
        text-color="#fff"
        ref="smenu"
        active-text-color="#ffd04b">
        <mlSubMenu v-for="(item, index) in sliceArr" :key="index" :data="item" mini/>
      </el-menu>
    </div>
  </div>
</template>

<script>
import mlmenu from './components/menu.vue'
import mlSubMenu from './components/submenu.vue'
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'ml-horizontal-menu',
  props:['data'],
  data(){
    return {
      mainArr:[],
      sliceArr:[],
      menuLength: 0,
    }
  },
  methods:{
    calcMaxLength(target, width){
      const list = target.children[0].children[0].children[0].children
      let allWidth = 0
      for(let i = 0; i< list.length; i++){
        allWidth += list[i].getBoundingClientRect().width
        if(allWidth > width - 60){
          break
        }
        this.menuLength++
      }
      this.reSplicArr()
    },
    reSplicArr(){
      this.mainArr = this.data.slice(0, this.menuLength)
      this.sliceArr = [
        {
          key: -1,
          mini: true,
          children: this.data.slice(this.menuLength)
        }
      ]
      this.menuLength = 0
    }
  },
  mounted(){
    this.mainArr = this.data
    const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const {width} = entry.contentRect;
            this.mainArr = this.data
            // 调用calc
            this.$nextTick(()=>{
              this.calcMaxLength(entry.target, width)
            })
        }
    });

    ro.observe(this.$refs['ml-horizontal-menu']);
  },
  components: { mlmenu,mlSubMenu }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.ml-horizontal-menu{
  overflow: hidden;
}
.ml-horizontal-menu-content{
  width: 100%;
  float: left;
}
.ml-horizontal-menu-content ul{
  overflow: hidden;
  height:61px;
}
.ml-horizontal-menu-right{
  float: left;
  margin-left: -50px;
  width: 20px;
  height: 60px;
  font-size: 16px;

  line-height: 60px;
  vertical-align: middle;
}
</style>
