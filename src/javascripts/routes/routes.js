const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
  .add('docs', '/docs', 'docs')
  .add('blogs', '/blogs/', 'blogs')
  .add('blog', '/blog/:slug', 'blog')
  .add('posts', '/posts/', 'posts')
  .add('post', '/post/:id', 'post')
  .add('contato', '/contato/', 'contato');
