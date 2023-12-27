/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
        }, ],
    },

}

module.exports = nextConfig
