import VueRouterSitemap from 'vue-router-sitemap';
const path = require('path');
import router from './router';
import express from 'express';
var app = express();

export const sitemapMiddleware = () => {
  return (req:express.Request, res:express.Response ) => {
    res.set('Content-Type', 'application/xml');
 
    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
        /\/example-page/,
        /\*/,
      ],
    };
 
    new VueRouterSitemap(router).filterPaths(filterConfig).build('http://localhost:8080/').save(staticSitemap);
    console.log(staticSitemap);
    return res.sendFile(staticSitemap);
  };
};
console.log("hello");
app.get('/sitemap.xml', sitemapMiddleware());