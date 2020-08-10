function parseGlobalData(list) {
  var globalData = {};
  list.forEach(function(x) {
    var key = objectToKey(x.params);
    if (!globalData[key]) {
      globalData[key] = x.response;
    }
  });
  return globalData;
}

function objectToKey(obj) {
  return btoa(JSON.stringify(Object.entries(obj).sort()));
}

function appendGlobalData(data) {
  if (!window.staticGlobalData) {
    window.staticGlobalData = {};
  }
  window.staticGlobalData = Object.assign({}, window.staticGlobalData, parseGlobalData(data));
}

window.globalSiteType = 'static';
