const Joi = require("joi");
const express = require("express");
const app = express();

// json으로 못받으면 이렇게 받을 수 있도록 함.
app.use(express.json());

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
// app.get();

// GET /api/movies/1
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(movie => {
    return movie.id === parseInt(req.params.id);
  });
  if (!movie) {
    res.status(404).send(`응${req.params.id}업서`);
  }
  console.log(movie);
  res.send(movie);
});

// POST /api/movies
app.post("/api/movies", (req, res) => {
  const schema = {
    // 스트링에 최소 2글자가 필요.
    title: Joi.string().min(2).required()
  };

  //  schema를 가지고 req.body 검사.
  const result = Joi.validate(req.body, schema);
  console.log("==================");
  console.log(result);
  console.log("==================");
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };

  if (result.error) {
    // 에러가 있으면 안됨.
    // res.send('응 안돼')
    res.status(404).send(result.error.message);
    return;
  }
  // 에러 없으면 됨.
  movies.push(movie);
  res.send(movie);
});

// PUT /api/movies/1
app.put('/api/movies/:id', (req,res)=>{
  // movie에서 id로 movie를 찾는다
  const movie = movies.find(movie => movie.id === parseInt(req.params.id))
  // 없으면 404
  if(!movie){
    res.status(404).send(`movie의 ID인 ${req.params.id} 가 없다.`);
    return;
  }
  // 아니면 입력데이터검사
  const schema = {
    // 스트링에 최소 2글자가 필요.
    title: Joi.string().min(2).required()
  };
  const result = Joi.validate(req.body, schema);
  // 유효하지 않으면 400
  if (result.error){
    res.status(400).send(result.error.message);
    return;
  }
  // Update
  movie.title = req.body.title;

  // 업데이트한 movie print
  res.send(movie)
});

// DELETE /api/movies/1
  app.delete('/api/movies/:id',(req,res) => { 
    
    // movies에서 id로 movie 찾기
    const movie = movies.find((move)=>{
      console.log('nnnnnnnnnnnnnnn')
      return parseInt(req.params.id) === move.id;
      console.log(move)
      console.log('mmmmmmmmmmmmmmm')
    })

    // 없으면 404
    if(!movie){
      res.status(404).send(`movie의 ID인 ${req.params.id} 가 없다.`)
    }
    // Delete logic 수행
    const index = movies.indexOf(movie)
    movies.splice(index,1);
    
    // 삭제된 Data send
    res.send(movies)
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
