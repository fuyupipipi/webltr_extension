chrome.tabs.query({ active: true, currentWindow: true }, (tab_data) => {
    const title = tab_data[0].title;
    const url = tab_data[0].url;
    console.log(title);
    console.log(url);
    document.getElementById("title-field").value = title;
    document.getElementById("url-field").value = url;
  });
  function webappLink(url) {
    var title = document.getElementById('title-field').value,
    url = document.getElementById('url-field').value,
    webapp_url = "https://webltr-webapp.herokuapp.com/webeval/post",
    target_url = webapp_url + "?url=" + url + "&title=" + title,
    width = screen.width / 2,
    height = screen.height,
    option = "width=" + width + ", height=" + height;
    window.open(target_url, null, option)
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn').addEventListener('click', webappLink);
});