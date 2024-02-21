import { BlitzCityProvider, RouterHead, RouterOutlet } from "@biliblitz/blitz";

import "./global.css";
import "./tailwind.css";

export default function () {
  return (
    <BlitzCityProvider lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </BlitzCityProvider>
  );
}
