// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if ((obj === null) || (obj === undefined)) {
    return "" + obj + "";
  }

  if (typeof(obj) === "string") {
    return '"' + obj + '"';
  }

  if (typeof(obj) === "number" || "boolean") {
    return "" + obj + "";
  }

if (Object.prototype.toString().call(obj) === true) {
    var result = {};
    for (var key in obj) {
      result[(stringifyJSON(key))] == stringifyJSON(obj[key]);
    }
    return "" + result + "";
  }

if (Array.isArray(obj) === true) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return "" + result + "";
  }

  return "" + obj + "";

}