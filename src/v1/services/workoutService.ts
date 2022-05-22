import { randomUUID } from 'crypto';
import Workout from '../../database';
import { CreateWorkoutDTO } from '../dto/create-workout.dto';
import { UpdateWorkoutDTO } from '../dto/update-workout.dto';

export function getAll() {
  return Workout.findAll();
}

export function getOne(id: string) {
  if (!id) {
    return [];
  }
  return Workout.findOne(id);
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

export function update(id: string, data: UpdateWorkoutDTO) {
  if (!id) {
    return {};
  }
  return Workout.update(id, data);
}

export function remove(id: string) {
  if (!id) {
    return [];
  }
  return Workout.remove(id);
}

export default { getAll, getOne, create, update, remove };
