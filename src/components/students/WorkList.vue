<script>
import { getTableData } from "@/utils/table";
export default {
  name: "WorkList",
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      size: 10,
      loading: true,
    };
  },
  created() {
    getTableData(this, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  // watch: {
  //   page(newValue) {
  //     getTableData(this, "/works", { page: newValue, size: this.size }, [
  //       "completed",
  //     ]);
  //   },
  //   size(newSize) {
  //     getTableData(this, "/works", { page: this.page, size: newSize }, [
  //       "completed",
  //     ]);
  //   },
  // },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.size = val;
      this.page = 1;
      getTableData(this, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      getTableData(this, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
    },
  },
};
</script>
<template lang="">
  <div class="workList">
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.workList {
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
