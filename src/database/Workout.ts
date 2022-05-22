import { UpdateWorkoutDTO } from 'src/v1/dto/update-workout.dto';
import DB from './db';
import { IWorkout } from './types';

function findAll() {
  return DB.workouts;
}

function create(workout: IWorkout) {
  const { workouts } = DB;

  if (workouts.findIndex((item) => item.name === workout.name) !== -1) {
    return {};
  }

  workouts.push(workout);

  return workout;
}

function findOne(id: string) {
  return DB.workouts.reduce<IWorkout[]>((acc, workout) => {
    if (workout.id === id) {
      acc.push(workout);
    }

    return acc;
  }, []);
}

function update(id: string, data: UpdateWorkoutDTO) {
  const workoutIndex = DB.workouts.findIndex((workout) => workout.id === id);

  if (workoutIndex < 0) {
    return {};
  }

  const updatedWorkout = {
    ...DB.workouts[workoutIndex],
    ...data,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  DB.workouts[workoutIndex] = updatedWorkout;

  return updatedWorkout;
}

function remove(id: string) {
  return DB.workouts.filter((workout) => workout.id !== id);
}

export default { findAll, create, findOne, update, remove };
