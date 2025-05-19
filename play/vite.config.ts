/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@bottle-ui': path.resolve(__dirname, '../packages'),
    },
  }
})