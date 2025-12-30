"use strict";
let number = 0;
const bbs = document.querySelector('#bbs');

// 投稿を送信
document.querySelector('#post').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    if (!name || !message) {
        alert("名前とメッセージを入力してください。");
        return;
    }

    const params = {  // URL Encode
        method: "POST",
        body:  'name=' + name + '&message=' + message,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const url = "/post";
    fetch(url, params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        console.log(response);
        document.querySelector('#message').value = "";
    });
});

// 投稿チェック
document.querySelector('#check').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body: '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const url = "/check";
    fetch(url, params)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then((response) => {
        let value = response.number;
        if (number !== value) {
            const params = {
                method: "POST",
                body: 'start=' + number,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'               
                }
            }
            const url = "/read";
            fetch(url, params)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then((response) => {
                number += response.messages.length;
                for (let mes of response.messages) {
                    let cover = document.createElement('div');
                    cover.className = 'cover';

                    let name_area = document.createElement('span');
                    name_area.className = 'name';
                    name_area.innerText = mes.name;

                    let mes_area = document.createElement('span');
                    mes_area.className = 'mes';
                    mes_area.innerText = mes.message;

                    let timestamp_area = document.createElement('span');
                    timestamp_area.className = 'timestamp';
                    timestamp_area.innerText = mes.timestamp;  // 日時を表示

                    cover.appendChild(name_area);
                    cover.appendChild(mes_area);
                    cover.appendChild(timestamp_area);  // 日時を追加

                    bbs.appendChild(cover);
                }
            });
        }
    });
});



// 全ての投稿を削除
document.querySelector("#deleteAll").addEventListener("click", () => {
    fetch("/bbs", { method: "DELETE" })
        .then(response => {
            if (!response.ok) throw new Error("全ての投稿を削除できません");
            return response.json();
        })
        .then(data => {
            alert(data.message);
            number = 0; // 投稿数をリセット
            bbs.innerHTML = ""; // 表示をクリア
        })
        .catch(error => console.error(error));
});


