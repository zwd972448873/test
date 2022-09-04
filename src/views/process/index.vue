<template>
  <div class="process">
    <div>
      <el-scrollbar class="process-img-box">
        <div class="title">流程图</div>
        <img src="../../assets/process.gif" />
      </el-scrollbar>
    </div>
    <div>
      <div style="width: 800px; border: 1px solid #dddddd; margin-left: 15px">
        <div
          style="
            height: 40px;
            background-color: white;
            align-items: center;
            display: flex;
          "
        >
          流程历史审批信息
        </div>
        <div style="display: flex; background-color: white">
          <div class="divtime" style="width: 150px">时间</div>
          <div class="divtime" style="width: 120px">节点</div>
          <div class="divtime" style="width: 100px">办理人</div>
          <div class="divtime" style="width: 229px">办理意见</div>
          <div class="divtime" style="width: 67px">用时</div>
          <div class="divtime" style="width: 67px">状态</div>
          <div class="divtime" style="width: 67px">操作</div>
        </div>
        <div style="background-color: #dddddd">没有找到匹配的记录</div>
        <div style="background-color: white;width:800px;height:400px;"></div>
      </div>
      <div style="background-color: white;margin-top: 15px;width:800px;height: 380px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'process'
}
</script>

<style lang="scss" scoped>
.process {
  display: flex;
  padding-bottom: 10px;
  background: #E5E5E5;
  // background-color: #e5e5e5;
}

.process-img-box {
  .title{
    border-bottom: 1px solid #dddddd;
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-weight: bold;
    font-size: 13px;
  }
  background: #ffffff;
  border: 1px solid #dddddd;;
  width: 628px;
}

.divtime {
  border-top: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
