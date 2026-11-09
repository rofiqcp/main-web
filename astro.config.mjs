import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mcp.otomasi.app',
  srcDir: './astro-src',
  publicDir: './public',
  outDir: process.env.OTOMASI_STAGING === '1' ? './.staging-site' : './docs',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_assets' },
});
