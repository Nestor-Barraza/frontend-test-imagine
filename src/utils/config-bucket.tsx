import AWS from 'aws-sdk';


interface CustomConfig extends AWS.ConfigurationOptions {
  endpoint?: string;
}

const customConfig: CustomConfig = {
  accessKeyId: process.env.REACT_APP_APPLICATION_KEY_ID,
  secretAccessKey: process.env.REACT_APP_APPLICATION_KEY,
  endpoint: process.env.REACT_APP_ENDPOINT_APP,
  s3ForcePathStyle: true,
};

AWS.config.update(customConfig);

// Crear una instancia de la clase S3
const S3 = new AWS.S3();



export default S3;
  