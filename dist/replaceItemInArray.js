"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param array {Array}
 * @param search
 * @param replace
 * @return {Array}
 */
var replaceItemInArray = function replaceItemInArray(array, search, replace) {
  var copyArray = array.slice();
  var index = copyArray.indexOf(search);
  if (index !== -1) {
    copyArray.splice(index, 1, replace);
    return copyArray;
  }
  return copyArray;
};
exports.default = replaceItemInArray;