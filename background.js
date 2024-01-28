function handleClick() {
  browser.nextUnreadThreadApi.nextUnreadThread();
};

browser.browserAction.onClicked.addListener(handleClick);

browser.nextUnreadThreadApi.loadButton();

console.log("Next Unread Thread enabled");
