<script>
import { getTableData } from "@/utils/table";
export default {
  name: "PageIng",
  props: {
    total:Number,
    url: String,
  },
  data() {
    return {
      page: 1,
      size: 10,
    };
  },
  created() {
    getTableData(this.$parent, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      getTableData(
        this.$parent,
        "/works",
        { page: this.page, size: this.size },
        ["completed"]
      );
    },
    handleCurrentChange(val) {
      this.page = val;
      getTableData(
        this.$parent,
        "/works",
        { page: this.page, size: this.size },
        ["completed"]
      );
    },
  },
};
</script>
<template lang="">
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>
