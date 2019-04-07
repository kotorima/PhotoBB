<template>
      <el-menu
        default-active="1">
        <el-menu-item index="1">
          <a href="#" id="search"><img src="./assets/images/search.png" alt="search"></a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#" id="logo"><span>PhotoBB</span></a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="#" id="login">Войти</a>
        </el-menu-item>
      </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>

#logo > span {
  font-size: 1.5rem;
}

a > img {
  width: 2rem;
  height: 2rem;
}

.el-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  background: #ffffff;
}

.el-menu-item:nth-child(2) {
 margin: 0 30vw;
}
</style>
