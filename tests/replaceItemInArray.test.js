import replaceItemInArray from '../dist/replaceItemInArray'
describe('replaceItemInArray', () => {
  describe('Numbers', () => {
    const arr = [1,2,3,4,5,6]
    const replacedArr = replaceItemInArray(arr, 2, 99)
    it('should return 1', () => {
      expect(replacedArr[0]).toBe(1)
    })
    it('should return 99', () => {
      expect(replacedArr[1]).toBe(99)
    })
    it('should return 3', () => {
      expect(replacedArr[2]).toBe(3)
    })
    it('should return 4', () => {
      expect(replacedArr[3]).toBe(4)
    })
    it('should return 5', () => {
      expect(replacedArr[4]).toBe(5)
    })
    it('should return 6', () => {
      expect(replacedArr[5]).toBe(6)
    })
    it('should return 2', () => {
      expect(arr[1]).toBe(2)
    })
  })
  describe('Strings', () => {
    const arr = ["red","black","yellow","white","blue"]
    const replacedArr = replaceItemInArray(arr, "yellow", "green")
    it('should return "red"', () => {
      expect(replacedArr[0]).toBe("red")
    })
    it('should return "black"', () => {
      expect(replacedArr[1]).toBe("black")
    })
    it('should return "green"', () => {
      expect(replacedArr[2]).toBe("green")
    })
    it('should return "white"', () => {
      expect(replacedArr[3]).toBe("white")
    })
    it('should return "blue"', () => {
      expect(replacedArr[4]).toBe("blue")
    })
    it('should return "yellow"', () => {
      expect(arr[2]).toBe("yellow")
    })
  })
})
