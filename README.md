- 参考文献

  - [【React+TypeScript】Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100)

  - [（初心者向け）Firebase HostingへReactプロジェクトを公開する手順](https://qiita.com/junara/items/74801923ca108b328b26)

- TMDB の APIKey を設定

  .env.sample を参考に用意
  ```
  REACT_APP_TMDB_API_KEY=xxx
  ```

- Firebase CLI をインストール (未インストールの場合)

  ```
  > npm install -g firebase-tools
  ```

- Firebase にログイン

  ```
  > firebase login

  ? Allow Firebase to collect CLI usage and error reporting information?
  No

  Visit this URL on this device to log in:
  https://accounts.google.com/o/oauth2/auth?...

  Waiting for authentication...

  +  Success! Logged in as example@gmail.com
  ```

- Firebase プロジェクトの初期化 (初回のみ)

  ```
  >firebase init

  ? Are you ready to proceed?
  Yes

  ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.
  Hosting: Con
  figure files for Firebase Hosting and (optionally) set up GitHub Action deploys

  ? Please select an option:
  Use an existing project

  ? Select a default Firebase project for this directory:
  XXX

  ? What do you want to use as your public directory?
  build

  ? Configure as a single-page app (rewrite all urls to /index.html)?
  Yes

  ? Set up automatic builds and deploys with GitHub?
  No

  ? File public/index.html already exists. Overwrite?
  No
  ```

- Firebase にデプロイ

  ```
  > yarn build

  ...
  Done in 47.38s.

  > firebase deploy

  ...

  +  Deploy complete!

  Project Console: https://console.firebase.google.com/project/XXX/overview
  ```
