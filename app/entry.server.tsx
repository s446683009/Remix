import { PassThrough } from "stream";

import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { CacheProvider, CacheProvider as EmotionCacheProvider, EmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from './components/createEmotionCache';
import getTheme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { renderHeadToString } from 'remix-island';
import { Head } from './root';
const ABORT_DELAY = 5000;
const theme=getTheme('');
const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
export default handleRequest;



function MuiRemixServer({cache,remixContext,url}:{cache:EmotionCache,remixContext:EntryContext,url:string}) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        
          <RemixServer context={remixContext} url={url} abortDelay={ABORT_DELAY} />
      </StyledEngineProvider>
      </ThemeProvider>
   </CacheProvider>
  );
}

const handleBotRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  new Promise((resolve, reject) => {
    let didError = false;
    const cache = createEmotionCache();
 

  
    const { pipe, abort } = renderToPipeableStream(
        <MuiRemixServer cache={cache} remixContext={remixContext} url={request.url} />,
      {
        onAllReady: () => {
          const reactBody = new PassThrough();
          const emotionServer = createEmotionServer(cache);

          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          reactBody.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(reactBody);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  new Promise((resolve, reject) => {
    let didError = false;
   
    const cache = createEmotionCache();
   
    const { pipe, abort } = renderToPipeableStream(
      <MuiRemixServer cache={cache} remixContext={remixContext} url={request.url} />,
      {
        onShellReady: () => {
          const head = renderHeadToString({ request, remixContext, Head });
          const reactBody = new PassThrough();
          const emotionServer = createEmotionServer(cache);
          
   
          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          reactBody.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");
          reactBody.write(
            `<!DOCTYPE html><html><head>${head}</head><body><div id="root">`,
);

          resolve(
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(reactBody);
          reactBody.write(`</div></body></html>`);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });