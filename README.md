# Ghost Popout Plugin

Adds an animated side popout to your Ghost articles that displays the top "read next" story. This animated popout was designed to catch they eye and increase user interaction. It is also unobtrusive because it only animates out when the user reaches the end of an article.

## Demo
You can check out my blog article for a [DEMO](http://blog.tylerbuchea.com/ghost-blog-popout-plugin/). Just scroll to the bottom of the article to see the popout.

## Installation

### CSS
Copypaste CSS into your Ghost theme's CSS file or copy the whole file and @import it from the main style sheet.

### JS
Copypaste JavaScript into the Ghost admin panel's `Settings > Code Injection > Blog Footer` textarea. Make sure to wrap it in `<script></script>` tags.

## And Then...
And that's it! Now try scrolling to the bottom of one of your articles. The popout is auto disabled on smaller screens and the CSS could use some work. But the code is pretty simple so feel free to play around with it and send me some pull requests :)