# wappu.miemala.com
Live timetable for Wappuradio

## Initial setup

No instructions yet as I'm too lazy.

## Update process and setup for each year

I always forget how to do this so had to write it down.

add seeder for new program data
```
cd program-mapper
node index.js > ../wappu-api/new-programs # fetch program data from the official website
cd ../wappu-api
cp src/db/seeders/20220412181929-2022-programs.js src/db/seeders/xxxx-programs.js # create new seeder file
vim src/db/seeders/xxxx-programs.js # copy data from the generated new-programs file and fix to match format
```

update api database (preferably backup the old database first)
```
cp /home/wappu-api/api/database-xxxx.sqlite database.sqlite
npx sequelize db:seed --seed xxxx-programs.js # apply seeder
systemctl stop wappu-api
cp database.sqlite /home/wappu-api/api/database.sqlite
chown wappu-api /home/wappu-api/api/database.sqlite
systemctl start wappu-api
```

prepare new frontend build
```
cd wappu-frontend
vim src/app/playlist/shared/constants.ts # update parameters
ng build --configuration=production
```

update frontend to prod
```
rm -rf /usr/local/bin/www/wappu.miemala.com/ # remove previous build, run in www host
scp -r dist/wappu-frontend/ 10.0.20.146:/usr/local/www/wappu.miemala.com # copy new build to www host
chown -R www /usr/local/bin/wappu.miemala.com/ # run in www host
```

start parser. run in tmux or something
```
cd log-parser
tail -f ../irclogs/IRCnet/#wappuradio.log | python3 -m log_parser -i --sqlite-db ../api/database.sqlite
```
