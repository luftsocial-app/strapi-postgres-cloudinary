module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"], // Specify your origin
      methods: ["GET", "POST", "PUT", "DELETE"], // Allow required methods
      headers: ["Content-Type", "Authorization"], // Include required headers
    },
  },

];
