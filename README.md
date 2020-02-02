# 2019-node2-sequelize


## 1. express-generator & sequelize-migrations
~~~bash
npm i -g express-generator
npm i -g sequelize-cli
~~~

## 2. sequelize-migrations
Reference
  - https://sequelize.org/master/manual/migrations.html
  - https://velog.io/@jeff0720/Sequelize-CLI%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%84%EB%8B%A8%ED%95%9C-User-API-%EB%A7%8C%EB%93%A4%EA%B8%B0-vdjpb8nl0k


sequelize model:generate
  - sequelize model:generate --name User2 --attributes firstName:string,lastName:string,email:string
  - sequelize model:generate --name Sample --attributes title:string,comment:string,writer:string,rnum:Integer
sequelize db:migrate

~~~bash
C:\Users\Administrator\Documents\node-es6\06.sequelize>sequelize model:generate --name User2 --attributes firstName:string,lastName:string,email:string
Sequelize CLI [Node: 12.14.0, CLI: 5.5.1, ORM: 5.21.3]

New model was created at C:\Users\Administrator\Documents\node-es6\06.sequelize\models\user2.js .
New migration was created at C:\Users\Administrator\Documents\node-es6\06.sequelize\migrations\20200202051137-User2.js .

C:\Users\Administrator\Documents\node-es6\06.sequelize>sequelize db:migrate

Sequelize CLI [Node: 12.14.0, CLI: 5.5.1, ORM: 5.21.3]

Loaded configuration file "config\config.json".
Using environment "development".
(node:10764) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
== 20200202051137-create-user-2: migrating =======
== 20200202051137-create-user-2: migrated (0.036s)
~~~

~~~bash
C:\Users\Administrator\Documents\node-es6\06.sequelize>sequelize model:generate --name Sample --attributes title:string,comment:string,writer:string,rnum:Integer

Sequelize CLI [Node: 12.14.0, CLI: 5.5.1, ORM: 5.21.3]

New model was created at C:\Users\Administrator\Documents\node-es6\06.sequelize\models\sample.js .
New migration was created at C:\Users\Administrator\Documents\node-es6\06.sequelize\migrations\20200202051604-Sample.js .

C:\Users\Administrator\Documents\node-es6\06.sequelize>sequelize db:migrate

Sequelize CLI [Node: 12.14.0, CLI: 5.5.1, ORM: 5.21.3]

Loaded configuration file "config\config.json".
Using environment "development".
(node:10512) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
== 20200202051604-create-sample: migrating =======
== 20200202051604-create-sample: migrated (0.025s)
~~~

## Reference
express-generator (2) - 폴더 및 파일 역할
  - https://victorydntmd.tistory.com/23
  - https://victorydntmd.tistory.com/24
Sequelize
  - https://sequelize.org/master/manual/model-querying-finders.html
  - ORMs for Beginners: Models and Migrations with Sequelize in Node
    + https://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/
  - https://victorydntmd.tistory.com/26
  - https://victorydntmd.tistory.com/27