import { router } from '../../core';
import workoutController from '../controllers';

router.get('/workouts', workoutController.getAll);
router.get('/workouts/:id', workoutController.getOne);
router.post('/workouts', workoutController.createWorkout);
router.put('/workouts/:id', workoutController.updateWorkout);
router.delete('/workouts/:id', workoutController.removeWorkout);

export default router;
