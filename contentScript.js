//'use strict';
let currentUrl = location.href.toString();
console.log("current url: " + currentUrl);

/* 
patternのオブジェクト定義
    id: webappのオプションmodelのプライマリーキーに対応
    label: オプション名
    pattern: 正規表現パターン
    removalPattern: クエリスキーマに何も入ってない場合(イコールで止まっている)や全期間検索を除外
*/ 
const optionPattern = {
    notSearch: {
        id: 1,
        label: 'Not',
        pattern: /\+\-|as_eq=/,
        removalPattern: /as_eq=\&/
    },
    phraseSearch: {
        id: 2,
        label: 'Phrase',
        // 網羅性が未確定 アルファベット・数字・日本語・フレーズ内ANDには対応
        pattern: /\%22[\w\%\+]*\%22|\".+\"|as_epq=/,
        // ダブルクオーテーションを片方にしかつけてない場合はフレーズ検索してないので除去
        // removalPattern: /as_epq=\&|\%22[\w\%]*=/
        removalPattern: /as_epq=\&/
    },
    periodSearch: {
        id: 3,
        label: 'Period',
        pattern: /qdr/,
        removalPattern: /as_qdr=all/
    },
    domainSearch: {
        id: 4,
        label: 'Domain',
        pattern: /site%3A|site:|as_sitesearch=/,
        removalPattern: /as_sitesearch=\&/
    }
};


const searchOptionJudge = Object.entries(optionPattern).forEach(optionObj => {
    let label = optionObj[1].label;
    let pattern = optionObj[1].pattern;
    let removalPattern = optionObj[1].removalPattern;
    // label情報の開示
    console.log(label + "_search");
    // patternのマッチ状況開示
    console.log(currentUrl.match(pattern));
    // パターンにマッチかつ除去パターンにマッチしなければOK
    if ((currentUrl.match(pattern)) && (currentUrl.match(removalPattern) == null)) {
        console.log("get \"" + label + "\" badge!");
    } else {
        //除去パターンにマッチしてもダメ
        console.log(currentUrl.match(removalPattern));
        console.log(label + "_search: none");
    }});
