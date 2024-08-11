var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

var recentWindow = Services.wm.getMostRecentWindow("mail:3pane");

var nextUnreadThreadApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      nextUnreadThreadApi: {
        async nextUnreadThread() {
          if (recentWindow) {
            recentWindow.goDoCommand('cmd_markThreadAsRead');
            recentWindow.goDoCommand('cmd_nextUnreadMsg');
          }
        },
        async loadButton() {
          if (recentWindow) {
            recentWindow.addEventListener('DOMContentLoaded', (event) => {
              let nextUnreadThreadButton = recentWindow.document.getElementById("nextunreadthread_dillinger-browserAction-toolbarbutton");
              if (nextUnreadThreadButton) {
                nextUnreadThreadButton.setAttribute("observes", "button_next");
              }
            });
          }
        },
      },
    };
  }
  onShutdown(isAppShutdown) {
  if (isAppShutdown) return;
  console.log("Next Unread Thread disabled");
  }
};
