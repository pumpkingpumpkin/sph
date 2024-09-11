public[静态资源，webpack打包时候会原封不动打包到dist中] 
assets[静态资源，再webpack打包时候会把静态资源当作一个模块打包到js文件里面]
babel把es6语法翻译es5，用于兼容
package.json 记录项目基本信息（项目身份证）
package-lock.json 缓存性文件 
项目@别名设置/自动打开浏览器/eslint校验工具关闭{
    1//"serve": "vue-cli-service serve --open"
    2//lintOnSave:false
    3//{vue2里面已经配好，good}
}
路由的分析：
[路由组件：Home,Search,Login,Register]
[非路由组件：Header,Footer(在Login和Register组件下隐藏)]
[用到了less] npm install less-loader

npm i vue-router@3  [vue2里面用vue-router3版本]
pages
router
路由式跳转：
编程式导航$router.push|replace,
声明式导航router-link(to属性)
params:要占位[路由router要配置]
query:不要占位
[面试题1：path是否可以结合params一起使用   答：不能 对象写法可以是name，path，但是不能结合params]
[面试题2：如何指定params参数可传可不传   答：得加个？（0/1可有可无）不然路径有问题，没有search路径]
[面试题3：params如果传的是空串，如何解决 答：使用undefined解决params可以传递，不传递问题 params:{keyword:''||undefined}]
[面试题4：路由组件能不能传递props数据？ 答：可以，三种写法1.布尔值，2.对象写法，3.函数写法]

重写push和replace方法（解决多次路由跳转执行会报错问题[声明式导航不会有问题]）
[vue-router@3引入了promise,返回值为一个promise]
[解决方法1.用resolve，reject接收错误信息（治标不治本）]
[解决方法2. push：VueRouter原型对象上的方法，需要重写push上方法]

[Home组件]
[1.三级联动组件（全局组件）]

最新接口地址： http://gmall-h5-api.atguigu.cn

 npm i axios
 跨域：jsonp，cors，proxy

 npm i --save  nprogress[进度条插件]

vuex[集中式管理][state,mutations,actions,getters,modules]
npm i vuex@3 [vue2用的vuex版本为3代]

[性能优化1：卡顿现象][用户操作过快：一级分类只有部分触发][方法：防抖与节流]
import throttle from 'lodash/throttle'

[router-link 耗内存，会出现卡顿现象，1000+个router-link]
[编程式导航：this.$router.push('/search')  每个a标签有自己的回调，1000+，方法还是不好]
[利用事件的委派：放在父标签里面，用编程式导航+事件委派+自定义属性]
[1.怎么确定点击的是a标签？h3，dt，dl，em][:data-categoryName="c3.categoryName" a标签加上自定义标签]
[2.参数如何获取？][event获取触发事件的节点，h3，a，dt，dl，需要的是:data-categoryName="c3.categoryName"，获取节点自定义属性dataset][event.target.dataset]

[过渡动画：前提组件要有v-if/v-show]
[性能优化2：三级分类列表每次跳转就会向服务器请求（home跳search三级都会重建和销毁）][方法：三级分类里请求store（派发）放在App里，只是请求一次]
[合并params和query参数]

[home首页，mockjs模拟数据开发ListContainer组件与Floor组件]
[印记中文： https://docschina.org/][随机生成接口，拦截Ajax请求]
[npm install mockjs]
[步骤 1.)创建mock文件夹 2.)准备json假数据 3)把mock数据需要的图片放置到public文件夹里面 4)通过mockjs制作假数据 5)在入口文件执行一遍]

[易错点1:别忘了加get][Mock.mock("/mock/floor",'get',{data:floor});]

[swiper轮播图(swiper@5)][1)引入js与css 2）页面结构一定要有 3）new Swiper实例][npm i --save swiper@5]
[注意点1：v-for遍历数据。组件挂载/发起ajax请求/初始化swiper实例/在仓库修改数据（遇到异步操作）][1.放在updated，耗性能，每次更新都会new Swiper][2.定时器异步操作，但是不好，会有延迟展示]
[(最好方法)：watch(数据监听，Object.definedProperty)+nextTick()][watch只能保证数据一变化就有数据，但是不能保证v-for结构已经渲染完毕，nextTick能在下次dom更新循环结束之后（v-for）执行回调][购物车结算-1，change，+1同用一个后端接口（点击有半秒+的延迟）]

