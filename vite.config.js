import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// respeta el puerto asignado por el entorno (varios proyectos en paralelo)
		port: Number(process.env.PORT) || 5301,
	},
})
