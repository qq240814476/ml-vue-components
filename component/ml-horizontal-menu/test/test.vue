<template>
  <div>
    <mlmenu :data="arr"></mlmenu>
  </div>
</template>
<script>
import mlmenu from '../src/App.vue'
export default {
  data(){
    return{
      arr: [
        {
          key:1,
          icon:2,
          title: 'menu1'
        },
        {
          key:2,
          icon:2,
          title: 'menu2'
        },
        {
          key:3,
          icon:3,
          children:[
            {
              key:6,
              icon:6,
              title: 'menu6'
            },
            {
              key: 4,
              icon:4,
              children:[
                {
                  key:5,
                  icon:5,
                  title: 'menu5'
                },
              ],
              title:'menu4'
            }
          ],
          title: 'menu3'
        },
         {
          key:10,
          icon:2,
          title: 'menu4'
        },
         {
          key:11,
          icon:2,
          title: 'menu5'
        },
         {
          key:12,
          icon:2,
          title: 'menu6'
        },
         {
          key:13,
          icon:2,
          title: 'menu7'
        },
         {
          key:14,
          icon:2,
          title: 'menu8'
        },
         {
          key:15,
          icon:2,
          title: 'menu9'
        },
         {
          key:16,
          icon:2,
          title: 'menu21111111111111111111111111111111111111111111111111111111111111111111111111111111'
        },
         {
          key:17,
          icon:2,
          title: 'menu21111111111111111111111111111111111111111111111111111111111111111111111111111111'
        },
         {
          key:18,
          icon:2,
          title: 'menu10'
        },
         {
          key:19,
          icon:2,
          title: 'menu11'
        },
         {
          key:20,
          icon:2,
          title: 'menu12'
        },
      ],
    }
  },
  components: {mlmenu},
}
</script>
