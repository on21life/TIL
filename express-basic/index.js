const Joi = require("joi");
const express = require("express");
const app = express();

// json으로 받을 수 있도록 함.
app.use(express.json());

// 조작 대상이 될 초기 데이터
const movies = [
  { id: 1, title: "Matrix" },
  { id: 2, title: "Terminate" },
  { id: 3, title: "Avengers" },
  { id: 4, title: "Titanic" }
];

app.get("/", (req, res) => {
  res.send("Happy Hacking");
});

app.get("/:name", (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

// CRUD
// CREATE READ UPDATE DESTROY
// POST GET PUT DELETE

// 주고자 하는 이름의 리소스이름을 복수형으로 적는게 API.

// GET /api/movies
app.get("/api/movies/", (req, res) => {
  res.send(movie);
});

// GET /api/movies/1 
app.get('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) res.status(404).send(`Movie with given id(${req.params.id}) is not found.`);
  res.send(movie);
});

// POST /api/movies/1
app.post("/api/movies", (req, res) => {
  
// 에러가 있으면 안됨.
  const {error} = validateMovie(req.body)
  console.log('kkkkkkkkkkkkkkkkkkkkkkkk')
  console.log(validateMovie(req.body))
  console.log(req.body)
  console.log
  if (error) return res.status(400).status.send(error.message);

  //  schema를 가지고 req.body 검사.
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
 
  // 에러 없으면 됨.
  movies.push(movie);

  // 추가시킨거 출력
  res.send(movie);
});

// PUT /api/movies/1
app.put('/api/movies/:id', (req,res) => {
  // movie에서 id로 movie를 찾는다
  const movie = getMovie(movies, parseInt(req.params.id));
  
  // 유효하지 않으면 400
  if (error) return res.status(400).send(error.message);
  
  // 아래 validateMovie 코드 두줄은 같다. 비구조화(destructuring)이라고 하며, 객체구조만 부숴서 키만 가져온다. 변수명과 함수명이 동일할 때 사용한다. 
  // 만약 const error = function req.body.error 가 있으면 const {error} = function req.body 로 작성이 가능하다.
  const { error } = validateMovie(req.body)
  // const result = validateMovie(req.body);

  // Update
  movie.title = req.body.title;

  // 업데이트한 movie print
  res.send(movie)
});

// DELETE /api/movies/1
  app.delete('/api/movies/:id',(req,res) => { 
    
    // movies에서 id로 movie 찾기
    const movie = getMovie(movies, parseInt(req.params.id));
    if (!movie) return res.status(404).send(`ID ${req.params.id} 없음`)

    // Delete logic 수행
    const index = movies.indexOf(movie);
    movies.splice(index, 1);

    // 삭제된 Data send
    res.send(movie)
  });

  function validateMovie(movie) {
    const schema = {
      // 스트링이며 최소 2글자가 필요.
      title: Joi.string().min(2).required()
    };
    return Joi.validate(movie, schema);
  }

  function getMovie(movies, id) {
    return movies.find(movie => movie.id === id);
  };
  

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
