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
        accessKeyId: "AKIATPCPUKDPD2ZJTN2B",
        secretAccessKey: "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",
        region: "US East (N. Virginia) us-east-1",
        params: {
          Bucket: "torch-cms-media",
        },
      },
    },
  },

  // ...
});
