const express = require('express')
const app = express();

const movies = [
  {id: 1, title: 'Matrix'},
  {id: 2, title: 'Terminate'},
  {id: 3, title: 'Avengers'},
]

app.get('/',(req, res)=>{
  res.send('Happy Hacking');
});

app.get('/:name',(req,res) => {
  res.send(`Hi, ${req.params.name}`)
})

// CRUD
// CREATE READ UPDATE DESTROY
// POST GET PUT DELETE


// 주고자 하는 이름의 리소스이름을 복수형으로 적는게 API.
// GET /api/movies
app.get('/api/movies/:id', (req,res) => {
  const movie = movies.find((movie) => {
    return movie.id === parseInt(req.params.id);
  });
  if(!movie){
    res.status(404).send(`응${req.params.id}업서`);
  }
  console.log(movie)
  res.send(movie);
});

// GET /api/movies/1
// app.get();

// POST /api/movies
// app.post();

// PUT /api/movies/1
// app.put();

// DELETE /api/movies/1
// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))