import AdminLayout from '@/admin/Layout'

export const adminRouter = [
  // 管理员页面
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    redirect: '/home2',
    hidden: true,
    meta: {title: '首页'},
    children: [
      {path: 'home',component:()=>import('@/admin/home')}
    ]
  },
  {path:'/home2',redirect: '/admin/home',meta: {title: '首页'},name:'home2'},
  // 设置
  {path:'/admin',component: AdminLayout,redirect: '/admin/admin-user',meta: {title:"系统管理"},children: [
      {path:'admin-user',component:()=>import('@/admin/system/users'),meta:{title:"管理员列表"}},
      {path:'role',component:()=>import('@/admin/system/role'),meta:{title:"角色管理"}},
      {path:'img-map', name:'imgMap',component:()=>import('@/admin/system/img-map'),meta:{title:"图床管理"}},
      {path:'userShop',component:()=>import('@/admin/system/shop-user'),meta:{title:"用户列表"}}
    ]},
  //商品管理
  {
    path:"/admin/product",component: AdminLayout,redirect: '/admin/product/goods',meta: {title:'商品管理'},
    children: [
      {path:'add-prod-info',  component:()=>import('@/admin/product/addProdInfo.vue'),meta:{title:"添加商品"}},
      {path:'goods',component:()=>import('@/admin/product/goods'),meta:{title:"商品管理"}},
      {path:'crate',component:()=>import('@/admin/product/crate'),meta:{title:"分类管理"}},
      {path:'specs',component:()=>import('@/admin/product/specs'),meta:{title:"属性管理"}},
    ]
  },


]