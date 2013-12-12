# PaperBook Overview
 PaperBook is a Literature Management System, which is shipped with convenient literature upload, search, comment and greate communication functions for a private research group.<br>
 First step, we built the system based on Node.js + Express + MongoDB, precisly based on
 [node-express-mongoose-demo](https://github.com/madhums/node-express-mongoose-demo).<BR>
 Second step, migrate big data to HBase, make use of Hadoop to build a cloud research platform.

# Team Member
+ [Cyanny Liang](http://www.cyanny.com)
+ Thomas Zhang
+ Aaron Feng

## Install

**NOTE:** You need to have node.js, mongodb installed
1. Clone the project
```sh
  $ git clone https://github.com/lgrcyanny/XLMS
  $ npm install
  $ cp config/config.disk.js config/config.js
```
2. Start MongoDB on mac
```sh
  $ rm /usr/local/var/mongodb/mongod.lock
  $ screen
  $ mongod
```
3. Start Server
```sh
  $ npm start
```

4. Then visit [http://localhost:3000/](http://localhost:3000/)

## Related modules

1. [node-genem](https://github.com/madhums/node-genem) A module to generate the MVC skeleton using this approach.
2. [node-notifier](http://github.com/madhums/node-notifier) - used for notifications via emails and push notificatiions
3. [node-imager](http://github.com/madhums/node-imager) - used to resize, crop and upload images to S3/rackspace
4. [node-view-helpers](http://github.com/madhums/node-view-helpers) - some common view helpers
5. [mongoose-migrate](https://github.com/madhums/mongoose-migrate#readme) - Keeps track of the migrations in a mongodb collection (fork of visionmedia/node-migrate)
6. [mongoose-user](http://github.com/madhums/mongoose-user) - Generic methods, statics and virtuals used for user schemas

## Directory structure
```
-app/
  |__controllers/
  |__models/
  |__mailer/
  |__views/
-config/
  |__routes.js
  |__config.js
  |__passport.js (auth config)
  |__imager.js (imager config)
  |__express.js (express.js configs)
  |__middlewares/ (custom middlewares)
-public/
```

## Tests

```sh
$ npm test
```

## License
(The MIT License)
