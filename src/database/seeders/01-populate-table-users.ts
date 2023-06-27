import { QueryInterface } from 'sequelize';
import { User } from '../../types/User';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'aracelyledner@desafio-extra-ts.com',
        password: 'aracely123',
        status: 1,
        username: 'aracely_ledner',
        activation_code: 'feeb7047c5161220accb4db4c06099a88a8d0e21',    
      },
    {
      email: 'valentin_ondricka@desafio-extra-ts.com',
      password: 'valondricka',
      status: 0,
      username: 'valentin_ondricka',
      activation_code: 'f9839c500079ae9f3adbac1997d6fa1483aa7c05'
    }]);
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('users', {});
  }
}