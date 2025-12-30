graph TD
    %% スタイルの定義（CE11の記号に基づいた形状）
    Start([開始]) 
    End([終了])
    Proc1[Processing: 音声取得<br/>標本化・ダウンサンプリング]
    Proc2[Arduinoへデータ送信<br/>16bit分割・シリアル通信]
    Sub1[[Arduino: FFT解析処理<br/>16バンドに集約]]
    Proc3[Processing: データ受信<br/>dB変換・3帯域へのグループ分け]
    Proc4[各エリアのピーク検出<br/>BASS/MID/TREBLEの最大値検索]
    Dec1{ピーク値 > しきい値?}
    Proc5[UIの動的変更<br/>ラベル拡大・発光エフェクト]
    Proc6[通常表示]
    Proc7[画面描画<br/>スペクトラムバー表示]

    %% 流れの定義
    Start --> Proc1
    Proc1 --> Proc2
    Proc2 --> Sub1
    Sub1 --> Proc3
    Proc3 --> Proc4
    Proc4 --> Dec1
    
    Dec1 -- Yes --> Proc5
    Dec1 -- No --> Proc6
    
    Proc5 --> Proc7
    Proc6 --> Proc7
    
    %% ループ構造
    Proc7 -- "draw()による繰り返し"-->Proc1