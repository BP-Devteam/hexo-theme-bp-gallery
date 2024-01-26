# BP Gallery for Hexo

## Light mode 
![](https://github.com/BP-Devteam/hexo-theme-bp-gallery/blob/main/source/images/pc_light.png?raw=true)

## Dark mode 
![](https://github.com/BP-Devteam/hexo-theme-bp-gallery/blob/main/source/images/pc_dark.png?raw=true)

Hexo implementation of [Clean Blog](http://blackrockdigital.github.io/startbootstrap-clean-blog/index.html)

## Demo 
![Hexo-theme-bp-gallery](https://hexo-theme-bp-gallery.web.app/)

## Features

- Dark Theme
- **vanillaJS** (No Jquery)
- **BootStrap5** (No custom CSS)
- Google Analytics
- Cover image for posts and pages
- Tags and Categories Support
- Responsive Images
- Image Gallery
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Page Counter

## External libraries used

- [Bootstrap](https://getbootstrap.com/) (included)
- [Lightbox for Bootstrap 5](https://github.com/trvswgnr/bs5-lightbox) (Gallery)
- [Page Counter](https://github.com/BP-Devteam/hexo-pagecounter)

## Installation

```
$ git clone https://github.com/BP-Devteam/hexo-theme-bp-blog themes/bp-gallery
```

Then update your blog's main `_config.yml` to set the theme to `bp-gallery`:

```
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: bp-gallery
```

## Configuration

### Menu

The menu is configured in the theme's `_config.yml`.

```
# Header
menu:
  Archives: /archives
  Github: https://github.com/BP-Devteam/hexo-theme-bp-gallery
```

The object key is the label and the value is the path, or you can use a icon (font awesome) like menu item.

### Top Left Label

The top left label is configured in the theme's `_config.yml`. When clicked it will lead to the Home Page.

```
# Title on top left of menu. Leave empty to use main blog title
menu_title: Configurable Title
```

### Home Page cover image

The Home Page cover is configured in the theme's `_config.yml`. It will be the same for all index type pages.

```
# URL of the Home page image
index_cover: /img/home-bg.jpg
```

### Default post title

The default post title (used when no title is specified) is configured in the theme's `_config.yml`.

```
# Default post title
default_post_title: Untitled
```


### Recommeded per_page

4,8,12,16

```
# Pagination
## Set per_page to 0 to disable pagination
per_page: 12
```

### Comments

The comments provider is specified in the theme's `_config.yml`. If you specify both a `disqus_shortname` and a `facebook.appid` there will be 2 sets of comment per post. So choose one.

```
# Comments. Choose one by filling up the information
comments:
  # Disqus comments
  disqus_shortname: klugjotest
  # Facebook comments
  facebook:
    appid: 123456789012345
    comment_count: 5
    comment_colorscheme: light
```

You can too hide the comment in the posts front-matter:

```
comment: false
---
```

### Google Analytics

The Google Analytics Tracking ID is configured in the theme's `_config.yml`.

```
# Google Analytics Tracking ID
google_analytics:
```

### Social Account

Setup the links to your social pages in the theme's `_config.yml`. Links are in the footer.

```
# Social Accounts
twitter_url:
facebook_url:
github_url: https://github.com/BP-Devteam/hexo-theme-bp-blog
linkedin_url:
mailto:
```

### Author

The post's author is specified in the posts front-matter:

```
author: BP.jason
---
```

### Post's Cover Image

By default, posts will use the home page cover image. You can specify a custom cover in the front-matter:

```
title: Excerpts
date: 2013-12-25 00:23:23
tags: ["Excertps"]
cover: /assets/contact-bg.jpg
---
```

### Post's Share Cover Image

You can specify a custom cover to share yours posts in social medias:

```
share_cover: /assets/contact-bg.jpg
---
```

### Post's Excerpt

This theme does not support traditional excerpts. To show excerpts on the index page, use `subtitle` in the front-matter:

```
title: Excerpts
date: 2013-12-25 00:23:23
tags: ["Excertps"]
subtitle: Standard Excerpts are not supported in Clean Blog but you can use subtitles in the front matter to display text in the index.
---

```


## Creator

This theme was created by [BP-Devteam](https://github.com/BP-Devteam)

## License

MIT
