/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'http://localhost:3000',
        DB_LOCAL_URI: 'mongodb://127.0.0.1:27017/BookIt',
        DB_URI: "",
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: "HIFJDKBNSFSKDJFBSDLFKNSDBFLJSDHFGVJ",
    },
    images: {
        domains: ['res.cloudinary.com'],
    }
}

module.exports = nextConfig
