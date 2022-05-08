import DB from './db';
import { IWorkout } from './types';

const findAll = () => {
  return DB.workouts;
};

const create = (workout: IWorkout) => {
  const { workouts } = DB;

  if (workouts.findIndex((item) => item.name === workout.name) !== -1) {
    return {};
  }

  workouts.push(workout);

  return workout;
};

export default { findAll, create };
