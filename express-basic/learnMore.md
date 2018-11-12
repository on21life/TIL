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

```js
const Joi = require('joi');
const express = require();
const app = express();

app.use(express.json());

const users = [
  {id:1, name:'john', email:'john@naver.com', age:33},
]

app.get('/',(req,res) =>{
  res.send('HappyHacking');
})

app.get('/api/users',(req,res) => {
  res.send(users);
})

app.get('/api/users/:id',(req,res) =>{
  const user = getUser(users,parseInt(res.params.id));
  if(!user) return res.status(404).send(`No User with id: ${req.params.id}`)

  res.send(user);
})


app.post('api/users/:id',(req,res) =>{
  const{error} = validateUser(req.body);
  if(error) return res.status(400).send(error.message);

  const{name, email, age} = req.body;
  const user = {
    id: user.length +1,
    name : name,
    email: email,
    // email: email 이면 email 로 비구조화(destructuring 가능)
    age: age || null,
  }
  users.push(user)
  res.send(user);
})


app.put('/api/users/:id',(req,res)=>{
  const user = getUser(users, parseInt())

  const{error} = validateUser(req.body);
  if(error) return res.status(400).send()
})

function getUser(users, id){
  return users.find(user => user.id == id)
}

function validateUser(user){
  const schema = {
    name:Joi.string().require().min(1),
    email:Joi.string().email().required().min(5).max(25),
    age:Joi.number().min(3),
  }

  return Joi.validate(user, schema)
}

````