import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

/**
 * Unification of configuration access. Thanks to
 * this we can always using exactly the same class to
 * get configuration. It doesn't matter if you use config.json
 * .env or whatever...
 */
export interface IConfig {
  /**
   * Get parameter from configuration file
   *
   * @param {string} key
   */
  get(key: string): string;
}

@Injectable()
export class ConfigService implements IConfig {
  private dotenvConfig;

  constructor() {
    this.dotenvConfig = config();
  }

  get(key: string): string {
    return this.dotenvConfig.parsed[key];
  }
}
