<template>
  <div class="list">
    <!-- 头 -->
    <div
      style="
        text-align: center;
        margin: 20px;
        font-size: x-large;
        font-weight: bold;
      "
    >
      电 气 第 一 种 工 作 票 ( )
    </div>

    <!-- 编号 -->
    <div style="display: flex; justify-content: flex-end">
      <div style="font-size: 11px; font-weight: bold">编号：</div>
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
    <div style="display: flex">
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
      <LineInput v-model="testInput" width="260px" />
      <el-button
        icon="el-icon-search"
        style="border: none; height: 25px"
      ></el-button>
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
      <el-button
        icon="el-icon-search"
        style="border: none; height: 25px"
      ></el-button>
    </div>

    <!-- 2 -->
    <div style="display: flex">
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
    <div style="display: flex">
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

    <div style="width: 1000px">
      <BigTable
        title="5.1 应拉断路器(开关)、隔离开关(刀闸)"
        :tableInfo="tableInfo"
      />
    </div>
  </div>
</template>

<script>
import lineInput from "../../components/line-input/index.vue";
import bigTable from "../../components/big-table/index.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "detial",
  components: { LineInput: lineInput, BigTable: bigTable },
  data() {
    return {
      testInput: "999",
      tableInfo: [
        {
          title: "序号",
          key: "number",
          width: "80", //宽度不能带px，直接传给eltable，自动宽度不用传值
          type: "input", //input,checkBox
        },
        {
          title: "应拉断路器(开关)、隔离开关(刀闸)",
          key: "switch",
          width: "",
          type: "input",
        },
        {
          title: "措施执行情况",
          key: "status",
          width: "80",
          type: "checkBox",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.testInput++;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.ilst {
  text-align: center;
}
</style>