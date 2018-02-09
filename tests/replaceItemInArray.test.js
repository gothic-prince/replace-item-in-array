import replaceItemInArray from '../dist'
describe('replaceItemInArray', () => {
  describe('Numbers', () => {
    const arr = [1,2,3,4,5,6]
    const result = replaceItemInArray(arr, 2, 99)
    it('should return true', () => {
      expect(result).toBe(true)
    })
    it('should return 1', () => {
      expect(arr[0]).toBe(1)
    })
    it('should return 99', () => {
      expect(arr[1]).toBe(99)
    })
    it('should return 3', () => {
      expect(arr[2]).toBe(3)
    })
    it('should return 4', () => {
      expect(arr[3]).toBe(4)
    })
    it('should return 5', () => {
      expect(arr[4]).toBe(5)
    })
    it('should return 6', () => {
      expect(arr[5]).toBe(6)
    })
  })

  describe('Strings', () => {
    const arr = ["red","black","yellow","white","blue"]
    const result = replaceItemInArray(arr, "yellow", "green")
    it('should return true', () => {
      expect(result).toBe(true)
    })
    it('should return "red"', () => {
      expect(arr[0]).toBe("red")
    })
    it('should return "black"', () => {
      expect(arr[1]).toBe("black")
    })
    it('should return "green"', () => {
      expect(arr[2]).toBe("green")
    })
    it('should return "white"', () => {
      expect(arr[3]).toBe("white")
    })
    it('should return "blue"', () => {
      expect(arr[4]).toBe("blue")
    })
  })
  describe('Error', () => {
    const arr = ["red","black","yellow","white","blue"]
    const result = replaceItemInArray(arr, "tank", "green")
    it('should return false', () => {
      expect(result).toBe(false)
    })
    it('should return "red"', () => {
      expect(arr[0]).toBe("red")
    })
    it('should return "black"', () => {
      expect(arr[1]).toBe("black")
    })
    it('should return "yellow"', () => {
      expect(arr[2]).toBe("yellow")
    })
    it('should return "white"', () => {
      expect(arr[3]).toBe("white")
    })
    it('should return "blue"', () => {
      expect(arr[4]).toBe("blue")
    })
  })
})
