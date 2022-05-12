import { Command } from 'commander';
import App from './app';
import { ServerConfigFile } from './loaders';

const cmd = new Command()
  .option(
    '-c, --config <path>',
    'Config file location. Default value is "./config/ezserver-updater.config.json"',
    './config/ezserver-updater.config.json'
  )
  .option('--development', 'start EzServer Updater development environment')
  .option('--debug', 'output extra debugging log messages.');

const startServer = async () => {
  const serverConfigFile = new ServerConfigFile(cmd.opts().config);
  const serverConfig = await serverConfigFile.get();

  const app = App(serverConfig);

  app.listen(serverConfig.port, () => {
    console.log(`Server started on PORT: ${serverConfig.port}.`);
  });
};

// start command action
cmd.command('start').action(() => {
  if (cmd.opts().development) {
    process.env.NODE_ENV = 'development';
  } else {
    process.env.NODE_ENV = 'production';
  }
  startServer();
});
cmd.parse(process.argv);
