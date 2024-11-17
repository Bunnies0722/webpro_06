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
1. 自分の手を入力する

```mermaid
flowchart TD;

start1["開始 (あなた: グー)"];
end1["終了"];
cpu1{"相手の手は？"};
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

start2["開始 (あなた: チョキ)"];
end2["終了"];
cpu2{"相手の手は？"};
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

start3["開始 (あなた: パー)"];
end3["終了"];
cpu3{"相手の手は？"};
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







