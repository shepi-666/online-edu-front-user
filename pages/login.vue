<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/registry">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item class="input-prepend restyle" prop="mobile" :rules="[{ required: true, message: '请输入邮箱号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
          <div >
            <el-input type="text" placeholder="邮箱号" v-model="user.mobile"/>
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://qy.free.idcfengye.com/api/ucenter/weixinLogin/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'
  import cookie from 'js-cookie'
  import loginApi from '@/api/login'

  export default {
    layout: 'sign',

    data () {
      return {
        user:{ // 封装邮箱和密码对象
          mobile:'',
          password:''
        },
        loginInfo:{} // 用于封装登录之后的信息
      }
    },

    methods: {
      // 登录的方法, 调用接口，返回token字符串
      submitLogin(){
        loginApi.login(this.user)
        .then(response => {
          // 将token放到cookie中去
          // cookie名称、参数值、作用范围
          if (response.data.data.token) {
            cookie.set("guli_token", response.data.data.token, {domain: 'localhost'})
            // 调用接口，根据token信息，获取用户的信息，用户首页面的显示
            loginApi.getLoginInfo()
              .then(response => {
                // 获取返回的用户信息，放到cookie中
                this.loginInfo = response.data.data.userInfo
                cookie.set("guli_center", JSON.stringify(this.loginInfo),{ domain: "localhost" });
                // 跳转到登录页面
                window.location.href = "/"
              })
          } else {
            alert("请检查账号密码是否正确")
          }
        })
      },


      checkPhone (rule, value, callback) {
        //debugger
        if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) {
          return callback(new Error('邮箱号码格式不正确'))
        }
        return callback()
      }
    }
  }
</script>
<style>
  .el-form-item__error{
    z-index: 9999999;
  }
</style>
