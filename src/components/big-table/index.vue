<template>
  <div class="big-table">
    <div class="table-title">
      {{ title }}
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      stripe
      :header-cell-style="{
        color: '#333333',
        'font-size': '12px',
      }"
      :cell-style="{ 'font-size': '12px', padding: '8px 0' }"
    >
      <el-table-column type="selection" width="45" align="center">
      </el-table-column>
      <el-table-column
        :label="item.title"
        align="center"
        v-for="(item, index) in tableInfo"
        :key="index"
        :width="item.width"
      >
        <template slot-scope="scope">
          <!-- {{ scope.row.status }} -->
          <div v-if="item.type == 'input'">
            <el-input></el-input>
          </div>
          <div v-else-if="item.type == 'checkBox'">
            <el-checkbox></el-checkbox>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    tableData: {
      type: Array,
      default: () => [{}],
    },
    tableInfo: {
      type: Array,
      default: () => [
        // {
        //   title: "",
        //   key: "",
        //   width: "",
        //   type: "", //input,checkBox
        // },
      ],
    },
  },
  data() {
    return {
      //   tableData: [
      //     {
      //       status: 1,
      //     },
      //     {
      //       status: 1,
      //     },
      //     {
      //       status: 1,
      //     },
      //     {
      //       status: 1,
      //     },
      //     {
      //       status: 1,
      //     },
      //   ],
    };
  },
};
</script>

<style lang="scss" scoped>
.big-table {
  .table-title {
    border: 1px solid #dddddd;
    border-bottom: none;
    display: flex;
    height: 35px;
    align-items: center;
    padding: 0 10px;
    font-weight: bold;
  }
}

:deep(.el-table__cell) {
  padding: 0 !important;
  .cell {
    padding: 2px;
  }
}
</style>