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

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
loose["負け"]

start --> if
if --> |yes| win
win --> end1
if --> |no| loose
loose --> end1
```
