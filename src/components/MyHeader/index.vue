<template>
  <header class="header">
    <div class="top">
        <div class="container">
            <div class="loginList">
                <p>尚品汇项目</p>
                <p v-if="!userName">
                    <span>请</span>
                    <router-link to="/login" >登录</router-link>
                    <router-link to="/register" class="register">免费注册</router-link>
                </p>
                <p v-else>
                    <a href="">{{ userName }}</a>
                    <a class="register" @click="logout">退出登录</a>
                </p>
            </div>
            <div class="typeList">
                <router-link to="/center/myorder">我的订单</router-link>
                <router-link to="/shopcart">我的购物车</router-link>
                <a href="##">我的尚品汇</a>
                <a href="##">尚品汇会员</a>
                <a href="##">企业采购</a>
                <a href="##">关注尚品汇</a>
                <a href="##">合作招商</a>
                <a href="##">商家后台</a>
            </div>
        </div>
    </div>
    <div class="bottom">
        <h1 class="logoArea">
            <router-link class="logo" to="/home">
                <img src="../../assets/images/logo.png" alt="默认图片">
            </router-link>
        </h1>
        <div class="searchArea">
            <form action="" class="searchForm">
                <input type="text" v-model="keyword">
                <button @click="goSearch">搜索</button>
            </form>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name:'MyHeader',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        goSearch(){
            if(this.$route.query){
                let loction = {name:"search",params:{keyword:this.keyword || undefined}}
                loction.query = this.$route.query
                this.$router.push(loction)
            }
        },
        async logout(){
            try{
                await this.$store.dispatch('userLogout')
                this.$router.push('/home')
            }catch(error){
                alert(error.message)
            }
        }
    },
    mounted(){
        this.$bus.$on('clear',()=>{
            this.keyword=''
        })
    },
    computed:{
        userInfo(){
            return this.$store.state.user.userInfo||''
        },
        userName(){
            return this.userInfo.name||''
        }
    }
}
</script>

<style scoped lang="less">
.header{
    & > .top{
        background-color: rgb(197, 231, 231);
        height: 30px;
        line-height: 30px;
        .container{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            .loginList{
                float: left;
                p{
                    float: left;
                    margin-right: 10px;
                    .register{
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                } 
            }
            .typeList{
                float:right;
                a{
                    padding: 0 10px;
                    & + a {
                        border-left: 1px solid #b3aeae;
                    }
                }
            }
        }
    }
    & > .bottom{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .logoArea{
            float: left;
            .logo{
                img{
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }
        .searchArea{
            float: right;
            margin-top:35px;
            .searchForm{
                overflow: hidden;
                input{
                    box-sizing: border-box;
                    width:490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #b45151;
                    float: left;
                    &:focus{
                        outline: none;
                    }
                }
                button{
                    height: 32px;
                    width: 68px;
                    background-color: #9f4444;
                    border: none;
                    color: aliceblue;
                    float: left;
                    cursor: pointer;
                    &:focus{
                        outline: none;
                    }
                }
            }
            
        }
    }
}
</style>