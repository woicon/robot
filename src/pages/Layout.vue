<template>
	<el-container>
		<el-header>
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="6" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"> 欢迎您，{{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-header>
        <el-container>
            <el-aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!--导航菜单-->
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                        unique-opened router v-show="!collapsed">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''" v-if="!item.leaf">
                            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <el-row type="flex" justify="space-between" align="middle">
                    <el-col :span="12">
                        <h1 class="title">{{$route.name}}</h1>
                    </el-col>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                            {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                </el-row>
                <transition name="fade" mode="out-in">
                <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
	</el-container>
</template>

<script>

export default {
  data() {
    return {
      sysName: "DAIMLER Control Tower",
      collapsed: false,
      sysUserName: "",
      sysUserAvatar: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    this.sysUserName = user;
  }
};
</script>

<style scoped lang="less" scope>
    .el-container{
        height:100%;
    }
    .el-header{
        background:darken(#2c323a,4%) !important;
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    .logo{
        font-size:20px;
        font-weight:800;
        color:#fff;
        line-height:60px;
        font-family: serif;
    }
    .userinfo{
        display: flex;
        justify-content: flex-end;
        
    }
    .el-dropdown{
        color:#fff;
    }
    .el-menu{
        height:100%;
    }
</style>