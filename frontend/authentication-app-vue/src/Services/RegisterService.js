import swal from 'sweetalert';
import Api from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      console.log(response);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Excelente!',
          text: 'usuario(a) cadastrado(a) com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar o usuario',
        icon: 'error',
      });
    }
  },
};
