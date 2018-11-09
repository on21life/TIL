# Express Basic PROJECT

## FileTree

* `TIL/express-basic-practice`
  * `node_moduels/`
    * ...
  * `package.json`
  * `package-lock.json`
  * `.gitignore` (optional)
  * `index.js`

## DB schema

### Resource : users (`/api/users`, `/api/users/:id`) CRUD operation

### Schema 

* id
  * Optional : 마지막 요소가 Delete 되고, 새로운 데이터가 Post 되면 id 중복 안되게!

* name
  * string 
  * required
  * 5 글자 이상
* email
  * stirng
  * required
  * 5 글자 이상 (optional: 정규표현식)
* age 
  * integer
  * 3 이상