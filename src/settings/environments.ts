const environment = {
    NODE_ENV: process.env.NODE_ENV || 'local',
    VAR_APP_PORT: process.env.VAR_APP_PORT || '3000',
    VAR_DB_TYPE: process.env.VAR_DB_TYPE || 'postgres',
    VAR_DB_HOST: process.env.VAR_DB_HOST || 'localhost',
    VAR_DB_PORT: process.env.VAR_DB_PORT || '5432',
    VAR_DB_SSL: process.env.VAR_DB_SSL || false,
    VAR_DB_USERNAME: process.env.VAR_DB_USERNAME || 'yahircardona',
    VAR_DB_PASSWORD: process.env.VAR_DB_PASSWORD || 'password123',
    VAR_DB_DATABASE: process.env.VAR_DB_DATABASE || 'panini',
    VAR_ALLOW_SWAGGER: process.env.VAR_ALLOW_SWAGGER || true,
    VAR_ENV_NAME: process.env.VAR_ENV_NAME || 'local',
    S3_ENDPOINT: process.env.S3_ENDPOINT || 'https://nyc3.digitaloceanspaces.com',
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || 'clean-break-profile-picture',
    S3_REGION: process.env.S3_REGION || 'us-east-1',
    S3_SPACES_KEY_ID: process.env.S3_SPACES_KEY_ID || ' ',
    S3_SPACES_SECRET: process.env.S3_SPACES_SECRET || ' ',
    VAR_AUTH0_DOMAIN: process.env.VAR_AUTH0_DOMAIN || ' ',
    VAR_AUTH0_CLIENT_ID: process.env.VAR_AUTH0_CLIENT_ID || ' ',
    VAR_CHECKR_URL:
      process.env.VAR_CHECKR_URL || 'https://api.checkr-staging.com/v1',
    VAR_CHECKR_API_KEY: process.env.VAR_CHECKR_API_KEY || ' ',
  };
  
  export default environment;
  