<template>
    <nav>
        <ul>
            <router-link v-for="data in navlist.operate" :key="data.id"
              :to="data.path" tag="li" activeClass="Active">
              <span :class="data.type==='text' ? '' : (data.id === 1 ? 'NavImg-1' : 'NavImg-' + data.id)">{{data.name}}</span>
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
          { path: '/index', type: 'image', name: '', id: 1 },
          { path: '/index', type: 'text', name: '首页', id: 2 },
          { path: '/cinema', type: 'text', name: '购票', id: 3 },
          { path: '/goods', type: 'text', name: '商城', id: 4 },
          { path: '/new', type: 'text', name: '发现', id: 5 },
          { path: '/user', type: 'image', name: '', id: 6 }
        ]
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.NavImg-1 {
  margin: 0 auto;
  display: block;
  width: 67px;
  height: 21px;
  background-color: #1c2635;
  background-image: url(//static1.mtime.cn/html5/20200116143308/images/2014/logo_mtime.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.NavImg-6 {
  display: block;
  width: 16px;
  height: 21px;
  background-color: #1c2635;
  background-image: url(//static1.mtime.cn/html5/20200116143308/images/2014/ico_my.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
nav{
    width: 100%;
    height: 52.8px;
    position: fixed;
    top: 0px;
    background: #1c2635;
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
        text-align: center;
        font-size: 13px;
        line-height: 4.4em;
        color: #BBB;
      }
    }
}
.Active {
    color: #fff;
    position: relative;
    font-weight: bold;
}
</style>
