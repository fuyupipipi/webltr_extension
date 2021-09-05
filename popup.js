chrome.tabs.query({ active: true, currentWindow: true }, (tab_data) => {
    const title = tab_data[0].title;
    const url = tab_data[0].url;
    console.log(title);
    console.log(url);
    document.getElementById("title-field").value = title;
    document.getElementById("url-field").value = url;
  });