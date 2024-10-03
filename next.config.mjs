/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "www.shutterstock.com"
            },
            {
                protocol: "https",
                hostname: "www.google.com"
            },
            {
                protocol: "https",
                hostname: "www.pexels.com"
            },
            {
                protocol:"https",
                hostname: "placehold.co"
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com"
            }
        ],
    }
};

export default nextConfig;
