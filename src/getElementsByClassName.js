// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    var allNodes = document.body;
    var targetClass = className;
    var result = [];
    var check = function () {
        if (this.classList.contains(targetClass)) {
            result.push(this);
        }
    }

    var loop = function (parent, callback) {
        if (parent.hasChildNodes()) {
            for (var node = parent.firstElementChild; node; node = node.nextElementSibling) {
                loop(node, callback);
            }
        }
        callback.call(parent);
    }

    loop(allNodes, check);
    var last = result.pop();
    result.unshift(last);
    return result;
}
