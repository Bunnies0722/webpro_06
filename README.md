# webpro_06
## このプログラムについて
## ファイル一覧
ファイル名 |説明
-|-
app5.js | プログラム本体（ダイスとeカードのプログラムを追加）
public/janken.html | じゃんけんの開始画面
views/janken.esj | じゃんけんのテンプレートファイル
views/dice.esj | ダイスのテンプレートファイル
views/ecard.esj | eカードのテンプレートファイル
```javascript
localhost:8080/public/janken
```
1. ```app5.js```を起動する
1. Webブラウザでlocalhost:8080/public/jankenにアクセスする
1. 自分の手をグーとチョキとパーの中から選び勝負！というボタンを押すとCPUが3つの手の中からランダムで手を選びCPUの手と勝敗が表示され勝利数と試合数がカウントされる

```mermaid
flowchart TD;

start1["開始 (あなたの手: グー)"];
end1["終了"];
cpu1{"CPUの手"};
win1["勝ち"];
loose1["負け"];
draw1["引き分け"];

start1 --> cpu1;
cpu1 --> |チョキ| win1;
cpu1 --> |パー| loose1;
cpu1 --> |グー| draw1;
win1 --> end1;
loose1 --> end1;
draw1 --> end1;
```

```mermaid
flowchart TD;

start2["開始 (あなたの手: チョキ)"];
end2["終了"];
cpu2{"CPUの手"};
win2["勝ち"];
loose2["負け"];
draw2["引き分け"];

start2 --> cpu2;
cpu2 --> |パー| win2;
cpu2 --> |グー| loose2;
cpu2 --> |チョキ| draw2;
win2 --> end2;
loose2 --> end2;
draw2 --> end2;
```

```mermaid
flowchart TD;

start3["開始 (あなたの手: パー)"];
end3["終了"];
cpu3{"CPUの手"};
win3["勝ち"];
loose3["負け"];
draw3["引き分け"];

start3 --> cpu3;
cpu3 --> |グー| win3;
cpu3 --> |チョキ| loose3;
cpu3 --> |パー| draw3;
win3 --> end3;
loose3 --> end3;
draw3 --> end3;
```




```javascript
localhost:8080/public/dice
```
1. ```app5.js```を起動する
1. Webブラウザでlocalhost:8080/public/diceにアクセスする
1. サイコロ1とサイコロ2とサイコロ3というボタンがありいずれかのボタンを押すとランダムで1〜6の数が選ばれサイコロの出目が表示される

```mermaid
flowchart TD;

start["開始"];
choose{"どのサイコロを選ぶ？"};
roll1["サイコロ1"];
roll2["サイコロ2"];
roll3["サイコロ3"];
generate1["1〜6の数字をランダムに生成"];
result1["結果を表示"];
end1["終了"];

start --> choose;
choose --> |サイコロ1| roll1;
choose --> |サイコロ2| roll2;
choose --> |サイコロ3| roll3;

roll1 --> generate1;
roll2 --> generate1;
roll3 --> generate1;

generate1 --> result1;
result1 --> end1;
```



```javascript
localhost:8080/public/ecard
```
1. ```app5.js```を起動する
1. Webブラウザでlocalhost:8080/public/ecardにアクセスする
1. 皇帝と奴隷と平民というボタンがありいずれかのボタンを選ぶとCPUがランダムで三つの中から選びCPUのカードの種類と自分の選択したカードの種類と結果が表示され試合数と勝利数がカウントされる

```mermaid
flowchart TD;

start["開始（あなたの選択：皇帝）"];
cpuChoose["CPUのカード"];

cpuEmperor["CPU: 皇帝"];
cpuSlave["CPU: 奴隷"];
cpuCommon["CPU: 平民"];

resultWin["結果: 勝ち"];
resultDraw["結果: 引き分け"];
endGame["終了"];

start --> cpuChoose;

cpuChoose --> cpuEmperor --> resultDraw --> endGame;
cpuChoose --> cpuSlave --> resultWin --> endGame;
cpuChoose --> cpuCommon --> resultWin --> endGame;
```


```mermaid
flowchart TD;

start["開始（あなたの選択：平民）"];
cpuChoose["CPUのカード"];

cpuEmperor["CPU: 皇帝"];
cpuSlave["CPU: 奴隷"];
cpuCommon["CPU: 平民"];

resultWin["結果: 勝ち"];
resultLose["結果: 負け"];
resultDraw["結果: 引き分け"];
endGame["終了"];

start --> cpuChoose;

cpuChoose --> cpuEmperor --> resultLose --> endGame;
cpuChoose --> cpuSlave --> resultWin --> endGame;
cpuChoose --> cpuCommon --> resultDraw --> endGame;
```


```mermaid
flowchart TD;

start["開始（あなたの選択：奴隷）"];
cpuChoose["CPUのカード"];

cpuEmperor["CPU: 皇帝"];
cpuSlave["CPU: 奴隷"];
cpuCommon["CPU: 平民"];

resultWin["結果: 勝ち"];
resultLose["結果: 負け"];
resultDraw["結果: 引き分け"];
endGame["終了"];

start --> cpuChoose;

cpuChoose --> cpuEmperor --> resultWin --> endGame;
cpuChoose --> cpuSlave --> resultDraw --> endGame;
cpuChoose --> cpuCommon --> resultLose --> endGame;
```