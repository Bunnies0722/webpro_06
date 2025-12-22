"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// 初期データ
let playerData = [
    { id: '1', number: '20', name: '久保建英', position: 'MF', team: 'レアル・ソシエダ', nation: '日本' }, 
    { id: '2', number: '10', name: '南野拓実', position: 'FW', team: 'ASモナコ', nation: '日本' }, 
    { id: '3', number: '12', name: '鈴木彩艶', position: 'GK', team: 'シント＝トロイデン', nation: '日本' }
];

app.get("/", (req, res) => {
    res.redirect('/player');
});

// 一覧
app.get("/player", (req, res) => {
    res.render('player', { data: playerData });
});

// Create
app.get("/player/create", (req, res) => {
    res.redirect('/public/player_new.html'); 
});

// Read
app.get("/player/:number", (req, res) => {
    const number = req.params.number;
    const detail = playerData[number];
    res.render('player_detail', { id: number, data: detail });
});

// Delete
app.get("/player/delete/:number", (req, res) => {
    playerData.splice(req.params.number, 1);
    res.redirect('/player');
});

// Create POST
app.post("/player", (req, res) => {
    const id = playerData.length + 1;
    const number = req.body.number;
    const name = req.body.name;
    const position = req.body.position;
    const team = req.body.team;
    const nation = req.body.nation;

    playerData.push({ 
        id: id, 
        number: number, 
        name: name, 
        position: position, 
        team: team, 
        nation: nation 
    });

    console.log(playerData);
    res.render('player', { data: playerData });
});

// Edit
app.get("/player/edit/:number", (req, res) => {
    const number = req.params.number;
    const detail = playerData[number];
    res.render('player_edit', { id: number, data: detail });
});

// Update
app.post("/player/update/:number", (req, res) => {
    playerData[req.params.number].number = req.body.number;
    playerData[req.params.number].name = req.body.name;
    playerData[req.params.number].position = req.body.position;
    playerData[req.params.number].team = req.body.team;
    playerData[req.params.number].nation = req.body.nation;

    console.log(playerData);
    res.redirect('/player');
});

app.listen(8080, () => console.log("Soccer app listening on port 8080!"));
