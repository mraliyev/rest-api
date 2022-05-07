import DB from './db';

const findAll = () => {
  return DB.workouts;
};

export default { findAll };
