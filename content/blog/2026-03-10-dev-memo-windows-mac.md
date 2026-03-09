---
title: "開発メモ：Windows / Mac でブログ更新（newpost.sh / publish.sh）"
date: "2026-03-10"
tags: ["dev", "memo", "blog"]
---

## 目的
Windows と Mac の両方で、Markdownブログを **手軽に追加・公開**できるようにする。

- 記事ファイル：`content/blog/*.md`
- 画像：`public/blog/*`
- 公開：GitHub に push → Vercel が自動デプロイ

---

## 共通ルール
### 記事（Markdown）
- 置き場所：`content/blog/`
- ファイル名（slug）：`YYYY-MM-DD-xxxx.md`
- 例：`2026-03-10-trip-note.md`

### 画像
- 置き場所：`public/blog/`
- 記事内の参照：
  ```md
  ![](/blog/IMG_1234.jpg)