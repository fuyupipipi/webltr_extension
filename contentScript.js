//'use strict';
let currentUrl = location.href.toString();
console.log("current url: " + currentUrl);

// Not search pattern
let notSearch = {label: 'Not', pettern: new RegExp('\\\+\\\-')};
// Phrase search pattern
let phraseSearch = {label: 'Phrase', pattern: new RegExp('%22\.\+%22')};
// period pattern
let periodSearch = {label: 'Period', pattern: new RegExp('qdr')};
// domain pattern
let domainSearch = {label: 'Domain', pattern: new RegExp('site%3A|as_sitesearch=')};

function searchOptionJudge(topic, currentUrl) {
    let judgePattern = topic.pattern;
    if (currentUrl.match(judgePattern) !== null) {
        // 検索オプション画面から検索を行った場合の, 期間無指定(='all')に対応
        if ((topic.label== 'Period') && (currentUrl.match(/as_qdr=all/))) {
            console.log(topic.pattern);
            console.log(topic.label + "_search: none(selected all)");
            return false;
        }
        console.log("get \"" + topic.label + "\" badge!");
    } else {
        if ((topic.label == 'Phrase') && (currentUrl.match(/as_epq=/))) {
            console.log("get \"" + topic.label + "\" badge!");
            return true;
        }
        console.log(topic.pattern);
        console.log(topic.label + "_search: none");
    }
};

searchOptionJudge(phraseSearch, currentUrl);
searchOptionJudge(notSearch, currentUrl);
searchOptionJudge(periodSearch, currentUrl);
searchOptionJudge(domainSearch, currentUrl);