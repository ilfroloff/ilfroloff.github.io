/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_WEBSITE_ID: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
