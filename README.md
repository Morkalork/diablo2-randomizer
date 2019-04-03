# diablo2-randomizer

## Live demo

You can visit the demo [here](https://morkalork.github.io/diablo2-randomizer/) if you want to try it out!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Publish to gh-pages:
Open up `.env` and set `D2_FOR_GHPAGES` to true (add it if it's missing), the run:

```
npm run build
git add .
git commit -m '<USEFULL AND POSITIVE MESSAGE!>
git subtree push --prefix dist origin gh-pages
```
