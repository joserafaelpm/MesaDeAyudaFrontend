// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const server = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: 8000,
};

export const environment = {
  production: false,
  encrypt: true,
  keyEcrypt:'Raf4el2023',
  baseUrlAuth: `${server.protocol}://${server.hostname}:${server.port}/api/token`,
  baseUrlUsers: `${server.protocol}://${server.hostname}:${server.port}/usuarios`,
  baseUrlActividades: `${server.protocol}://${server.hostname}:${server.port}/actividades`,
  baseUrlSolicitudes: `${server.protocol}://${server.hostname}:${server.port}/solicitudes`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
