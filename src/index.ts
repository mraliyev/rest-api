import { server } from './core';
import workoutRoutes from './v1/routes';

async function main() {
  const PORT = process.env.PORT || 3000;

  server.use('/api/v1', workoutRoutes);

  server.listen(PORT, () => console.log('Server is running on port:', PORT));
}

main().catch((error) => console.log(error));
