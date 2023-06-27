import addToSwaggerConfig from './swaggerUtils';

const config = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Beneple API',
    description: 'Endpoints for Beneple API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: '/',
      description: 'Local Dev',
    },
  ],
  tags: [
    {
      name: 'Announcements',
      description: 'API for announcements in the system',
    },
  ],
  consumes: [
    'application/json',
  ],
  produces: [
    'application/json',
  ],
  paths: {},
  components: {
    schemas: {},
  },
};

export default addToSwaggerConfig(config);
