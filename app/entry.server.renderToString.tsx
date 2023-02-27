import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import createEmotionCache from './components/createEmotionCache';
import getTheme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { StyledEngineProvider } from '@mui/material/styles';
const theme=getTheme('');

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  function MuiRemixServer() {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
        
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <StyledEngineProvider injectFirst>
            <RemixServer context={remixContext} url={request.url} />
            </StyledEngineProvider>
        </ThemeProvider>
      </CacheProvider>
    );
  }

  // Render the component to a string.
  const html = renderToString(<MuiRemixServer />);
  // Grab the CSS from emotion
  const { styles } = extractCriticalToChunks(html);

  let stylesHTML = '';

  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(' ')}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });

  // Add the Emotion style tags after the insertion point meta tag
  const markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `${stylesHTML}<meta name="emotion-insertion-point" content="emotion-insertion-point"/>`,
  );
   
  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
