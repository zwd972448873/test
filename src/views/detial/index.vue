<template>
  <div class="list">
    <!-- 头 -->
    <div class="title">电 气 第 一 种 工 作 票 ( )</div>

    <!-- 编号 -->
    <div style="display: flex; justify-content: flex-end">
      <div class="font">编号：</div>
      <LineInput v-model="testInput" width="140px" />
      <el-button
        plain
        icon="el-icon-search"
        style="
          border: #3397fe 1px solid;
          width: 135px;
          margin-left: 10px;
          border-radius: 4px;
          height: 30px;
          display: flex;
          align-items: center;
        "
        >引用历史票</el-button
      >
    </div>

    <!-- 1 -->
    <div class="divstyle">
      <div style="font-size: 11px; margin-left: 50px">1.</div>
      <div
        style="
          font-size: 11px;
          font-weight: bold;
          margin-left: 20px;
          margin-right: 20px;
        "
      >
        工作负责人:
      </div>
      <LineInput v-model="testInput" width="90px" />
      <div
        style="
          font-size: 11px;
          font-weight: bold;
          margin-left: 80px;
          margin-right: 10px;
        "
      >
        班组:
      </div>
      <LineInput v-model="tempForm.run_workticket.duty_class" width="260px" />
      <el-button icon="el-icon-search" class="searchButton"></el-button>
      <div
        style="
          font-size: 11px;
          font-weight: bold;
          margin-left: 50px;
          margin-right: 20px;
        "
      >
        所属工程:
      </div>
      <LineInput v-model="testInput" width="260px" />
      <el-button icon="el-icon-search" class="searchButton"></el-button>
    </div>

    <!-- 2 -->
    <div class="divstyle">
      <div style="font-size: 11px; margin-left: 50px">2.</div>
      <div
        style="
          font-size: 11px;
          font-weight: bold;
          margin-left: 20px;
          margin-right: 20px;
        "
      >
        工作班成员(不包括工作负责人):
      </div>
      <LineInput v-model="testInput" width="650px" />
      <div style="font-size: 11px; margin-left: 20px">共</div>
      <LineInput v-model="testInput" width="60px" />
      <div style="font-size: 11px; margin-left: 10px">人</div>
    </div>

    <!-- 3 -->
    <div class="divstyle">
      <div style="font-size: 11px; margin-left: 50px">3.</div>
      <div
        style="
          font-size: 11px;
          font-weight: bold;
          margin-left: 20px;
          margin-right: 20px;
        "
      >
        工作任务:
      </div>
      <LineInput v-model="testInput" width="950px" />
    </div>

    <div style="margin-bottom: 20px">
      <BigTable class="BigTablestyle" :tableInfo="run_workticket_measure_rxx_info" :tableData="tempForm.run_workticket_measure_rxx" />
    </div>
    <div
      @click="isShowOtherInfo = !isShowOtherInfo"
      style="margin-left:50px;font-size: 11px;margin-bottom:20px
          font-weight: bold;"
    >
      {{
        isShowOtherInfo ? "-" : "+"
      }}其他附加信息:关联其他工作票、关联操作票、关联缺陷、关联设备
    </div>
    <div v-if="isShowOtherInfo">
      <div class="divstyle">
        <div
          style="
            display: flex;
            margin-right: 30px;
            margin-left: 50px;
            font-size: 11px;
            font-weight: bold;
          "
        >
          关联其他工作票
        </div>
        <LineInput v-model="testInput" width="450px" />
        <el-button icon="el-icon-search" class="searchButton"></el-button>
      </div>
      <div class="divstyle">
        <div
          style="
            display: flex;
            margin-right: 30px;
            margin-left: 50px;
            font-size: 11px;
            font-weight: bold;
          "
        >
          关联操作票
        </div>
        <LineInput v-model="testInput" width="150px" />
        <el-button icon="el-icon-search" class="searchButton"></el-button>
      </div>
      <div class="divstyle">
        <div
          style="
            display: flex;
            margin-right: 30px;
            margin-left: 50px;
            font-size: 11px;
            font-weight: bold;
          "
        >
          关联缺陷
        </div>
        <LineInput v-model="testInput" width="450px" />
        <el-button icon="el-icon-search" class="searchButton"></el-button>
      </div>
      <div class="divstyle">
        <div
          style="
            display: flex;
            margin-right: 30px;
            margin-left: 50px;
            font-size: 11px;
            font-weight: bold;
          "
        >
          关联设备
        </div>
        <LineInput v-model="testInput" width="450px" />
        <el-button icon="el-icon-search" class="searchButton"></el-button>
      </div>
    </div>

    <!-- 4 -->
    <div class="divstyle">
      <div style="margin-left: 50px; margin-right: 20px">4.</div>
      <div style="margin-right: 20px; font-size: 11px; font-weight: bold">
        计划工作时间
      </div>
      <LineInput class="font" v-model="testInput" width="150px" />
      <div style="margin-left: 30px; margin-right: 15px">至</div>
      <LineInput class="font" v-model="testInput" width="150px" />
    </div>

    <!-- 5 -->
    <div>
      <div class="divstyle">
        <div style="margin-left: 50px; margin-right: 20px; font-weight: bold">
          5.
        </div>
        <div
          style="margin-right: 20px;font-size: 11px;font-weight: bold
  font-weight: bold;"
        >
          安全措施
        </div>
      </div>

      <BigTable
        class="BigTablestyle"
        title="5.1 应拉断路器(开关)、隔离开关(刀闸)"
        :tableInfo="tableInfo1"
      />
      <BigTable
        class="BigTablestyle"
        title="5.2 应装接地线、应合接地刀闸(注明确实地点、名称及接地编号*)"
        :tableInfo="tableInfo2"
      />
      <BigTable
        class="BigTablestyle"
        title="5.3 应设遮拦、应挂标示牌及防止二次回路误碰等措施"
        :tableInfo="tableInfo3"
      />
      <BigTable
        style="margin-bottom: 20px"
        class="BigTablestyle"
        title="5.4 其他"
        :tableInfo="tableInfo4"
      />
      <div class="divstyle">
        <div
          style="
            margin-left: 50px;
            margin-right: 15px;
            font-size: 11px;
            font-weight: bold;
          "
        >
          工作票签发人:
        </div>
        <LineInput class="font" v-model="testInput" width="150px" />
        <el-button class="signbutton">签名</el-button>
      </div>
    </div>

    <!-- 6 -->
    <div>
      <div class="divstyle">
        <div style="margin-left: 50px; font-size: 11px">6.</div>
        <div style="margin-left: 20px; font-size: 11px; font-weight: bold">
          收到工作票时间:
        </div>
        <LineInput class="font" v-model="testInput" width="150px" />
      </div>
      <div class="divstyle">
        <div style="margin-left: 80px; font-size: 11px; font-weight: bold">运行值长签名:</div>
        <LineInput class="font" v-model="testInput" width="150px" />
        <el-button class="signbutton">签名</el-button>
        <div  style="margin-left: 20px; font-size: 11px; font-weight: bold">签名时间</div>
        <LineInput class="font" v-model="testInput" width="150px" />
      </div>
      <div class="divstyle">
        <div  style="margin-left: 80px; font-size: 11px; font-weight: bold">工作负责人签名:</div>
        <LineInput class="font" v-model="testInput" width="150px" />
        <el-button class="signbutton">签名</el-button>
        <div   style="margin-left: 20px; font-size: 11px; font-weight: bold">签名时间</div>
        <LineInput class="font" v-model="testInput" width="150px" />

      </div>
    </div>
  </div>
</template>

<script>
import lineInput from '../../components/line-input/index.vue'
import bigTable from '../../components/big-table/index.vue'
import {getDetail} from "../../api/all"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'detial',
  components: { LineInput: lineInput, BigTable: bigTable },
  props:{
    ticketCode:{
      type:String,
      default:''
    }
  },
  watch:{
    ticketCode:{
      handler(newValue){
        this.getDetail(newValue)
      }
    }
  },
  data () {
    return {
      //tempForm.run_workticket.duty_class
      tempForm:{
        run_workticket:{
          duty_class:''
        },
        //第三点里的表格
        run_workticket_measure_rxx:[]
      },
      testInput: '',
      run_workticket_measure_rxx_info: [
        {
          title: '序号',
          key: 'sort_num',
          width: '80', // 宽度不能带px，直接传给eltable，自动宽度不用传值
          type: 'input' // input,checkBox
        },
        {
          title: '工作地点及设备双重名称',
          key: 'description',
          width: '',
          type: 'input'
        },
        {
          title: '工作内容',
          key: 'exec_description',
          width: '',
          type: 'input'
        }
      ],
      tableInfo1: [
        {
          title: '序号',
          key: 'number',
          width: '80', // 宽度不能带px，直接传给eltable，自动宽度不用传值
          type: 'input' // input,checkBox
        },
        {
          title: '应拉断路器(开关)、隔离开关(刀闸)',
          key: 'switch',
          width: '',
          type: 'input'
        },
        {
          title: '措施执行情况',
          key: 'status',
          width: '80',
          type: 'checkBox'
        }
      ],
      tableInfo2: [
        {
          title: '序号',
          key: 'number',
          width: '80', // 宽度不能带px，直接传给eltable，自动宽度不用传值
          type: 'input' // input,checkBox
        },
        {
          title: '应装接地线、应合接地刀闸(注明确实地点、名称及接地编号*)',
          key: 'switch',
          width: '',
          type: 'input'
        },
        {
          title: '措施执行情况',
          key: 'status',
          width: '80',
          type: 'checkBox'
        }
      ],
      tableInfo3: [
        {
          title: '序号',
          key: 'number',
          width: '80', // 宽度不能带px，直接传给eltable，自动宽度不用传值
          type: 'input' // input,checkBox
        },
        {
          title: '应设遮拦、应挂标示牌及防止二次回路误碰等措施',
          key: 'switch',
          width: '',
          type: 'input'
        },
        {
          title: '措施执行情况',
          key: 'status',
          width: '80',
          type: 'checkBox'
        }
      ],
      tableInfo4: [
        {
          title: '序号',
          key: 'number',
          width: '80', // 宽度不能带px，直接传给eltable，自动宽度不用传值
          type: 'input' // input,checkBox
        },
        {
          title: '工作地点保留带电部分或注意事项(签发人填写)',
          key: 'switch',
          width: '',
          type: 'input'
        },
        {
          title: '补充工作地点保留带电部分和安全措施(许可人填写)',
          key: 'status',
          width: '476',
          type: 'checkBox'
        }
      ],
      // 控制其他附加信息的展开收起
      isShowOtherInfo: false
    }
  },
  mounted () {},
  methods:{
    getDetail(ticketCode){
      getDetail({code:ticketCode}).then(res=>{
        console.log(res)
        this.tempForm = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.font {
  font-size: 11px;
  font-weight: bold;
}
.title {
  text-align: center;
  margin: 20px;
  font-size: x-large;
  font-weight: bold;
}

.divstyle {
  display: flex;
  margin-bottom: 15px;
}
.searchButton {
  border: none;
  height: 25px;
}
.BigTablestyle {
  margin: 25px 30px 0px 50px;
}
.signbutton {
  background-color: white;
  border-radius: 4px;
  border: #3397fe 1px solid;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
</style>
