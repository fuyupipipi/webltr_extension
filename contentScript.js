//'use strict';
/* let currentUrl = location.href.toString();
console.log("current url: " + currentUrl);
 */
/* 
patternのオブジェクト定義
    id: webappのオプションmodelのプライマリーキーに対応
    label: オプション名
    pattern: 正規表現パターン
    removalPattern: クエリスキーマに何も入ってない場合(イコールで止まっている)や全期間検索を除外
*/ 
/* const optionPattern = [
    {
        id: 1,
        label: 'Not',
        pattern: /\+\-|as_eq=/,
        removalPattern: /as_eq=\&/
    },
    {
        id: 2,
        label: 'Phrase',
        // 網羅性が未確定 アルファベット・数字・日本語・フレーズ内ANDには対応
        pattern: /\%22[\w\%\+]*\%22|\".+\"|as_epq=/,
        // ダブルクオーテーションを片方にしかつけてない場合はフレーズ検索してないので除去
        // removalPattern: /as_epq=\&|\%22[\w\%]*=/
        removalPattern: /as_epq=\&/
    },
    {
        id: 3,
        label: 'Period',
        pattern: /qdr/,
        removalPattern: /as_qdr=all/
    },
    {
        id: 4,
        label: 'Domain',
        pattern: /site%3A|site:|as_sitesearch=/,
        removalPattern: /as_sitesearch=\&/
    }
]; */

// データをPOSTする関数
/*
 * データをPOSTする
 * @param String アクション
 * @param Object POSTデータ連想配列
 * 記述元Webページ http://fujiiyuuki.blogspot.jp/2010/09/formjspost.html
 * サンプルコード
 * <a onclick="execPost('/hoge', {'fuga':'fuga_val', 'piyo':'piyo_val'});return false;" href="#">POST送信</a>
 */
/*  function execPost(action, paramName, paramValue) {
    // フォームの生成
    var form = document.createElement("form");
    form.setAttribute("action", action);
    form.setAttribute("method", "post");
    form.style.display = "none";
    document.body.appendChild(form);
    // パラメタの設定
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', paramName);
    input.setAttribute('value', paramValue);
    form.appendChild(input);
    // submit
    form.submit();
   } */


// csrfトークンを取得
/* function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
} */
// const csrftoken = getCookie('csrftoken');
/* 
function checkSession() {
    const request = new Request(
        "http://127.0.0.1:8000/api/opt_search_log/",
    );
    fetch(request, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    }).then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
        })
        .then(response => {
        console.debug(response);
        // ...
        }).catch(error => {
        console.error(error);
        });
};

function postOptAchv(optId) {
    const request = new Request(
        "http://127.0.0.1:8000/post/option/add",
        {headers: {'X-CSRFToken': getCookie('csrftoken')}}
    );
    fetch(request, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: '{"option": ' + optId + '}'
    }).then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
        })
        .then(response => {
        console.debug(response);
        // ...
        }).catch(error => {
        console.error(error);
        });
}; */
/* Webappのview側で設定するので不要
// ローカルテスト用action: http://127.0.0.1:8000/post/option/<id>/add
// input name: regist_time
// input value: Year-Month-Day¥sHour:Min:Sec
let dateNow = new Date();
let year = dateNow.getFullYear();
let month = ("0"+(dateNow.getMonth() + 1)).slice(-2);
let date = ("0"+dateNow.getDate()).slice(-2);
let hour = dateNow.getHours();
let min = dateNow.getMinutes();
let sec = dateNow.getSeconds();

let registTime = year + "-" + month + "-" + date + "¥s" + hour + ":" + min + ":" + sec; 
*/
// optionSearchオブジェクトの各要素に繰り返し処理
/* checkSession();
const searchOptionJudge = optionPattern.forEach(optionObj => {
    let optid = optionObj.id;
    let label = optionObj.label;
    let pattern = optionObj.pattern;
    let removalPattern = optionObj.removalPattern;
    // label情報の開示
    console.log(label + "_search");
    // patternのマッチ状況開示
    console.log(currentUrl.match(pattern));
    // パターンにマッチかつ除去パターンにマッチしなければOK
    if ((currentUrl.match(pattern)) && (currentUrl.match(removalPattern) == null)) {
        console.log("get \"" + label + "\" badge!");
        //let actionUrl = "http://127.0.0.1:8000/post/option/"+ id +"/add";
        //console.log(actionUrl);
        //console.log("registTime: " + registTime);
        //execPost(actionUrl, "regist_time", registTime);
        postOptAchv(optid);
        console.log("Achievement of " + label + "submitted");
    } else {
        //除去パターンにマッチしてもダメ
        console.log(currentUrl.match(removalPattern));
        console.log(label + "_search: none");
    }});
 */