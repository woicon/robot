import Login from "./pages/Login.vue";
import NotFound from "./pages/404.vue";
import Layout from "./pages/Layout.vue";
import Home from "./pages/Home.vue";
let routerlist = [
  {
    path:'robot',
    childen:{
      BaseToggle:'基本状态切换',
      Anm:'动作控制',
      Power:'电池和充电管理',
      Paths:'路径规划',
      Mover:'移动管理',
      Charts:'分解动作最优化',
    },
    icon: 'robot',
    name:'机器人管理'
    }
]
const routes = [
  {
    path: "/login",
    component: Login,
    name: "登录",
    hidden: true
  },
  {
    path: "/404",
    component: NotFound,
    name: "页面未找到",
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    icon: "el-icon-tickets",
    name: "看板",
    children: [
      {
        path: "/order",
        component: () => import("@/pages/plate/Order"),
        name: "订单看板"
      },
      {
        path: "/RobotInfo",
        component: () => import("@/pages/plate/RobotInfo"),
        name: "机器人信息"
      },
      {
        path: "/Workstation",
        component: () => import("@/pages/plate/Workstation"),
        name: "工作站信息"
      },
      {
        path: "/Charging",
        component: () => import("@/pages/plate/Charging"),
        name: "充电桩信息"
      },
      {
        path: "/Statistical",
        component: () => import("@/pages/plate/Statistical"),
        name: "统计信息"
      }
    ]
  },
  {
    path: "/robot",
    component: Layout,
    name: "机器人管理",
    icon: "el-icon-service",
    children: [
      {
        path: "/ordert",
        component: () => import("@/pages/plate/Order"),
        name: "订单看板"
      },
      {
        path: "/orders",
        component: () => import("@/pages/plate/Order"),
        name: "订单看板"
      }
    ]
  }
];
for (let i in routerlist) {
  console.log(i);
}
  
  export default routes;