# mrolbiecki.com

Personal website and blog of Marcin Rolbiecki.

Built with [Astro](https://astro.build/) on top of the
[AstroPaper](https://github.com/satnaing/astro-paper) theme (v6.1.0 baseline).

## Development

```bash
pnpm install   # install dependencies
pnpm dev       # start the dev server
pnpm build     # type-check + build + generate the search index
pnpm preview   # preview the production build
pnpm lint      # run eslint
```

## Updating the AstroPaper base

The theme is committed as a pristine upstream snapshot ("Update to AstroPaper
vX.Y.Z template") with personal customizations in the following commit. To pull
a newer version, lay down the new pristine template as its own commit, then
re-apply the customizations on top so the baseline stays diffable.
