<template lang="">
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in bread" :key="index">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      bread: [],
    };
  },
  created() {
    this.bread = [...this.$route.matched];
  },
  watch: {
    $route: {
      handler(newValue) {
        this.bread = [...newValue.matched];
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
<style lang=""></style>
