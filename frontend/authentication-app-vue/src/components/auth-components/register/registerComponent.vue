<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form class="text-center border border-primary"
            v-on:submit.prevent="registerSubmitUserForm()"
          >
          <label for="name">
            Nome:
            <input type="text" id="name"
              class="form-control mb-5"
              placeholder="Digite seu nome"
              v-model="registerForm.name"
            />
          </label>
          <label for="email">
            Email:
            <input type="email" id="email"
              class="form-control mb-5"
              placeholder="Digite seu email"
              v-model="registerForm.email"
            />
          </label>
          <label for="password">
            Senha:
            <input type="text" id="password"
              class="form-control mb-5"
              placeholder="Digite sua senha"
              v-model="registerForm.password"
            />
          </label>
          <p class="center">
            Ja possui cadastro?<router-link to="/">Faça login aqui!</router-link>
          </p>
          <button @click="submitRegisterUser" class="btn btn-primary btn-block w-75 my-4">
            Cadastrar
          </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'registerComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    registerSubmitUserForm() {},
    submitRegisterUser() {},
  },
};
</script>

<style scoped>

</style>
