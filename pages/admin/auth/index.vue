<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <label>Email Address</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <div class="auth-group-btn">
          <button type="submit">{{ isLogin ? "Login" : "SignUp" }}</button>
          <button @click.prevent="isLogin = !isLogin">
            Switch to {{ isLogin ? "SignUp" : "Login" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  margin: 0.2rem;
}
.auth-group-btn {
  margin-top: 1rem;
}
</style>
