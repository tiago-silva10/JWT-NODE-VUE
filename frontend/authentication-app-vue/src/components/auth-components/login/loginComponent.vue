<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form
            class="text-center border border-primary p-5"
            v-on:submit.prevent="loginSubmitUserForm()"
          >
            <div class="form-group">
              <label for="email">
                Email:
                <input
                  type="email" id="email"
                  placeholder="digite seu email"
                  class="form-control mb-5"
                  v-model="loginForm.email"
                  :class="{ 'is-invalid': isSubmitted && $v.loginForm.email.$error }"
                />
                <div
                  v-if="isSubmitted && !v.loginForm.email.required"
                  class="invalid-feedback">O campo email é obrigatório!
                </div>
              </label>
              <label for="password">
                Senha:
                <input
                type="password" id="password"
                placeholder="Digite sua senha"
                class="form-control mb-5"
                v-model="loginForm.password"
                :class="{ 'is-invalid': isSubmitted && $v.loginForm.passsword.$error }"
                />
                <div
                  v-if="isSubmitted && !v.loginForm.password.required"
                  class="invalid-feedback">A senha é obrigatória!
                </div>
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

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'loginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required }
    }
  },

  methods: {
    loginSubmitUserForm() {

      this.isSubmitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!" + JSON.stringify(this.loginForm));
    },

    async submitLoginUser() {},
  },
};
</script>

<style scoped></style>
