import addToSwaggerConfig from './swaggerUtils';

const config = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Runninghill API',
    description: 'Endpoints for Runninghill API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: '/runninghillapi/',
      description: 'Local Dev',
    },
  ],
  tags: [
    {
      name: 'Create sentences as per word type',
      description: 'API for creating sentences',
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
