# Eco Youth Campaign React

> The goal is to make an accessible website for a project

This is the codebase of the https://ecoyouthcampaign.com website

## Used dependencies and tools

- React + TypeScript + Vite
- [i18next](https://www.npmjs.com/package/i18next)
- [React Image Gallery](https://www.npmjs.com/package/react-image-gallery)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [HeroIcons](https://heroicons.com/)

GitHub actions is active for the CI/CD and deployment of the website via FTP which is much more convenient than SSH, shared hosting is restrictive.

CI/CD tool that was used is the [FTP deploy](https://github.com/SamKirkland/FTP-Deploy-Action)

The website is running on an Apache HTTP server, for React router, it was neccesary to use an .htaccess file.
