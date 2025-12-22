"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let movieData = [
    { id: '1', code: '001', title: 'ショーシャンクの空に', genre: 'ドラマ', year: '1994', director: 'フランク・ダラボン' },
    { id: '2', code: '002', title: 'タイタニック', genre: '恋愛', year: '1997', director: 'ジェームズ・キャメロン' },
    { id: '3', code: '003', title: '千と千尋の神隠し', genre: 'アニメ', year: '2001', director: '宮崎駿' },
];

app.get("/", (req, res) => {
    res.redirect('/movie');
});

// 一覧
app.get("/movie", (req, res) => {
    res.render('movie', { data: movieData });
});

// Create
app.get("/movie/create", (req, res) => {
    res.redirect('/public/movie_new.html'); 
});

// Read
app.get("/movie/:number", (req, res) => {
    const number = req.params.number; 
    const detail = movieData[number];
    res.render('movie_detail', { id: number, data: detail });
});

// Delete
app.get("/movie/delete/:number", (req, res) => {
    movieData.splice(req.params.number, 1);
    res.redirect('/movie');
});

// Create
app.post("/movie", (req, res) => {
  const id = movieData.length + 1;
  const code = req.body.code;
  const title = req.body.title;
  const genre = req.body.genre;
  const year = req.body.year;
  const director = req.body.director;

  movieData.push({ id: id, code: code, title: title, genre: genre, year: year, director: director });
  console.log(movieData);
  res.render('movie', { data: movieData }); 
});

// Edit
app.get("/movie/edit/:number", (req, res) => {
    const number = req.params.number;
    const detail = movieData[number];
    res.render('movie_edit', { id: number, data: detail });
});

// Update
app.post("/movie/update/:number", (req, res) => {
    movieData[req.params.number].code = req.body.code;
    movieData[req.params.number].title = req.body.title;
    movieData[req.params.number].genre = req.body.genre;
    movieData[req.params.number].year = req.body.year;
    movieData[req.params.number].director = req.body.director;

    console.log(movieData);
    res.redirect('/movie');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));