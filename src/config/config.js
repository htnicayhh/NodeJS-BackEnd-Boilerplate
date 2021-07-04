export default {
    PORT: process.env.DB_PORT || 3306,
    MYSQL_URL: process.env.MYSQL_URL || 'mysql://root:Hyacinth130620@localhost:3306/todoapp',
    JWT_SECRET: process.env.TOKEN_SECRET || 'htnica-yh'
}