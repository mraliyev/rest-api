import { IWorkout } from '../../database/types';
import { Optional } from '../../core/types';

export type CreateWorkoutDTO = Optional<IWorkout, 'id' | 'createdAt' | 'updatedAt'>;
