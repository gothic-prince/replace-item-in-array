/**
 * @param array {Array}
 * @param search
 * @param replace
 * @return {Array}
 */
const replaceItemInArray = (array, search, replace) => {
  const copyArray = array.slice()
  const index = copyArray.indexOf(search)
  if (index !== -1) {
    copyArray.splice(index, 1, replace)
    return copyArray
  }
  return copyArray
}
export default replaceItemInArray
