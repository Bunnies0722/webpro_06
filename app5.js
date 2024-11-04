app.get("/janken", (req, res) => {
  let hand = req.query.hand; // 人間の手（グー、チョキ、パー）
  let win = Number(req.query.win); // 勝利数
  let total = Number(req.query.total); // 試合数
  console.log({ hand, win, total });

  const num = Math.floor(Math.random() * 3 + 1); // CPUの手のランダム生成
  let cpu = ''; // CPUの手の表示用変数
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  // 勝敗判定
  let judgement = '';
  if (hand === cpu) {
    judgement = '引き分け';
  } else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1; // 勝った場合のみ勝利数を増加
  } else {
    judgement = '負け';
  }

  total += 1; // 試合数を増加

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };

  res.render('janken', display);
});

