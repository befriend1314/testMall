<template>
  <div id="user-info">
    <div>
      <slot name="user-icon">
        <i class="privateImage-svg"></i>
      </slot>
      <div class="login-info">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span class="icon-mobile"></span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <i class="arrow-svg"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
#user-info {
  position: relative;
  background-color: #fa563b;
  padding: 10px 20px 15px;
}
.privateImage-svg {
  display: inline-block;
  width: 60px;
  height: 60px;
  background: #fff url("~assets/img/user/user.png") no-repeat;
  background-size: cover;
  border-radius: 50%;
  vertical-align: middle;
}

 .login-info {
   display: inline-block;
   margin-left: 15px;
   font-size: 20px;
   color: #fff;
   vertical-align: middle;
}
#user-info .login-info .phone {
  font-size: 14px;
  margin-top: 5px;
  font-weight: 300;
}
.icon-mobile {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  background: url("~assets/img/user/phone.png") no-repeat;
  background-size: cover;
}
.arrow-svg{
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -6px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}
</style>