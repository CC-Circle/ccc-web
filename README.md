# Getting Started with Create React App

このプロジェクトは[Create React App](https://github.com/facebook/create-react-app)を利用しています
（Create React Appは現在非推奨のため将来的にはNext.js等に移行予定）

# デザイン
以下のページから確認できる
[Draft / ccc-web](https://www.figma.com/file/akuKR80oRQdH8MYJI8XAlW/ccc-web?type=design&node-id=0%3A1&mode=design&t=ENlFV4hUFqPKBBfx-1)
# 開発にあたって
以下のガイドライン・テンプレートに沿って開発を行う
- [コミットメッセージ](https://github.com/Niimijpn/github/blob/main/commit-message-guidelines.md)
- [プルリクエスト](https://github.com/Niimijpn/github/blob/main/pull-request-guidelines.md)
# Netlifyへのデプロイ

## Netlify CLI (コマンドラインインターフェース) のインストール
- デプロイには Netlify CLI が必要です。npm を使ってグローバルにインストール
```
npm install -g netlify-cli
```
## Netlify へのログイン:
- まだログインしていない場合は、Netlify CLI を使ってログイン
```
netlify login
```
これにより、Netlify CLI を承認するためのブラウザウィンドウが開きます。承認後、ブラウザウィンドウを閉じてください。

## React アプリのビルド
- デプロイ前に、React アプリをビルドする必要があります。以下のコマンドを実行
```
npm run build
```
これにより、build ディレクトリに最適化された本番用のビルドが作成されます。

## Netlify へのデプロイ
- これで、サイトを Netlify にデプロイできます。次のコマンドを実行します
```
netlify deploy --dir=build
```
このコマンドでは、サイト名を選択するように促されます。デフォルトの選択肢を選択するか、カスタム名を選択できます。また、ビルドディレクトリを指定する必要がありますが、今回は build ディレクトリを指定します。

## プロンプトに従う
- netlify deploy コマンドを実行した後は、ターミナルのプロンプトに従ってください。Netlify へのアクセスを許可し、チームを選択します（複数のチームがある場合）。
- 環境変数の設定 (オプション): アプリに必要な環境変数がある場合は、Netlify ダッシュボードの「サイト設定」 > 「ビルド＆デプロイ」 > 「環境」で設定できます。

## デプロイの完了
- デプロイが完了すると、Netlify から提供された URL でサイトにアクセスできます。
継続的なデプロイ (オプション): Netlify は継続的なデプロイをサポートしています。つまり、リポジトリに変更をプッシュするたびに、Netlify が自動的に更新をデプロイします。これは Netlify ダッシュボードの「サイト設定」 > 「ビルド＆デプロイ」 > 「継続的なデプロイ」で設定できます。
