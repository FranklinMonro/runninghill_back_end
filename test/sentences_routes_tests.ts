import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'node:test';

import App from '../server/app';

chai.use(chaiHttp);

describe('Sentences Routes test', () => {
  describe('Get word types', () => {
    it('Should have word types', async () => {
      chai.request(App)
        .get('/runninghillapi/senttenceroutes/wordtype')
        .end((res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
