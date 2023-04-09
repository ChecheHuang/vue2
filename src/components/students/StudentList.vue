<template lang="">
  <div>
    <el-table :data="tableData" border style="width: 100%">
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
  </div>
</template>
<script>
import { students } from '@/api/api';
export default {
  name: "StudentList",
  data(){
    return {
        tableData: []
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(params){
        students(params).then(res=>{
            if(res.data.status===200){
                console.log(res.data.data)
                this.tableData=res.data.data.map(item=>{
                    const newItem={...item}
                    const {sex,state}=newItem
                    newItem.sex_text=sex===1? '男':"女"
                    newItem.state_text=state==="1"? '已入學':state==='2'?'未入學':"休學中"
                    return newItem
                })
            }
        })
    }
  }
};
</script>
<style lang=""></style>
