module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "vgiahEkwjCqBA2w/cKYToA=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
