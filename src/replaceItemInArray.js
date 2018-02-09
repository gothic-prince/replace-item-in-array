/**
 * @param array {Array}
 * @param search
 * @param replace
 * @return {Boolean}
 */
const replaceItemInArray = (array, search, replace) => {
  const index = array.indexOf(search)
  if (index !== -1) {
    array.splice(index, 1, replace)
    return true
  }
  return false
}
export default replaceItemInArray
