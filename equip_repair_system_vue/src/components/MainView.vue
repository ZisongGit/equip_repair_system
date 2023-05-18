<template>
  <!--系统管理员首页: index页面框架布局-->
  <div class="index">
    <!--页面组成：其位置由各自组件的css定义-->
    <header class="header"></header>
    <div>
      <el-row className="menu_page">
        <el-col>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1" @click="addTab(helloView)"
                  >Hello View</el-menu-item
                >
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3" @click="addTab(itemView)"
                  >Item View</el-menu-item
                >
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="2" @click="addTab(helloView)">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <div>
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          class="demo-tabs"
          closable
          @tab-remove="removeTab"
          @tab-change="changeTab"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
      </div>
      <div><router-view></router-view></div>
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router";
export default {
  name: "MainView",
  data() {
    return {
      tabIndex: 0,
      editableTabsValue: null,
      editableTabs: [],
      router: useRouter(),
      itemView: {
        title: "Item View",
        url: "/main/item",
      },
      helloView: {
        title: "Hello View",
        url: "/main/hello",
      },
    };
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      let position;
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].name == targetName) {
          if (activeName === targetName) {
            this.editableTabsValue =
              tabs[parseInt(i + 1) % parseInt(tabs.length)].name;
          }
          position = i;
          break;
        }
      }
      this.editableTabs.splice(position, 1);
    },
    changeTab(targetName) {
      let tabs = this.editableTabs;
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].name == targetName) {
          this.router.push(tabs[i].content);
          break;
        }
      }
    },
    addTab(target) {
      let newTabName = `${++this.tabIndex}`;
      this.editableTabs.push({
        title: target.title,
        name: newTabName,
        content: target.url,
      });
      this.editableTabsValue = newTabName;
    },
  },
};
</script>


<style scoped>
/*定义index页面的布局及样式*/
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  top: 0;
  left: 220px;
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 220px);
  height: calc(100% - 71px);
  overflow: auto;
}

/*头部样式*/
.header {
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  min-width: 600px;
  padding: 5px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #324057;
}

.logo-container {
  line-height: 60px;
  min-width: 400px;
}

.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}

.title {
  vertical-align: middle;
  font-size: 22px;
  letter-spacing: 3px;
}

.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 20px;
}

/*左侧菜单样式*/
.menu_page {
  box-sizing: border-box;
  position: fixed;
  top: 72px;
  left: 0;
  width: 220px;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-color: #324057;
  z-index: 99;
}

.el-menu {
  border: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
  margin: 0;
  padding: 0;
}

.el-menu-vertical {
  margin: 0;
  width: 220px;
  margin: 0;
  padding: 0;
}

.el-submenu .el-menu-item {
  min-width: 220px;
}

.el-menu-item {
  width: 220px;
}

a {
  text-decoration: none;
}

.el-menu-item.is-active {
  background-color: #296a4d;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
