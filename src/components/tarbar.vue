<template>
    <nav>
        <ul>
            <router-link v-for="data in navlist.operate" :key="data.id"
              :to="data.path" tag="li" activeClass="Active">
              <!-- icon 小图标的写法 -->
              <i class="iconfont" :class="data.icon"></i>
              <span>{{data.name}}</span>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
  // location.href 编程式导航
  // <a> 声明式导航
  data () {
    return {
      navlist: {
        //  数组套json，这样可以将需要的数据 放在一组，便于执行
        operate: [
          { path: '/index', name: '商城首页', id: 1, icon: '' },
          { path: '/category', name: '商品分类', id: 2, icon: '' },
          { path: '/cart', name: '购物车', id: 3, icon: '' },
          { path: '/user', name: '个人中心', id: 4, icon: '' }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
nav{
    width: 100%;
    height: 56px;
    position: fixed;
    bottom: 0px;
    background: #fff;
    z-index: 10;
    overflow: hidden;
    border-top: 1px solid #dedede;
    ul{
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      li{
        width: 25%;
        text-align: center;
        font-size: 13px;
      }
    }
}
.Active {
    color: #37ab40;
}
</style>
