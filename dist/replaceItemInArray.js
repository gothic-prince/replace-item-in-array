"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param array {Array}
 * @param search
 * @param replace
 * @return {Boolean}
 */
var replaceItemInArray = function replaceItemInArray(array, search, replace) {
  var index = array.indexOf(search);
  if (index !== -1) {
    array.splice(index, 1, replace);
    return true;
  }
  return false;
};
exports.default = replaceItemInArray;