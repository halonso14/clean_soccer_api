export interface IServerConfigFile {
  get(): Promise<ServerConfig>;
}

export type ServerConfig = {
  name: string,
  version: string,
  prefix: string,
  port: number
}