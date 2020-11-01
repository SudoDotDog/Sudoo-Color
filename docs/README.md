# Sudoo-Color

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Color.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Color)
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

```ts
import { Color } from "@sudoo/color";

const blackColor: Color = Color.black();
const hexColor: Color = Color.fromHEX('#AAAAAA'); // Pound is optional
const rgbaColor: Color = Color.fromRGBA(50,50,50,15);
```
