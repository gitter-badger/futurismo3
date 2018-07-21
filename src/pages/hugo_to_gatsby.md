---
title: "Hugo To Gatsby"
date: 2018-07-01T15:41:57+09:00
---

## はじめに: Gatsby 導入する理由
このブログは、Hugoで運営している。(http://futurismo.biz/2018/04/wordpress-2-hugo/)

React 製のサイトジェネレーターである、 **Gatsby** へ移行しようと決意した。

- https://www.gatsbyjs.org/

その理由は、モダンなフロントエンド技術を使っているので。

私は、React エンジニアを目指すことに決めた。Gatsbyは Reactでかかれている。
そこで、ブログ製作をつうじで Reactに慣れ親しみ、改造できればいいなと思った。

## Gatsbyについて
Gatsbyは、React で書かれた静的サイトジェネレーター。

## Getting Started
gatsbyを npmでインストールする。

**今後のメンテナンスを考え、インストールは v1ではなくv2とする**

```bash
$ npm install --global gatsby-cli@2.0.0-beta.3
$ ~/futurismo3 gatsby -v                                                                                                                                               15:36:1
2.0.0-beta.3
```

続いて、サイト生成。

```bash
# テンプレートからサイト作成
$ gatsby new futurismo3 https://github.com/gatsbyjs/gatsby-starter-default#v2
$ cd futurismo3

# 開発用サーバ起動
$ gatsby develop
```

まずは、デフォルトのページが生成された。これをベースに改造を加えていく。

## コンテンツの migration
まずは、一番大変なコンテンツのマイグレーションに取りかかる。

- frontmatter

frontmatterとは、hugoの 記事のヘッダ情報。Yaml形式ならば、Gatsbyが読み込んでくれる。
私は、Yamlで記述していたため、変換が不要だっだ。

もし、Toml形式で記述していた場合は、`hugo convert toYAML` という便利コマンドを叩くと、
すべてtomlをyamlに変換してくれる。

- 本文


## References
- [GatsbyJSで爆速PWAサイト/ Gatsby Super Fast \- Speaker Deck](https://speakerdeck.com/nnjyami/gatsby-super-fast)
- [爆速サイトを爆速で作れるNetlify \+ Gatsby / Create fast site with netlify and gatsby \- Speaker Deck](https://speakerdeck.com/mottox2/create-fast-site-with-netlify-and-gatsby)
- [Gatsby \+ Netlify CMSで 爆速blog開発 \- Speaker Deck](https://speakerdeck.com/mukai21/gatsby-plus-netlify-cmsde-bao-su-blogkai-fa)

- [Migrate from Hugo to Gatsby \| GatsbyJS](https://next.gatsbyjs.org/blog/2017-11-06-migrate-hugo-gatsby/)
- [Creating a Blog with Gatsby \| GatsbyJS](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/)
- [Zero to Deploy: A Practical Guide to Static Sites with Gatsby\.js ― Scotch](https://scotch.io/tutorials/zero-to-deploy-a-practical-guide-to-static-sites-with-gatsbyjs)

## 日本の Gatsbyユーザの方
まだ、そんなに GatsbyJsをつかってブログ作成している人は少なさそうなので、検索で引っかかったブログを集めてみた。

- [ブログを Gatsby に移行しました \- FIVETEESIXONE](https://fiveteesixone.lackland.io/2018/03/31/rebuild-blog-using-gatsby/)
- [GatsbyJSで Progressive High Performance Blog \| dvg\-179](https://dvg.179.jp/201803-gatsby-pwa/)
- [Gatsbyでブログを作る 技術系記事ははてなからGitHub Pageに移転させます \| Hatch tech blog](https://hachibeedi.github.io/entry/first-announcement/)
- [WordpressからGatsbyJSへ移行した \| Bulblub](https://www.bulblub.com/2018/06/moved_to_gatsbyjs/)
- [当ブログを GatsbyJS で作り直した \| 9mのパソコン日記](https://blog.kksg.net/posts/gatsby/)
- [React\.js製の静的サイトジェネレーターGatsbyを使ってみた – Snaplog](https://blog.mismithportfolio.com/web/20160827gatsby)
- [ブログを Gatsby で作り直し＆独自ドメイン化 \#thebossblog](https://blog.theboss.tech/2018/02/16/blog-gatsby/)
- [ブログをGatsbyに移行しました \- とりあえず動かすところまで \| tmnm\.tech](https://tmnm.tech/2017/09/10/migrate-to-gatsby/)
