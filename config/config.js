const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "myPortfolio2026",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://bertmorada11_db_user:Qb6k1pHvIOSlOgKW@cluster0.g6frj3u.mongodb.net/Portfolio?appName=Cluster0",
};

export default config;