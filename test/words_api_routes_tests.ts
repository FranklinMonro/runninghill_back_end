import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'node:test';

import App from '../server/app';

chai.use(chaiHttp);

describe('Words api test', () => {
  it('Post a senteces', async () => chai.request(App)
    .post('/runninghillapi/wordsapi')
    .send({ wordtype: 'noun', pagenumber: '1' })
    .end((res) => {
      expect(res).to.have.status(200);
    }));
});
