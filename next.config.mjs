const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '/**',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
