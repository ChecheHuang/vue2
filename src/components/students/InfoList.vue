<script>
import { info, getInfo, deleteInfo } from "@/api/api";
export default {
  name: "InfoList",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      state: "",
      form: {
        name: "小美",
        sex: "1",
        age: "24",
        father: "小美爸爸",
        mather: "小美媽媽",
        address: "湖南长沙",
        time: "2022-01-12",
        phone: "13656776655",
      },
      rules: {
        name: [{ required: true, message: "請輸入姓名" }],
        sex: [{ required: true }],
        age: [{ required: true, message: "請輸入年齡" }],
        address: [{ required: true, message: "請輸入地址" }],
        time: [{ required: true, message: "請輸入入學時間" }],
        phone: [{ required: true, message: "請輸入聯繫方式" }],
      },
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  watch: {
    dialogFormVisible(newVal) {
      if (newVal === false) {
        this.$refs["form"].resetFields();
      }
    },
  },
  methods: {
    getData() {
      getInfo().then((res) => {
        const { status, data } = res.data;
        console.log(data);
        if (status === 200) {
          const newData = data.map((item) => {
            const newItem = { ...item };
            newItem.sex_text = newItem.sex === "1" ? "男" : "女";
            return newItem;
          });
          this.tableData = newData;
        }
      });
    },
    addStudent() {
      this.dialogFormVisible = true;
      this.state = "新增";
      this.form =  {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
      };
    },
    edit(row) {
      //   console.log(row);
      this.dialogFormVisible = true;
      this.state = "修改";
      const newForm = { ...row };
      this.form = newForm;
    },
    del(row) {
      this.$alert("確認刪除嗎?", "提示", {
        confirmButtonText: "確定",
        callback: () => {
          deleteInfo(row.id).then((res) => {
            if (res.data.status === 200) {
              this.getData();
              this.$message({ message: res.data.message, type: "success" });
            }
          });
        },
      });
    },
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          const method = this.state === "新增" ? "post" : "put";
          info(this.form, method).then((res) => {
            if (res.data.status === 200) {
              this.dialogFormVisible = false;
              this.$message({ type: "success", message: res.data.message });
              this.getData();
            }
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
<template lang="">
  <div class="infoList">
    <el-form :inline="true" size="small">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性別" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年齡" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父親" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母親" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校時間" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="聯繫方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row)"
            type="warning"
            size="mini"
            icon="el-icon-edit"
          />
          <el-button
            @click="del(scope.row)"
            type="danger"
            size="mini"
            icon="el-icon-delete"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="`${state}學生信息`" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性別" prop="sex" :label-width="formLabelWidth">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="0">女</el-radio>
        </el-form-item>
        <el-form-item label="年齡" prop="age" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="父親姓名"
          prop="father"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="母親姓名"
          prop="mather"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          prop="address"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校時間"
          prop="time"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="選擇日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="聯繫方式"
          prop="phone"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure('form')">確定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.infoList {
  .cell {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .el-button + .el-button,
    .el-checkbox.is-bordered + .el-checkbox.is-bordered {
      margin-left: 0px;
    }
  }
}
</style>
