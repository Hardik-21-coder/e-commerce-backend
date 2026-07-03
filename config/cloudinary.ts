import { v2 as cloudinary } from 'cloudinary'
import env from '#start/env'

console.log("========== CLOUDINARY CONFIG ==========")
console.log("Cloud Name :", env.get('CLOUDINARY_CLOUD_NAME'))
console.log("API Key    :", env.get('CLOUDINARY_API_KEY'))
console.log("API Secret :", env.get('CLOUDINARY_API_SECRET'))
console.log("=======================================")

cloudinary.config({
  cloud_name: env.get('CLOUDINARY_CLOUD_NAME'),
  api_key: env.get('CLOUDINARY_API_KEY'),
  api_secret: env.get('CLOUDINARY_API_SECRET'),
})

export default cloudinary
