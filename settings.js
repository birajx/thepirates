require('dotenv').config()
module.exports = {
  mode: "production",
  web: {
    title: "The Pirates",
    url: "http://localhost",
    port: "3000",
    themes: "default",
    pages: {
      home: {
        title: "The Pirates",
        description: "w9oeubrwob",
      },
      dl: {
        title: "The Pirates | Download",
        description: "",
      },
      countdown: {
        title: "The Pirates | Coming Soon!",
        description: "Idk when lol"
      }
    },

  },
  discord: {
    token: process.env.discord_token,
    id: process.env.discord_id,
    secret: process.env.discord_secret,
    api: process.env.api,
    server: process.env.server_id,
    dev: ["biraj", "Gaurav", "GTMSudarshan"],
  },
};
