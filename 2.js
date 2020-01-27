class StackSet {
  constructor(maxSize) {
    if (arguments.length < 1) {
      throw new Error ('Woops, maxSize is required!')
    }
    
    this.stacks = [[]]
    this.maxSize = maxSize
  }
  
  push(value) {
    if (this.stacks[this.stacks.length - 1].length === this.maxSize) {
      this.stacks.push([])
    }
    
    this.stacks[this.stacks.length - 1].push(value) 
  }
  
  pop() {
   const value = this.stacks[this.stacks.length - 1].pop()
   
   if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop()
   }
    
    return value
  }

  popAt(number) {
    if (number < 1 || number > this.stacks.length) {
      throw new Error ('Whoa, that number is either too small or too large for our stack.')
    }
    
    if (number === this.stacks.length) {
      return this.pop()
    }
    
    let stack = this.stacks[number - 1]
    let value = stack.pop()
    let nextStack = []
    
    for (let i = number; i < this.stacks.length; i++) {
      nextStack = this.stacks[i]
      stack.push(nextStack.shift())
      stack = nextStack
    }
    
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop()
   }
   
    return value;
  }
}
const myStack = new StackSet(3)
// to test if it works
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.push(6)
console.log(myStack.stacks) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(myStack.pop()) // 6
console.log(myStack.stacks) // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(myStack.popAt(1)) // 3
console.log(myStack.stacks) // [ [ 1, 2, 4 ], [ 5 ] ]