<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader/index.vue'
import MyFooter from '@/components/MyFooter/index.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 包括边框和内边距 */
}
 
ul, ol, li {
  list-style: none; /* 移除列表的默认项目符号 */
}
 
img {
  max-width: 100%; /* 确保图片不会超出其容器 */
  height: auto; /* 保持图片的宽高比 */
}
 
a {
  text-decoration: none; /* 移除链接的下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
 
input, button, textarea, select {
  font: inherit; /* 字体样式继承父元素 */
}

</style>
