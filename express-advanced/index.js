const debug = require('debug')('app:startup')
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth")
const Joi = require('joi');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req, res)=>{
  res.render('index',{
    title:'HappyHacking',
    greeting: 'May you'
  })
})

console.log(app.get('env'));
console.log(app.get('debug'));

console.log(config.get('name'))

console.log(`Node_env: ${process.env.NODE_ENV}`)
app.use(helmet());

if(app.get('env') === 'development'){
  debug("MORGAN 을 실행합니다")
  // startupDebugger('MORGAN 실행합니다.')
  app.use(morgan('dev'))
  // dbDebugger('DB Connecting')
}

console.log(config.get('DB').password)

app.use(express.json());

// 
app.use(express.urlencoded({extended:true}));
app.use(logger);
app.use(auth);

// 정적파일을 불러오는 경로지정.
app.use(express.static('public'))



const movies = [
  { id: 1, title: 'Bohemian Rhapsody' },
  { id: 2, title: 'Matrix' },
  { id: 3, title: 'Edge of Tommorow' },
];

app.get('/', (req, res) => {
  res.send('Happy Hacking');
});

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});


/* GET /api/movies */
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) res.status(404).send(`Movie with given id(${req.params.id}) is not found.`);
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body)

  if (error) return res.status(400).send(error.message);
  
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };

  movies.push(movie);
  res.send(movie);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);
  
  const { error } = validateMovie(req.body)
  // const error = validateMovie(req.body).error;

  if (error) return res.status(400).send(error.message);

  movie.title = req.body.title;
  res.send(movie);
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.send(movie);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id){
  return movies.find(movie => movie.id === id)
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));