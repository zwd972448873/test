<template>
  <div class="box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="列表" name="list"> </el-tab-pane>
      <el-tab-pane label="明细" name="detial"></el-tab-pane>
      <el-tab-pane label="流程" name="process"></el-tab-pane>
    </el-tabs>
    <div class="button-box" v-show="activeName === 'list'">
      <div class="button">按钮1</div>
      <div class="button red">按钮1</div>
      <div class="button">按钮1</div>
      <div class="button">按钮1按钮1</div>
    </div>
    <el-scrollbar class="show-tab-box">
      <List v-if="activeName === 'list'" />
      <Detial v-if="activeName === 'detial'" />
      <Process v-if="activeName === 'process'" />
    </el-scrollbar>
  </div>
</template>

<script>
import list from "../list/index.vue";
import detial from "../detial/index.vue";
import process from "../process/index.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "box",
  components: {
    List: list,
    Detial: detial,
    Process: process,
  },
  data() {
    return {
      activeName: "detial",
    };
  },
};
</script>

<style lang="scss" scoped>
.el-tabs {
  height: 50px;
  :deep(.el-tabs__nav-scroll) {
    background-color: #e5e5e5;
    padding-top: 2px;
    .is-active {
      background: #ffffff;
      color: #000000 !important;
    }
    .el-tabs__item {
      color: #23527c;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      padding: 0 30px !important;
    }
  }
}
.button-box {
  position: absolute;
  top: 5px;
  right: 4px;
  display: flex;
  .button {
    background: #3099f5;
    padding: 8px 16px;
    color: #ffffff;
    margin-left: 4px;
    font-size: 12px;
  }
  .button:hover {
    cursor: pointer;
  }
  .red {
    background: red !important;
  }
}
.show-tab-box {
  height: calc(100vh - 45px - 50px);
}
</style>
