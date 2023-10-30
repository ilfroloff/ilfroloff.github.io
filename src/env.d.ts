/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
