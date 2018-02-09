### About
Replace first of the search element with the replacement other element.
This function returns boolean. 


| Param | Type | Description |
|---|---| --- |
| First | Array | Your array |
| Second | Any | Searched element |
| Third | Any | Replaced element |

### Example: 

```javascript
import replaceItemInArray from 'replace-item-in-array'

const myArray = ["red","black","yellow","white","blue"]
const search = "yellow"
const replace = "green"

const result = replaceItemInArray(myArray, search, replace)
console.log(result)
// true
console.log(myArray)
// ["red","black","green","white","blue"]
```