[组件通信：props,@on,@emit.$bus,vuex,pubsub]
[三个new轮播图封装为一个全局组件][后面分页器也封装为全局组件]
[watch立即监听immediate]


[Search组件开发][静态页面，api发请求，vuex三连环，组件动态获取]
[return state.searchList.goodsList||[]][防止网络太慢没有数据还要.goodsList]
[search请求数据随着参数不同每次都需要发送请求（不能放在mounted）,放在methed里面]
[Object.assign方法合并对象]
[请求放在mounted，请求只会发送一次==（修改）==》]
[面包屑功能开发:][1.路由跳转，自己跳自己][2.面包屑组件keyword清除后，兄弟的keyword关键字也得清除（搜索每次只能点击一次BUG）props父子/自定义emit子父/vuex：存储数据，万能/插槽：父子/pubsub-万能/全局$bus]
[BUG:（面包屑删除后路由路径删不掉,ok），(删除面包屑2后还藏在面包屑1里面,ok)][keyword作为params的数据][{categoryName: '手机', category1Id: '2'}作为query的参数]
[问题Header的搜索的keyword怎么和Search组件的keyword绑定，off]

[品牌组件,子组件发请求，父组件修改，子父传递（自定义emit）]
[数组展示不能用v-if,用v-for]

[难点1：Search组件排序操作，综合排序，价格排序，asc升序，desc降序]
[1(综合)2（价格）]
[运用svg矢量库]

[三大模块：分页（√），登录注册（），支付（）]
[轮播图(√)，分页(√)，日历()]
[全局组件分页:饿了么有个分页组件，这个项目前台的话自己做，后台再采用饿了么分页组件pageNo（当前第几页），PageSize（每一页需要展示多少条数据），一共有多少条数据Total，连续页码数目continues][重点：连续页面起始数字和结束数字][分页器动态展示][手写分页器（√）]

[商品详情页开发][放大镜][注意空对象undef.数据][购物车组件]
[点谁谁亮（排他算法）][轮播图][兄弟之间传值，轮播图给放大镜传值（pubsub）（$bus）][购物车组件实现，有个用户输入购买数量,(加入购物车要传递购买产品给服务器,store不需要三连环,query传参会被转为字符串)][h5新增的本地存储（5mb），会话存储（购物车使用，购买数量用路由传递。商品信息用会话存储，字符串）][去购物车结算(静态修改结构)][用uuid来识别身份，请求头带参,每次请求响应器都会带uuid_token][对按钮进行节流操作][没有一次删除全部的接口，只有一次删一个的接口（Promise.all）多个删除promise，有一个失败则失败，全部成功才是成功][context:commit/getters/dispatch]

[登录与注册组件开发][表单验证先不做][.prevent组织默认行为][token现在是后端给的（工作中只给token，但是这个项目还会直接给你用户信息）]
[登录与注册/asset文件夹全部打包][请求头带信息，而不是在接口里][]
[注册组件获取验证码是模拟数据（实际开发是发送到手机，省钱）]
[存在问题1：每个组件都要请求getUserInfo；2：用户已经登录了后还能跳到登录页面]
[导航守卫，路由守卫组件]
[1.全局守卫（前置后置）]
[2.路由独享守卫] 
[3.组件内守卫]

[订单支付页面][后台拿营业执照][element-ui，支付弹窗][element-ui按需引入]
[vue-helper][生成二维码QRcode函数库npm i qrcode]

[个人中心][合并单元格]
[路由守卫：未登录   交易（trade）/支付相关（pay/paysuccess）/用户中心（center）不能跳转][路由独享守卫 只有从购物车界面才能去交易页面 只有从交易页面才能去支付页面 只有从支付页面才能去支付成功页面]
[面试1：封装一些组件：分页器+日历]
[优化2：图片懒加载/vue-lazyload, npm i vue-lazyload@^1.2.6 --save/自定义指令v-lazy，自定义插件plugins/myPlugins]
[表单验证][用2版本的npm i vee-validate@2]
[路由懒加载][打包上线js会特别大，影响页面加载，路由访问时才加载对应组件]

[打包上线][打包后代码经过压缩加密，输出错误信息不知道是哪里错误，map文件的话就可以知道哪里出错][productionSourceMap:false，去掉打包文件map]





























