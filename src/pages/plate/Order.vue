<template>
    <div>
        <h4 class="h2">拣货V单汇总</h4>
        <el-table :data='tableData.list' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="系统当天接收订单行总数">
            </el-table-column>
                <el-table-column prop="order_num1" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num2" label="当天未完成订单行">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num4" label="正在进行中订单行">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>
        <h4 class="h2">拣货-V单</h4>
        <el-table :data='tableData.list1' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="工作站编号">
            </el-table-column>
                <el-table-column prop="order_num1" label="播种墙数量">
            </el-table-column>
            <el-table-column prop="order_num2" label="工作状态">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已完成订单行总数">
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="正在进行订单行数量">   
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>

        <h4 class="h2">拣货-S单汇总</h4>
        <el-table :data='tableData.list' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="系统当天接收订单行总数">
            </el-table-column>
                <el-table-column prop="order_num1" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num2" label="当天未完成订单行">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num4" label="正在进行中订单行">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>

        <h4 class="h2">拣货-S单</h4>
         <el-table :data='tableData.list1' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="工作站编号">
            </el-table-column>
                <el-table-column prop="order_num1" label="播种墙数量">
            </el-table-column>
            <el-table-column prop="order_num2" label="工作状态">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已完成订单行总数">
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="正在进行订单行数量">   
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>
        <h4 class="h2">上架订单汇总</h4>
                <el-table :data='tableData.list' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="系统当天接收订单行总数">
            </el-table-column>
                <el-table-column prop="order_num1" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num2" label="当天未完成订单行">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已创建波次订单行">
            </el-table-column>
            <el-table-column prop="order_num4" label="正在进行中订单行">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>
         <h4 class="h2">上架</h4>
         <el-table :data='tableData.list1' highlight-current-row v-loading="tableLoading" style="width: 100%" border>
            <el-table-column prop="order_num" label="工作站编号">
            </el-table-column>
                <el-table-column prop="order_num1" label="播种墙数量">
            </el-table-column>
            <el-table-column prop="order_num2" label="工作状态">
            </el-table-column>
            <el-table-column prop="order_num3" label="当天已完成订单行总数">
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="正在进行订单行数量">   
            </el-table-column>
            <el-table-column prop="order_num4" label="已分配且未完成的订单行数量">
            </el-table-column>
            <el-table-column prop="order_num5" label="瞬时平均效率（行/人/分钟）">   
            </el-table-column>
        </el-table>
        <h4 class="h2">24小时订单完成统计</h4>
        <div id="chart" style="width:100%">
        </div>
    </div>
</template>
<script>
import ApexCharts from "apexcharts";
export default {
       data() {
           return {
               tableLoading:false,
               tableData:{
                 list:[
                   {
                        order_num:12323,
                        order_num1:12323,
                        order_num2:12323,
                        order_num3:12323,
                        order_num4:12323,
                        order_num5:12323,
                   }
               ],
               list1:[
                   {
                        order_num:12323,
                        order_num1:12323,
                        order_num2:12323,
                        order_num3:12323,
                        order_num4:12323,
                        order_num5:12323,
                   },
                    {
                        order_num:12323,
                        order_num1:12323,
                        order_num2:12323,
                        order_num3:12323,
                        order_num4:12323,
                        order_num5:12323,
                   },
                    {
                        order_num:12323,
                        order_num1:12323,
                        order_num2:12323,
                        order_num3:12323,
                        order_num4:12323,
                        order_num5:12323,
                   },
                    {
                        order_num:12323,
                        order_num1:12323,
                        order_num2:12323,
                        order_num3:12323,
                        order_num4:12323,
                        order_num5:12323,
                   }
               ]
               }
           }
       },
       mounted(){
           let dates = [],
                series = []
           for(let i=0;i<=24;i++){
               dates.push(i)
               series.push(RndNum(3))
           }
            function RndNum(n){
                var rnd="";
                for(var i=0;i<n;i++)
                    rnd+=Math.floor(Math.random()*10);
                return rnd;
            }
           var options = {
            chart: {
                type: 'bar',
                height:'300',
                width: '100%',
                
            },
            theme: {
                palette: 'palette1'
            },
            series: [{
                name: '订单数',
                data:series
            }],
            xaxis: {
                categories:dates
            }
            }

            var chart = new ApexCharts(document.querySelector("#chart"), options);

            chart.render();
       }
}
</script>
<style lang="less">
    #chart {
    }
</style>