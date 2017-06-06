import { Injectable } from '@angular/core';

declare var AWS: any;

@Injectable()
export class AwsConfig {
  public load() {

    // Expects global const values defined by aws-config.js
    const cfg = {
    };

    AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';

    return cfg;
  }
}
