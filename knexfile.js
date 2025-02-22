// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      filename: './dev.sqlite3'
    }, 
    migrations : {
      directory : './migrations/'
    }, 
    seeds : {
      directory : './seeds'
    }, 
    pool : {
      afterCreate : (conn,done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      filename : './test.db3'
    },
    pool: {
      afterCreate : (conn,done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory : './migrations/'
    },
    seeds : {
      directory : './seeds/'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
