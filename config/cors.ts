import { defineConfig } from '@adonisjs/cors'

export default defineConfig({
  enabled: true,
  origin: ['https://e-commerce-two-kappa-11.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: true, // 🔥 IMPORTANT
})
