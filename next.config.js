/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"]
    },
    env: {
        MONGO: "mongodb+srv://umitdemirci1996:qWcnz6OPsE8FMfgP@lama-dev-next.7ajp7h4.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig
