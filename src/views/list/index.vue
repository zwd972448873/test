<template>
  <div class="list">
    <el-input
      v-model="ticketNum"
      placeholder="工作票编号"
      size="mini"
      style="width: 130px; margin-right: 5px"
    ></el-input>
    <el-select
      placeholder="班组"
      v-model="select"
      :clearable="true"
      size="mini"
      class="select"
      style="width: 128px"
    >
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-input
      v-model="personCharge"
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
      v-model="planStarton"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划开始时间起"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <span>至</span>
    <el-date-picker
      v-model="planStartoff"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划开始时间止"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <el-date-picker
      v-model="planEndon"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划结束时间起"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <span>至</span>
    <el-date-picker
      v-model="planEndoff"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="计划结束时间止"
      size="mini"
      style="width: 130px"
    >
    </el-date-picker>
    <el-select
      placeholder="流程状态"
      v-model="state"
      :clearable="true"
      size="mini"
      class="select"
      style="width: 128px"
    >
      <el-option
        v-for="item in stateOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>

    <div class="labelStyle">
      <div class="stateStyle">
        待签发：
        <el-tag class="tagStyle">1</el-tag>
      </div>
      <div class="stateStyle">
        待许可：
        <el-tag class="tagStyle">1</el-tag>
      </div>
      <div class="stateStyle">
        执行中：
        <el-tag class="tagStyle">1</el-tag>
      </div>
      <div class="stateStyle">
        待终结：
        <el-tag class="tagStyle">1</el-tag>
      </div>
      <div class="stateStyle">
        已完成：
        <el-tag class="tagStyle">1</el-tag>
      </div>
    </div>

    <div class="table-box">
      <el-table
        height="500px"
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{
          color: '#333333',
          'font-size': '12px',
          padding: '8px 0',
        }"
        :cell-style="{ 'font-size': '12px', padding: '8px 0' }"
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column prop="workticket_code" label="工作票编号" align="center">
           <template v-slot="scope">
            <div class="toDetail" @click="toDetail(scope.row)">{{scope.row.workticket_code}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="work_content" label="工作内容" width="350" align="center">
        </el-table-column>
        <el-table-column prop="plan_start_date" label="计划开始时间" align="center">
        </el-table-column>
        <el-table-column prop="plan_endt_date" label="计划结束时间" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作负责人" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作许可人" align="center">
        </el-table-column>
        <el-table-column prop="data" label="工作许可时间" align="center">
        </el-table-column>
        <el-table-column label="流程状态" align="center">
          <template v-slot="scope">
            <div
              class="status-tag"
              :style="{ background: statusList[scope.row.wfstatus].bgColor }"
            >
              {{ statusList[scope.row.wfstatus].name }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from '../../api/all'
export default {
  name: 'list',
  data () {
    return {
      input3:'',
      statusList: {
        'CLOSE': {
          name: '已完成',
          bgColor: 'green'
        },
        'DQF': {
          name: '待签发',
          bgColor: 'blue'
        }
      },
      tableData: [
      
      ],
      ticketNum: '',
      personCharge: '',
      planStarton: '',
      planStartoff: '',
      planEndon: '',
      planEndoff: '',
      selectOptions: [
        {
          value: '选项1',
          label: '检修二班'
        },
        {
          value: '选项2',
          label: '检修三班'
        }
      ],
      select: '',
      state: '',
      stateOptions: [
        {
          value: '选项1',
          label: '草稿'
        },
        {
          value: '选项2',
          label: '审批中'
        },
        {
          value: '选项3',
          label: '待签发'
        },
        {
          value: '选项4',
          label: '待许可'
        },
        {
          value: '选项5',
          label: '待终结'
        },
        {
          value: '选项6',
          label: '执行中'
        },
        {
          value: '选项7',
          label: '已间断'
        },
        {
          value: '选项8',
          label: '已完成'
        },
        {
          value: '选项9',
          label: '延期中'
        },
        {
          value: '选项10',
          label: '负责人变更'
        },
        {
          value: '选项11',
          label: '已作废'
        },
        {
          value: '选项12',
          label: '已驳回'
        },
        {
          value: '选项13',
          label: '班组成员会签'
        },
        {
          value: '选项14',
          label: '值长审批'
        }
      ]
    }
  },
  methods: {
    getTableData () {
      getList().then(res => {
        if(res.code==200){
          this.tableData = res.data
        }
      })
    },
    toDetail(row){
      // console.log(row)
      this.$emit('toDetail',row.workticket_code)
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 10px;
  padding-top: 8px;
}

.status-tag {
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 2px;
}
.labelStyle {
  display: flex;
}
.tagStyle {
  color: #019ca9;
  width: 35px;
  height: 20px;
  background: rgba(208, 234, 238, 0.5);
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stateStyle {
  margin-top: 20px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toDetail{
  color: #23527C;
}
.toDetail:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
