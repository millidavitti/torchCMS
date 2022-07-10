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
      generateArtifacts: true,
      artifacts: {
        schema: true,
      },
      apolloServer: {
        tracing: true,
      },
    },
  },

  // ...
});
