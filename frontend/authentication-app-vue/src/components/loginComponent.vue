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
              />
            </label>
            <div>
              <span v-if="loginForm.email.required">O Campo email é obrigatório!</span>
            </div>
            <label for="password">
              Senha:
              <input
                type="password" id="password"
                placeholder="Digite sua senha"
                class="form-control mb-5"
                v-model="loginForm.password"
              />
            </label>
            <div>
              <span v-if="loginForm.password.required">A senha é obrigatória!</span>
            </div>
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
import swal from 'sweetalert';
import loginService from '@/Services/LoginService';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'loginComponent',
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      loginForm: {
        email: { required },
        password: { required },
      },
    };
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        if (this.email.length !== 0 && this.password.length !== 0) {
          swal({
            title: 'Oops!',
            text: 'Usuario ou senha incorreto!',
            icon: 'error',
          });
          return;
        }
        await loginService.loginUser(this.loginForm);
        this.$router.push('/home');
      } catch (error) {
        swal({
          title: 'Senha Incorreta!',
          text: 'Alguma coisa deu errada!',
          icon: 'error',
        });
      }
    },
  },
};
</script>

<style scoped>
  form {
    margin-top: 70px;
    height: auto;
    padding-top: 100px;
  }
</style>
