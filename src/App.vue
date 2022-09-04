<template>
  <div class="container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>
          <!-- <el-scrollbar class="show-box"> -->
            <router-view></router-view>
          <!-- </el-scrollbar> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .el-header {
    height: 45px !important;
    background-image: linear-gradient(to right, #5fc4ff, #428af5);
  }
  .el-aside {
    width: 200px !important;
    background-color: #042046;
  }
  .el-main {
    padding: 0;
  }
  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden !important;
  }
  .show-box {
    height: calc(100vh - 45px);
  }
}
</style>
