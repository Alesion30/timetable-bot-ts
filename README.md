# TIMETABLE LINE Bot

```sh
$ node -v
v16.13.0

$ yarn -v
1.22.17
```

## 環境構築

```sh
yarn
```

## 開発方法

```sh
yarn dev
```

http://localhost:3000 にアクセスすると、「Hello World」が表示されます。

localhost を外部公開するために、別のターミナルで ngrok を実行します。

```sh
ngrok http 3000
```

https://xxxx.ngrok.io にアクセスすると、「Hello World」が表示されます。

LINE Developers Console の Webhook URL に https://xxxx.ngrok.io/webhook を登録します。

## デプロイ

```sh
git push heroku main -f
```
