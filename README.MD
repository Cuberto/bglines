## Cuberto Background Lines Effect

### Frontend dependencies
GSAP v3 (https://greensock.com/gsap/)

Three.js (https://threejs.org/)

### Usage
```js
import Lines from "lines";

const lines = new Lines(canvas, {
    color: [0.72, 0.76, 0.9, 1], // color RGBA%
    position: 0.3, // x position from -1 to 1
    speed: 0.7, // speed
    lines: 20, // lines count
    density: 30, // lines density
    scale: 15, // stage scale
    segments: 2, // curve segments
    intensity: 10 // bend intensity
});
```

### Setup demo project

`npm install` or `yarn install`

### Start demo project

`gulp` or `gulp serve` deploy app and start browsersync server + watchers

## File structure
```bash
├── /tmp/                       # Temporary served files
└── /src/                       # The source code of the application
    ├── /js/                    # JavaScript source
    ├── /pug/                   # Pug templates
        └── /_includes/         # Pug partials
    ├── /scss/                  # SCSS styles
    ├── /static/                # Static files (fonts, images, videos, etc..)
