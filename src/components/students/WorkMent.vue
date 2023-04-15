<script>
// import { getTableData } from "@/utils/table";
import Pageing from "../common/Pageing.vue";
export default {
  name: "WorkMent",
  components: {
    Pageing,
  },
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
      url: "/works",
    };
  },
};
</script>
<template lang="">
  <div class="workMent">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用戶ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所屬班級" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作業名稱" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情況" align="center">
      </el-table-column>
    </el-table>
    <Pageing :total="total" :url="url" />
  </div>
</template>

<style lang="scss" scoped>
.workMent {
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
