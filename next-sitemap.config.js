module.exports = {
    siteUrl: 'https://dicosaedrique.fr',
    outDir: 'out',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: 'Googlebot-Image',
                disallow: '/'
            }
        ]
    }
};
