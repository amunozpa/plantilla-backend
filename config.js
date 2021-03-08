module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'Oe5qpC6suE',
        password: process.env.MYSQL_PASS || 'VMw7pCWJF9',
        database: process.env.MYSQL_DB || 'Oe5qpC6suE',
        port:process.env.MYSQL_PORT || 3306
    },
}