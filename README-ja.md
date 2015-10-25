hexo-tag-niconico
========================

ニコニコ動画と静画のEmbedタグを出力します｡


### ニコニコ動画
![](http://i.imgur.com/NPIbU3G.png)

### ニコニコ動画 thumb
![](http://i.imgur.com/HGMmweS.png)

### ニコニコ静画

![](http://i.imgur.com/EAHENiU.png)

### 生

![](http://i.imgur.com/IOfQFp1.png)
![](http://i.imgur.com/YocfbD9.png)


## インストール
```
npm install hexo-tag-niconico@latest --save
```

## 使い方

1. 記事のmarkdownファイルを作成します
  `hexo new title`
1. 作成した記事を編集します
  タグの書き方を参照してください｡
1. 記事を生成します
  `hexo generate`
1. ブラウザで確認します
  `0.0.0.0:4000` or `localhost:4000`

詳しくは[Hexo Document](https://hexo.io/docs/commands.html)を参照してください｡

## タグの書き方

**動画**

```
{% douga dougaId [thumb] %}
```
動画IDは`sm`から始まる番号です｡ 例:`sm27258895`
`thumb`を付けることで､スタイルが変わります｡


**静画**

```
{% seiga seigaId %}
```
静画IDは`im`から始まる番号です｡ 例:`im5282760`


**生**

```
{% nama namaId %}
```
生IDは`lv`から始まる番号です｡ 例:`lv237041631`


---

## 既知の問題

HexoのブログURLへ **https://** から始まるURLで接続した場合､Embedコンテンツを表示できない場合があります｡
これはセキュリティ上の制限です。ChromeとFireFoxで確認を行いました｡
![](http://i.imgur.com/UxDuBB2.png?1)

この場合は､ **http://** から始まるURLへ接続することで閲覧可能になります｡

---

## その他

#### アップデート
```
npm update
```

#### アンインストール
```
npm uninstall hexo-tag-niconico
```
