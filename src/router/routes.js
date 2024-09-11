import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        children:[
            {
                path:'myorder',
                component:myOrder
            },
            {
                path:'grouporder',
                component:groupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:true},
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },    
    {
        path:'/trade',
        component:Trade,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        name:'home',
        path:'/home',
        component:()=>import('@/pages/Home'),
        meta:{show:true}
    },
    {
        name:'login',
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        name:'register',
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        name:'search',
        path:'/search/:keyword',
        component:()=>import('@/pages/Search'),
        meta:{show:true}
    },
    {
        path:'*',
        redirect:'/home',
    }
]