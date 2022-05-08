import { Request, Response } from '../../core';
import { CreateWorkoutDTO } from '../dto/create-workout.dto';
import workoutService from '../services';

function getAll(req: Request, res: Response) {
  const workouts = workoutService.getAll();

  res.status(200).json({ status: 'OK', data: workouts });
}

function getOne(id: string) {
  return workoutService.getOne(id);
}

function createWorkout(req: Request, res: Response) {
  const { body } = req;

  if (!body.name || !body.mode) {
    return;
  }

  const newWorkout: CreateWorkoutDTO = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const workout = workoutService.create(newWorkout);
  res.status(201).json({ status: 'OK', data: workout });
}

function updateWorkout(id: string, data = {}) {
  return workoutService.update(id, data);
}

function removeWorkout(id: string) {
  return workoutService.remove(id);
}

export default { getAll, getOne, createWorkout, updateWorkout, removeWorkout };
