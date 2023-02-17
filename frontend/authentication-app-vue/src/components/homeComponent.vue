<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="">Autenticação JWT + Node + Vue</a>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  @click="logOutUser">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <ul class="list-group">
                <li class="list-grupo-item">Nome: {{ user.name }}</li>
                <li class="list-grupo-item">E-mail: {{ user.email }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'homeComponent',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      // descriptografar o token do usuario
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style scoped></style>
