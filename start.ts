import * as concurrently from 'concurrently';

interface CommandObj {
  command: string;
  env?: NodeJS.ProcessEnv;
  name?: string;
  prefixColor?: string;
}

const concurrentlyTask: CommandObj[] = [
  {
    name: 'sample.min.js build',
    command: 'nodemon',
  },
  {
    name: 'server:dev',
    command: 'npm run server:dev',
  },
];

(async function main() {
  try {
    const options: concurrently.Options = {
      prefix: 'name',
      killOthers: ['failure', 'success'],
      restartTries: 1,
    };
    await concurrently(['npm:watch-*', ...concurrentlyTask], options);
  } catch (err) {
    process.exit(0);
  }
})();
