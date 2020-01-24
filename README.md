<p align="center">
    <a href="https://seonhyungjo.github.io/react-lazy-loading-image/"><img width="140" src="./static/lazy-logo.png" alt="React Lazy Img Logo" /></a>

<h1 align="center">React Lazy Img</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-lazy-loading-image.svg)](https://www.npmjs.com/package/react-lazy-loading-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

## Install

```bash
npm install --save react-lazy-loading-image
```

## Usage

```tsx
import * as React from 'react'

import MyComponent from 'react-lazy-loading-image'

class Example extends React.Component {
  render () {
    return (
      <MyComponent src={}/>
    )
  }
}
```

## API

### `LazyImg`

Image component working similar with standard `img` tag and with the following props.

| Prop | Type | Required | Description |
| :--- | :--- | :------: | :---------- |
| `src` | string |    ✓     | The image source |
| `lazy` | boolean | | Set lazy image|
| `id` | string | | Element Id |
| `className` | string | | Element Class Name |
| `alt` | string | | Image alt |
| `sizes` | any | | Image default sizes |
| `srcset` | string | | Image srcset |
| `style` | object | | Element Inline Style |
| `height` | number | | Image Default height |
| `width` | number | | Image Default width |
| `border` | string | | Image Default border |


## License

MIT © :mouse:[snyung](https://github.com/seonhyungjo)
