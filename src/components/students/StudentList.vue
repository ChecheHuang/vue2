<script>
import { students, studentDel } from "@/api/api";
export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
       formInline: {
          name: '',
        },
      currentPage: 1,
      pageSize: 5,
    };
  },
  created() {
    this.getData();
  },
  computed: {
    compData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    total(){
        return this.tableData.length
    }
  },
  methods: {
    getData(params) {
      students(params).then((res) => {
        if (res.data.status === 200) {
          // console.log(res.data.data)
          const { data } = res.data;
          this.tableData = data.map((item) => {
            const newItem = { ...item };
            const { sex, state } = newItem;
            newItem.sex_text = sex === 1 ? "男" : "女";
            newItem.state_text =
              state === "1" ? "已入學" : state === "2" ? "未入學" : "休學中";
            return newItem;
          });
        }
      });
    },
    del(id) {
      console.log(id);
      studentDel(id).then((res) => {
        // console.log(res)
        if (res.data.status === 200) {
          this.$message({ message: "刪除成功", type: "success" });
          this.getData();
        }
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    find(){
        // const newData = this.tableData.filter(item=>item.name===this.formInline.name)
        // this.tableData=newData
        this.getData(this.formInline)
    },
    reset(){
        this.formInline={}
        this.getData(this.formInline)
    },
  },
};
</script>
<template lang="">
  <div class="studentList">
    <el-form :inline="true" :model="formInline" size='mini' >
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="輸入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性別" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年齡" align="center">
      </el-table-column>
      <el-table-column prop="number" label="學號" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班級" align="center">
      </el-table-column>
      <el-table-column prop="state_text" label="狀態" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="電話" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot:default="scope">
          <!-- <template slot-scope="scope"> -->
          <el-button
            @click="del(scope.row.id)"
            type="danger"
            size="mini"
            icon="el-icon-delete"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30, 50]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<style lang="scss">
.studentList {
    .el-form--inline{
        text-align: left;
    }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
