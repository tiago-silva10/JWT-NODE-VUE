<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form class="text-center border border-primary p-5">
            <div class="form-group">
              <label for="email">
                Email:
                <input
                  type="email" id="email"
                  placeholder="digite seu email"
                  class="form-control mb-5"
                  v-model="loginForm.email"
                />
              </label>
              <label for="password">
                Senha:
                <input
                type="password" id="password"
                placeholder="Digite sua senha"
                class="form-control mb-5"
                v-model="loginForm.password"
              />
              </label>
            </div>
            <p class="center">Não tem uma conta cadastrada?
              <router-link to="/register">
                Cadastre-se Aqui!
              </router-link>
            </p>
            <button
              @click="submitLoginUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
            Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'loginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    loginSubmitUserForm() {},
    async submitLoginUser() {},
  },
};
</script>

<style scoped>
</style>
