// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return "" + null + "";
  }

  if (typeof(obj) === "string") {
    return '"' + obj + '"';
  }

  if (typeof(obj) === "number") {
    return "" + obj + "";
  }

  if (typeof(obj) === "boolean") {
    return "" + obj + "";
  }

  if (Array.isArray(obj) === true) {
    var arrResult = [];
    for (var i = 0; i < obj.length; i++) {
      arrResult.push(stringifyJSON(obj[i]));
    }
    return '[' + arrResult + ']';
  }

  if (typeof(obj) === "object") {
    var objResult = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj) === "function") {
        return '{}';
      }
      var temp = (stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      objResult.push(temp);
    }
    return '{' + objResult + '}';
  }
  return "" + obj + "";
};