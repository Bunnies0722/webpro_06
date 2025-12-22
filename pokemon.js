"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


let pokemonData = [
    { id: '1', code: '001', name: 'フシギダネ', type1: 'くさ', type2: 'どく', ability: 'しんりょく' }, 
    { id: '2', code: '004', name: 'ヒトカゲ', type1: 'ほのお', type2: '', ability: 'もうか' }, 
    { id: '3', code: '007', name: 'ゼニガメ', type1: 'みず', type2: '', ability: 'げきりゅう' }, 
];

app.get("/", (req, res) => {
    res.redirect('/pokemon');
});

// 一覧
app.get("/pokemon", (req, res) => {
    res.render('pokemon', { data: pokemonData });
});

// Create
app.get("/pokemon/create", (req, res) => {
    res.redirect('/public/pokemon_new.html'); 
});

// Read
app.get("/pokemon/:number", (req, res) => {
    const number = req.params.number; 
    const detail = pokemonData[number];
    res.render('pokemon_detail', { id: number, data: detail });
  });

// Delete
app.get("/pokemon/delete/:number", (req, res) => {
    pokemonData.splice( req.params.number, 1);
    res.redirect('/pokemon');
});

//Create
app.post("/pokemon", (req, res) => {
  const id = pokemonData.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const type1 = req.body.type1;
  const type2 = req.body.type2;
  const ability = req.body.ability;
  pokemonData.push( { id: id, code: code, name: name, type1: type1, type2: type2, ability: ability } );
  console.log(pokemonData);
    res.render('pokemon', {data: pokemonData }); 
});

// Edit
app.get("/pokemon/edit/:number", (req, res) => {
    const number = req.params.number;
    const detail = pokemonData[number];
    res.render('pokemon_edit', { id: number, data: detail });
});

//Update
app.post("/pokemon/update/:number", (req, res) => {
    pokemonData[req.params.number].code= req.body.code;
    pokemonData[req.params.number].name = req.body.name;
    pokemonData[req.params.number].type1 = req.body.type1;
    pokemonData[req.params.number].type2 = req.body.type2;
    pokemonData[req.params.number].ability = req.body.ability;
    console.log(pokemonData);
    res.redirect('/pokemon');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));