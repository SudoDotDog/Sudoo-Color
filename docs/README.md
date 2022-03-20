# Sudoo-Color

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Color/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Color/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Color/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Color)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fcolor.svg)](https://www.npmjs.com/package/@sudoo/color)
[![downloads](https://img.shields.io/npm/dm/@sudoo/color.svg)](https://www.npmjs.com/package/@sudoo/color)

:deciduous_tree: Color Controller

## Install

```sh
yarn add @sudoo/color
# Or
npm install @sudoo/color --save
```

## Usage

To initialize color instance.

```ts
import { Color } from "@sudoo/color";

const blackColor: Color = Color.black();
const hexColor: Color = Color.fromHEX('#AAAAAA'); // Pound is optional
const rgbColor: Color = Color.fromRGB(50, 50, 50);
const rgbaColor: Color = Color.fromRGBA(50, 50, 50, 15);
```

To mutate color.

```ts
const newColor: Color = rgbColor.dyeGreen(15); // (50, 65, 60)
const newColor: Color = rgbColor.highlightGreen(0.5); // (40, 75, 40)
const newColor: Color = rgbColor.highlightGreen(0.5, 0); // (50, 75, 50)
```

To export color.

```ts
newColor.toHEX();
```

Theres a lot more advanced usage. Checkout source code!
