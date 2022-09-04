<template>
  <div class="big-table">
    <div class="table-title">
      <div class="title">{{ title }}</div>
      <div class="button-box">
        <div class="button">批量</div>
        <div class="button" @click="addInTable">增加</div>
        <div class="button red" @click="deleteInTable">删除</div>
      </div>
    </div>
    <el-table
      empty-text="没有找到匹配的记录"
      ref="elTable"
      :data="showTableData"
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
        <template v-slot="scope">
          <div v-if="item.type == 'input'">
            <el-input v-model="scope.row[item.key]"></el-input>
          </div>
          <div v-else-if="item.type == 'checkBox'" class="check-box-box">
            <el-checkbox
              :true-label="1"
              :false-label="0"
              v-model="scope.row[item.key]"
            ></el-checkbox>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  watch: {
    tableData: {
      handler (newValue) {
        this.showTableData = JSON.parse(JSON.stringify(newValue))
        this.showTableData.forEach((item) => {
          item.nanoid = nanoid()
        })
      },
      immediate: true
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tableData: {
      type: Array,
      default: () => []
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
      ]
    }
  },
  data () {
    return {
      showTableData: []
    }
  },
  methods: {
    // 父组件调用该方法，可以获得到列表数据，返回一个全新的数组并且去除nanoid
    getTableData () {
      const tableData = JSON.parse(JSON.stringify(this.showTableData))
      tableData.forEach((item) => {
        delete item.nanoid
      })
      return tableData
    },
    // 删除
    deleteInTable () {
      const indexList = this.$refs.elTable.selection.map((item) => item.nanoid)
      if (indexList.length === 0) {
        this.$message({ type: 'error', message: '请选择要删除的行' })
        return
      }
      indexList.forEach((nanoid) => {
        this.showTableData.splice(
          this.showTableData.findIndex((ele) => ele.nanoid == nanoid),
          1
        )
      })
    },
    // 列表中新增一行
    addInTable () {
      const row = {}
      this.tableInfo.forEach((ele) => {
        if (ele.key == 'status') {
          row[ele.key] = 0
        } else {
          row[ele.key] = ''
        }
      })
      row.nanoid = nanoid()
      this.showTableData.push(row)
    }
  }
}
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
    padding: 2px !important;
  }
}

:deep(.el-table__empty-block) {
  min-height: 0 !important;
  height: 40px !important;
  background: #dddddd;

  .el-table__empty-text {
    line-height: normal;
    color: #000000 !important;
    font-size: 12px;
  }
}

.check-box-box {
  transform: scale(1.5);
}

.table-title {
  display: flex;
  justify-content: space-between;

  .button-box {
    display: flex;

    .button {
      background: #019ca9;
      margin-left: 5px;
      padding: 5px 10px;
      font-size: 13px;
      color: #ffffff;
    }

    .red {
      background: indianred !important;
    }

    //显示小手
    .button:hover {
      cursor: pointer;
    }
  }
}
</style>
