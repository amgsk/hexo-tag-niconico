hexo-tag-niconico
========================

**Embed** niconico douga or seiga or nama in your **Hexo** post/page.

[日本語READMEはこちらへ](https://github.com/kamiya555/hexo-tag-niconico/blob/master/README-ja.md)

### Douga(Movie)
![](http://i.imgur.com/NPIbU3G.png)

### Douga(Movie) thumb version
![](http://i.imgur.com/HGMmweS.png)

### Seiga(Illustrations)

![](http://i.imgur.com/EAHENiU.png)

### Nama(Live broadcast)

![](http://i.imgur.com/IOfQFp1.png)
![](http://i.imgur.com/YocfbD9.png)


## Install
```
npm install hexo-tag-niconico@latest --save
```

## Usage

1. Create post base.
  `hexo new title`
1. Provides a tag in the article.
   See *How To Write Tag* section.
1. Generate your static post.
  `hexo generate`
1. Open your Browser.
   type `0.0.0.0:4000` or `localhost:4000`

Please see this link for more information. [Hexo Document](https://hexo.io/docs/commands.html)

## How To Write Tag

**Douga(Movie)**

```
{% douga dougaId [thumb] %}
```

Douga ID is a number starting with sm.  e.g):`sm27258895`
By adding the `thumb`, the style changes.


**Seiga(Illustrations)**

```
{% seiga seigaId %}
```
Seiga ID is a number starting with sm. e.g):`im5282760`


**Nama(Live broadcast)**

```
{% nama namaId %}
```
Nama ID is a number starting with sm. e.g):`lv237041631`

---

## Misc

#### Update
```
npm update
```

#### Uninstall
```
npm uninstall hexo-tag-niconico
```
