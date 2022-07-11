module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  ckeditor: true,
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: process.env("AWS_ACCESS_SECRET"),
        region: process.env("AWS_REGION"),
        params: {
          Bucket: process.env("AWS_BUCKET"),
        },
      },
    },
  },

  // ...
});
