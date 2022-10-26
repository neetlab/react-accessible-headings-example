import { EvaluateOptions, evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export const Article = evaluateSync(
  `
# 美味しいカレーの作り方
美味しいカレーの作り方を紹介します

## 下準備

まず、下準備をします。

### 野菜

野菜を切ります。

## 調理

調理に入ります。

### ルウ

ルウを溶かします。

## 仕上げ

福神漬けを載せます`,
  runtime as EvaluateOptions
).default;
