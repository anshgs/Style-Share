import mongoose from 'mongoose';
import uri from '../config/db.config.js';
import Resource from './resource.model.js';
import User from './user.model.js';

const db = {
  mongoose,
  uri,
  Resource,
  User,
};

export default db;
