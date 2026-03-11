---
title: "会社HP（pasture.jp）を更新：Vercel運用・デザイン統一・Googleフォーム導入"
date: "2026-03-12"
tags: ["Pasture Japan", "Vercel", "Next.js", "DNS", "Google Forms", "Web"]
---

## 今日やったこと（要約）
会社HP（Pasture Japan）の公開サイトを整備しました。

- 独自ドメイン（pasture.jp / www）を Vercel に接続（DNS設定）
- ロゴと配色を統一し、全体デザインを整備（globals.css）
- スマホ用メニュー（Menu → ドロワー）を追加
- Company / Contact / Privacy を“同じ見た目”に統一
- Companyにチーム写真・担当領域・拡大表示（ライトボックス）・外部リンク枠を追加
- Contactを Googleフォーム主導（フォームURLを設置）
- トップページの見出しやカードを日本語化して統一

---

## 技術メモ（実装のポイント）

### 1) 会社HPの基本構成
- Next.js（App Router）
- Vercel にデプロイ
- `globals.css` に CSS変数（ブランドカラー）と共通UI（container/card/btn/heroWrap/grid）を定義

### 2) ヘッダー・フッターの共通化
- `app/components/SiteHeader.tsx`（スマホドロワーつき / "use client"）
- `app/components/SiteFooter.tsx`（フッター共通）
- `app/layout.tsx` で `<SiteHeader /> {children} <SiteFooter />`

### 3) ロゴの注意点（2つ表示される問題）
横長ロゴ画像（logo-full）にマークが含まれていると、マークを別に置いたときに“2つ並ぶ”。
→ 対策：ヘッダーでは横長ロゴのみ表示（または文字だけロゴを用意）

### 4) Company：チーム写真＋担当領域＋拡大表示（ライトボックス）
- `TeamList.tsx` をClient Componentにして、クリックでモーダル表示
- `Escape` で閉じる、背景クリックで閉じる、スクロール抑制などを実装

### 5) Contact：Google Forms を主導線に
- GoogleフォームURLを `Contact` のメインCTAに配置
- メールは「フォームが開けない場合の予備」として併記
- フォーム設定は「B：質問でメール入力＋検証」を採用（ログイン必須にしない）

---

## 運用コマンド（自分用メモ）
変更を反映する基本手順：

```bash
git status
git add .
git commit -m "update"
git push