import { IWorkout } from '../../database/types';

export function validate(data: IWorkout) {
  const { name, mode } = data;
  if (!name || !mode) {
    throw new Error('Data is not valid');
  }
}

export default {};
