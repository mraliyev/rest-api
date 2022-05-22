import { IWorkout } from '../../database/types';
import { Optional } from '../../core/types';

export type UpdateWorkoutDTO = Optional<IWorkout, 'id' | 'createdAt' | 'updatedAt'>;
