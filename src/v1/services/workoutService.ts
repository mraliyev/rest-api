import Workout from '../../database';
import { Request, Response } from '../../core';

export function getAll() {
  return Workout.findAll();
}

export function getOne(id: string) {
  return 'Not implemented';
}

export function create(req: Request, res: Response) {
  return 'Not implemented';
}

export function update(id: string, data: object) {
  return 'Not implemented';
}

export function remove(id: string) {
  return 'Not implemented';
}

export default { getAll, getOne, create, update, remove };
