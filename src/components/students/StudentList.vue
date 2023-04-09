<template lang="">
  <div class='studentList'>
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align='center'> </el-table-column>
      <el-table-column prop="sex_text" label="性別" align='center'> </el-table-column>
      <el-table-column prop="age" label="年齡" align='center'> </el-table-column>
      <el-table-column prop="number" label="學號" align='center'> </el-table-column>
      <el-table-column prop="class" label="班級" align='center'> </el-table-column>
      <el-table-column prop="state_text" label="狀態" align='center'> </el-table-column>
      <el-table-column prop="address" label="地址" align='center'> </el-table-column>
      <el-table-column prop="phone" label="電話" align='center'> </el-table-column>
      <el-table-column  label="操作" align='center'>
        <template>
            <el-button type='danger' size='mini' icon='el-icon-delete'>
            </el-button>
        </template>    
    </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10, 20, 30, 50]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { students } from '@/api/api';
export default {
  name: "StudentList",
  data(){
    return {
        tableData: [],
         currentPage: 1,
         pageSize:5,
         total:0
    }
  },
  created(){
    this.getData()
  },
  computed:{
    compData(){
        return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
    }
  },
  methods:{
    getData(params){
        students(params).then(res=>{
            if(res.data.status===200){
                // console.log(res.data.data)
                const {data,total}=res.data
                this.total=total
                this.tableData=data.map(item=>{
                    const newItem={...item}
                    const {sex,state}=newItem
                    newItem.sex_text=sex===1? '男':"女"
                    newItem.state_text=state==="1"? '已入學':state==='2'?'未入學':"休學中"
                    return newItem
                })
            }
        })
    },
      handleSizeChange(val) {
          // console.log(`每页 ${val} 条`);
          this.pageSize=val
          this.currentPage=1
    },
    handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage=val
      }
  }
};
</script>
<style lang="scss">
.studentList{
    .el-pagination{
        text-align: left;
        margin-top: 20px;
    }
}
</style>
