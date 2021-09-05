// タブが切り替わった時のイベント
/* chrome.tabs.onActivated.addListener(function (tabId) {
    chrome.tabs.query({"active": true}, function (tab) {
        console.log(tab[0].url); // 切り替わったタブのURL
        chrome.tabs.remove(tab[0].id); //切り替わったタブを削除
    });
});
 */
// タブが更新された時のイベント
/* chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    console.log(tab.url); // → 更新されたURL
    console.log(info.status); //→ loading,complete
    chrome.tabs.remove(tabId); // 更新されたタブのidを削除
});
 */
//新規タブを開く
//chrome.tabs.create({ "url": "index.html" });
/* 
let Data = {"Title": "", "URL": ""}

chrome.tabs.getCurrent(tab=>{  // 現在のタブを取得
    Data.Title = tab.title;  // tabに現在のタブが格納されている（？）。
    Data.URL = tab.url;    // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。
    console.log(`Title: ${Data.Title}`);  // 出力は、「ポップアップを検証」で見れる。
    console.log(`URL: ${Data.URL}`);
}); */


chrome.tabs.query({ active: true, currentWindow: true }, (tab_data) => {
    const title = tab_data[0].title;
    const url = tab_data[0].url;
    console.log(title);
    console.log(url);
    document.getElementById("title-field").value = title;
    document.getElementById("url-field").value = url;
  });