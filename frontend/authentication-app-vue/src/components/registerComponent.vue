<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <div class="form-group">
            <label for="name">
              Nome:
              <input type="text" id="name"
                class="form-control mb-5"
                placeholder="Digite seu nome"
                v-model="registerForm.name"
              />
            </label>
            <div>
              <span v-if="!v.registerForm.name.required">O campo nome é obrigatório!</span>
            </div>
          </div>
          <div class="form-group">
            <label for="email">
              Email:
              <input type="email" id="email"
                class="form-control mb-5"
                placeholder="Digite seu email"
                v-model="registerForm.email"
              />
            </label>
            <div>
              <span v-if="!v.registerForm.email.required">O campo e-mail é obrigatório!</span>
            </div>
          </div>
          <div class="form-group">
            <label for="password">
              Senha:
              <input type="password" id="password"
                class="form-control mb-5"
                placeholder="Digite sua senha"
                v-model="registerForm.password"
              />
            </label>
            <div>
              <span v-if="!v.registerForm.password.required">A senha é obrigatória!</span>
              <span
                v-if="!v.registerForm.password.minlength">
                  A senha deve conter pelo meno 8 caracteres!
              </span>
            </div>
          </div>
          <p class="center">
            Ja possui cadastro?<router-link to="/">Faça login aqui!</router-link>
          </p>
          <button
            @click="submitRegisterUser"
            class="btn btn-primary btn-block w-75 my-4">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import RegisterService from '@/Services/RegisterService';
import { required, minLength, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'registerComponent',
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      registerForm: {
        name: { required },
        email: { required, email },
        password: { required, minLength: minLength(8) },
      },
    };
  },
  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
      try {
        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Algo deu errado!',
          icon: 'Error',
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
