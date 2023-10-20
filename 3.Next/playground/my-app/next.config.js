/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

module.exports = withBundleAnalyzer(withMDX({
    reactStrictMode: true,
    webpack: (config, options) => {
        const {buildId, dev, isServer, defaultLoaders, webpack} = options;
        // Important: return the modified config
        //  isServer : 웹팩 함수는 server,client 각각 한번씩 실행된다.
        return config
    },
    pageExtensions: ['js', 'jsx','ts','tsx', 'md', 'mdx'],
}))
