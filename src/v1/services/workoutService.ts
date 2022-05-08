import { randomUUID } from 'crypto';
import Workout from '../../database';
import { CreateWorkoutDTO } from '../dto/create-workout.dto';

export function getAll() {
  return Workout.findAll();
}

export function getOne(id: string) {
  return 'Not implemented';
}

export function create(workout: CreateWorkoutDTO) {
  const newWorkout = {
    ...workout,
    id: randomUUID({ disableEntropyCache: true }),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  return Workout.create(newWorkout);
}

export function update(id: string, data: object) {
  return 'Not implemented';
}

export function remove(id: string) {
  return 'Not implemented';
}

export default { getAll, getOne, create, update, remove };
