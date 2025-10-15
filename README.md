# MathStep Web

MathStepモバイルアプリの利用規約・プライバシーポリシーをホストするWebサイトです。

## 概要

本サイトは、MathStepモバイルアプリケーションの利用規約とプライバシーポリシーを提供するための静的Webサイトです。ユーザーがアプリの利用条件や個人情報の取り扱いについて確認できるよう設計されています。

## 機能

- **利用規約ページ**: アプリの利用に関する詳細な規約と条件
- **プライバシーポリシーページ**: 個人情報の収集・利用・管理に関する方針
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **モダンなUI**: 美しく使いやすいインターフェース

## 技術仕様

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリング（Flexbox、Grid、アニメーション）
- **JavaScript**: 最小限のインタラクション
- **Google Fonts**: Noto Sans JPフォントの使用

## ファイル構成

```
mathstepweb/
├── index.html          # メインページ
├── terms.html          # 利用規約ページ
├── privacy.html        # プライバシーポリシーページ
├── styles.css          # スタイルシート
├── package.json        # プロジェクト設定
└── README.md           # このファイル
```

## セットアップ

### 前提条件

- Node.js (v14以上)
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# ローカルサーバーの起動
npm start
```

### 開発サーバー

```bash
# ポート3000でローカルサーバーを起動
npm start
```

ブラウザで `http://localhost:3000` にアクセスしてサイトを確認できます。

## デプロイ

### GitHub Pages

1. リポジトリの設定でGitHub Pagesを有効化
2. ソースを「Deploy from a branch」に設定
3. ブランチを「main」に設定

### その他のホスティングサービス

- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## カスタマイズ

### スタイルの変更

`styles.css` ファイルを編集してデザインをカスタマイズできます。主要なカスタマイズポイント：

- カラーパレット（CSS変数として定義）
- フォント設定
- レイアウト調整
- アニメーション効果

### コンテンツの更新

- `index.html`: メインページの内容
- `terms.html`: 利用規約の内容
- `privacy.html`: プライバシーポリシーの内容

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- モバイルブラウザ（iOS Safari、Chrome Mobile）

## ライセンス

MIT License

## お問い合わせ

- 一般のお問い合わせ: support@mathstep.app
- プライバシーに関するお問い合わせ: privacy@mathstep.app

## 更新履歴

- 2025-01-27: 初回リリース
  - 利用規約ページの作成
  - プライバシーポリシーページの作成
  - レスポンシブデザインの実装
  - モダンなUIの実装
