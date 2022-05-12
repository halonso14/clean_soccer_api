import fs from 'fs';
import { IServerConfigFile, ServerConfig } from './types';

/**
 * ServerConfigFile.
 * Get config from server application config file.
 */
export default class ServerConfigFile implements IServerConfigFile {
  /**
   * Set path for server application config file.
   * @param {string} path Path for server application config file.
   */
  constructor(private path: string) { }

  /**
   * Get config from server application config file.
   * @return {Promise<ServerConfig>} Returns ServerConfig.
   * @throw Error object is thrown when failed to server config file.
   */
  public async get(): Promise<ServerConfig> {
    return new Promise((resolve: (value: ServerConfig) => void, reject: (reason: Error) => void) => {
      try {
        const rawdata = fs.readFileSync(this.path);
        const serverConfig = JSON.parse(rawdata.toString());

        return resolve(serverConfig);
      } catch (error: any) {
        reject(new Error(error));
      }
    });
  }
}