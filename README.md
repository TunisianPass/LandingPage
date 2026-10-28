# TunisianPass — website

The public website for TunisianPass, a customer-engagement project for businesses in Tunisia built around QR-code experiences and supporting business tools.

The source includes French and English pages, contact flows and the wheel-of-fortune experience. It preserves a stage of the project; active development of TunisianPass has ended according to the project portfolio.

## Code map

- `app/` and `app/en/` — French and English routes.
- `app/fortune/` and `app/en/fortune/` — fortune-wheel pages.
- `components/` — landing-page sections and shared interface components.
- `actions/` — contact and email actions.
- `config.js` and `next-sitemap.config.js` — site and sitemap configuration.

## Local development

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and configure only the integrations required for the flow being tested. The example originated from the starter and may include services that are not used by every page. Use development credentials; keep real secrets out of tracked files.

`npm run build`, `npm start` and `npm run lint` are defined in `package.json`. A build also invokes the `postbuild` sitemap command. Check the configured domain before deploying a fork or a local copy.

## Related project

Business, administration and earlier portal implementations live in the [TunisianPass organisation](https://github.com/TunisianPass). They represent different stages of the product.

## Starter attribution

This project was started from the [ShipFast JavaScript starter](https://shipfa.st/), by Marc Louvion. The product-specific application and content are maintained in this repository. See the [upstream documentation](https://shipfa.st/docs) for the starter's setup and conventions.
