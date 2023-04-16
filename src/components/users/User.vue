<script>
export default {
  name: "VueUser",
  data() {
    return {
      menus:[],
      defaultProps:{
        label:'name',
        children:"children"
      }
    };
  },
  created(){
    this.menus=[...this.$router.options.routes]
    console.log(this.menus)
  },
  methods:{
    getCheckedNodes(){
      console.log(this.$refs.tree.getCheckedNodes())
    }
  }
};
</script>

<template>
  <div class="">
    <el-tree
      :data="menus"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">通過node獲取</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
