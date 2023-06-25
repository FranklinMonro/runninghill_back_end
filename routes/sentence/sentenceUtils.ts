import express from 'express';

import { registerUser } from './registerControllers';

class RegisterUserRouter {
  public router = express.Router();

  constructor() {
    this.router.post('/', registerUser);
  }
}

export default new RegisterUserRouter().router;