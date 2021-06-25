
npm i pm2 -g
pm2 start npm --name "nuxt" -o /var/www/blog/nuxt-blog/log/pm2.log -e /var/www/blog/nuxt-blog/log/pm2-err.log -- run start
