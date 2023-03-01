<template lang="">
  <div class="header">
    <el-header >
        <div class="title">通用管理系統</div>
        <div>{{name}}</div>
    </el-header>
  </div>
</template>
<script>
import { getToken } from '@/utils/setToken';
export default {
  name: "VueHeader",
  data() {
    return {
        name:""
    };
  },
  created(){
    this.name=getToken('username')
  }
};
</script>
<style lang="scss" scoped>
.header{
    .el-header{
        background: #2758b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title{
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>
