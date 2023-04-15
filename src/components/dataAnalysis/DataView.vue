<script>
import {dataview} from '@/api/api'
export default {
  data() {
    return {};
  },
  created(){
    dataview().then(res=>{
      const {status,data}=res.data
      if(status===200){
        const {legend,xAxis,series}=data
        this.draw(legend,xAxis,series)
      }
    }).catch(err=>{
      throw err
    })
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title:{
        text:"test"
      },
      tooltip:{},
      xAxis:{
        data:['1班','2班','3班','4班','5班','6班',]
      },
      yAxis:{},
      series:[{
        name:'人數',
        type:'bar',
        data:[34,45,12,23,21,56]
      }]
    })
  },
  methods:{
    draw(legend,xAxis,series){
    let myChart1 = this.$echarts.init(document.getElementById('main2'))
      let option = {
        title:{
          text:"繪畫量"
        },
        tooltip:{
          trigger:'axis'
        },
        legend:{
          data:legend
        },
        xAxis:{
          type:'category',
          data:xAxis,
        },
        yAxis:{
          type:'value'
        },
        series:series
      }
    myChart1.setOption(option)

    }
  }
};
</script>

<template>
  <div class="data-view">
    <div class="el-card">
      <div id="main1"></div>
    </div>
    <div class="el-card">
      <div id="main2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>
