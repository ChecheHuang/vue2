<template lang="">
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2758b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(child, index) in item.children"
                :index="child.path"
                :key="index"
              >
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: "VueMenu",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    // console.log(this.$router)
    this.menus = [...this.$router.options.routes];
  },
};
</script>
<style lang="scss" scoped>
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
      .fa {
        margin-right: 10px;
      }
    }
    .el-submenu {
      .el-menu-item {
        min-width: 0;
      }
    }
  }
}
</style>
