import { QueryInterface } from 'sequelize';
import { Url } from '../../types/Url';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('urls',  [
      {
        original_url: 'https://www.betrybe.com/formacao-desenvolvimento-web',
        shortned_url: 'http://localhost:3001/1xb329a',
        user_id: 1,
      },
      {
        original_url: 'https://expressjs.com/en/advanced/best-practice-performance.html',
        shortned_url: 'http://localhost:3001/2xc453b',
        user_id: 2,
      }
    ]);
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('urls', {});
  }
}