const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1: "Hello world", greet2: "Bon jour" });
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename: "./public/Apple_logo_black.svg", alt: "Apple Logo" });
});

app.get("/luck", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';
  console.log('あなたの運勢は' + luck + 'です');
  res.render('luck', { number: num, luck: luck });
});



app.get("/janken", (req, res) => {
  let hand = req.query.hand; 
  let win = Number(req.query.win) || 0; 
  let total = Number(req.query.total) || 0; 
  console.log({ hand, win, total });

  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = ''; 
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  
  let judgement = '';
  if (hand === cpu) {
    judgement = '引き分け';
  } else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1; 
  } else {
    judgement = '負け';
  }
  total += 1; 

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render('janken', display);
});


app.get("/dice", (req, res) => {
  
  res.render('dice', { result: null });
});

app.post("/roll", (req, res) => {

  const diceResult = Math.floor(Math.random() * 6) + 1;
  res.render('dice', { result: diceResult });
});




app.get("/ecard", (req, res) => {
  // 初期表示では結果をnullで表示
  res.render('ecard', { result: false, win: 0, total: 0  });
});


app.post("/play", (req, res) => {
  const player = req.body.card; // プレイヤーの選択
  let win = Number(req.body.win) || 0;
  let total = Number(req.body.total) || 0;

  // コンピュータの選択（皇帝、奴隷、平民のいずれか）
  const cpuOptions = ["皇帝", "奴隷", "平民"];
  const cpu = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];

  let judgement = '';

  // 勝敗の判定
  if (player === cpu) {
    judgement = "引き分け";
  } else if (
    (player === "皇帝" && cpu === "平民") ||
    (player === "平民" && cpu === "奴隷") ||
    (player === "奴隷" && cpu === "皇帝")
  ) {
    judgement = "勝ち";
    win += 1; // 勝利数を増加
  } else if (
    (player === "平民" && cpu === "皇帝") ||
    (player === "奴隷" && cpu === "平民") ||
    (player === "皇帝" && cpu === "奴隷")
  ) {
    judgement = "負け";
  }

  // 試合数を増加
  total += 1;

  res.render("ecard", {
    result: true,
    player: player,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  });
});






app.listen(8080, () => console.log("Example app listening on port 8080!"));

