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

start["じゃんけん開始"];
decision["相手の手は？"];
tie["引き分け"];
win["勝ち"];
lose["負け"];
end1["終了"];

start --> decision;

decision --> |相手がグー| tie;
decision --> |相手がチョキ| win;
decision --> |相手がパー| lose;

tie --> end1;
win --> end1;
lose --> end1;

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
