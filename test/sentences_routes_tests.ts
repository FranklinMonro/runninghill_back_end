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
  describe('Check sentences', () => {
    it('Should get senteces', async () => {
      chai.request(App)
        .get('/runninghillapi/senttenceroutes/sentence')
        .end((res) => {
          expect(res).to.have.status(200);
        });
    });

    it('Post a senteces', async () => {
      chai.request(App)
        .post('/runninghillapi/senttenceroutes/sentence')
        .send({ sentence: 'test centence' })
        .end((res) => {
          expect(res).to.have.status(200);
        });
    });

    it('Delete a senteces', async () => {
      chai.request(App)
        .delete('/runninghillapi/senttenceroutes/sentence')
        .send({ sentenceID: '910bc61f-f035-4a1f-958f-673efb67ba99', sentenceDelete: false })
        .end((res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
