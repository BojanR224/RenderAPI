export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["T5+18McggTHKTF4oF/CbmQ==","j68uA4ucE1ZevQfMqbgQ1g==","0+o4oYVSDA/lbZ2QgO7nyQ==","1eTJ/NivuhsMuJY4dNEYlg=="],
  },
});
