import { Request, Response } from '../../core';
import { CreateWorkoutDTO } from '../dto/create-workout.dto';
import workoutService from '../services';
import { validate } from '../utils';

function getAll(req: Request, res: Response) {
  const workouts = workoutService.getAll();

  return res.json({ status: 'OK', data: workouts });
}

function getOne(req: Request, res: Response) {
  const { params } = req;
  const workout = workoutService.getOne(params.id);

  return res.json({ status: 'OK', data: workout });
}

function createWorkout(req: Request, res: Response) {
  const { body } = req;
  const { name, mode, equipment, exercises, trainerTips } = body;

  try {
    validate(body);
  } catch (error) {
    return res.status(400).json({ status: 'ERROR', data: error.message });
  }

  const newWorkout: CreateWorkoutDTO = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };

  const workout = workoutService.create(newWorkout);
  return res.status(201).json({ status: 'OK', data: workout });
}

function updateWorkout(req: Request, res: Response) {
  const { params, body } = req;
  try {
    validate(body);
  } catch (error) {
    return res.json({ status: 'ERROR', data: error });
  }

  const result = workoutService.update(params.id, body);

  return res.json({ status: 'OK', data: result });
}

function removeWorkout(req: Request, res: Response) {
  const { params } = req;
  const result = workoutService.remove(params.id);

  console.log({ result });

  return res.status(204).send({ status: 'OK' });
}

export default { getAll, getOne, createWorkout, updateWorkout, removeWorkout };
