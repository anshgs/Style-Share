import dotenv from 'dotenv';
dotenv.config();

const {mongoDB: {username, password}} = {"mongoDB":{"username":"user","password":"password"}};

const isProduction = process.env.NODE_ENV === 'production';

const PRODUCTION_URI = 'placeholder';                               //believe we are running locally so we can use localhost
const DEVELOPMENT_URI = 'mongodb://localhost:27888/style_transfer_db';

// const uri = isProduction ? PRODUCTION_URI : DEVELOPMENT_URI;
const uri = DEVELOPMENT_URI;

export default uri;
