import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { HttpServer } from '@nestjs/common/interfaces/http/http-server.interface';
import { LogLevel } from '@sentry/types';

export function initSentry(app: HttpServer){
  return
  Sentry.init({
    dsn: "https://6b93116c868343998d44b3575a4b7f7d@o561936.ingest.sentry.io/5699903",
    integrations: [
      new Sentry.Integrations.Http({ tracing: true}),
      new Tracing.Integrations.Express({ app: app as any }),
    ],
    debug: true,
    logLevel: LogLevel.Verbose,
    tracesSampleRate: 1.0,
  });

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());

  app.use(Sentry.Handlers.errorHandler());

  app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });
}
