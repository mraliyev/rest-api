import { Request, Response } from '../../core';
import workoutService from '../services';

function getAll(req: Request, res: Response) {
  const response = workoutService.getAll();

  res.json({ response });
}

function getOne(id: string) {
  return workoutService.getOne(id);
}

function createWorkout(req: Request, res: Response) {
  return workoutService.create(req, res);
}

function updateWorkout(id: string, data = {}) {
  return workoutService.update(id, data);
}

function removeWorkout(id: string) {
  return workoutService.remove(id);
}

export default { getAll, getOne, createWorkout, updateWorkout, removeWorkout };
