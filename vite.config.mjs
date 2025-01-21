import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['./__tests__/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: './__tests__/__helpers__/setup.ts',
        coverage: {
            include: ['__components__'],
            thresholds: {
                '100': true
            }
        }
    }
});
