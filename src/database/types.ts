interface IWorkout {
  id: string;
  name: string;
  mode: string;
  equipment: string[];
  exercises: string[];
  createdAt: string;
  updatedAt: string;
  trainerTips: string[];
}

export { IWorkout };
export default {};
