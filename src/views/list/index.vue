<template>
  <div class="list">
    <el-input
      v-model="input1"
      placeholder="工作票编号"
      size="mini"
      style="width: 130px; margin-right: 5px"
    ></el-input>
    <el-select
      placeholder="班组"
      v-model="select"
      clearable="true"
      size="mini"
      class="select"
      style="width: 128px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-input
      v-model="input2"
      placeholder="负责人"
      size="mini"
      style="width: 130px"
    ></el-input>
    <el-input
      v-model="input3"
      placeholder="工作内容"
      size="mini"
      style="width: 180px"
    ></el-input>
    <el-date-picker
      v-model="value1"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划开始时间起"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <span>至</span>
    <el-date-picker
      v-model="value2"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划开始时间起"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <div class="table-box">
      <el-table
        height='500px'
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ color: '#333333', 'font-size': '12px' ,padding: '8px 0',  }"
        :cell-style="{ 'font-size': '12px', padding: '8px 0', }"
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作票编号" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作内容" align="center">
        </el-table-column>
        <el-table-column prop="data" label="计划开始时间" align="center">
        </el-table-column>
        <el-table-column prop="data" label="计划结束时间" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作负责人" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作许可人" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作许可时间" align="center">
        </el-table-column>
        <el-table-column label="流程状态" align="center">
          <template slot-scope="scope">
              <div class="status-tag" :style="{background:statusList[scope.row.status].bgColor}">
              {{ statusList[scope.row.status].name }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "list",
  data() {
    return {
      statusList:{
        0:{
          name:'待审核',
          bgColor:'red'
        },
        1:{
          name:'已审核',
          bgColor:'green'
        }
      },
      tableData: [
        {
          data: "LALALA",
          status:1
        },
        {
          data: "LALALA",
          status:0
        },
        {
          data: "LALALA",
          status:1
        },
      ],
      input1: "",
      input2: "",
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "检修二班",
        },
        {
          value: "选项2",
          label: "检修三班",
        },
      ],
      select: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 10px;
  padding-top: 0;
}

.status-tag{
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 2px;
}

</style>
