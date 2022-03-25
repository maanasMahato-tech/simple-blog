module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08ef6f3bffea060f5ad61fed4464c405'),
  },
});
