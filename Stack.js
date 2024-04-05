class Stack{
  constructor(){
    this.items=[]
  }
  push(...elam){
  return this.items.push(...elam)
  }
  pop(){
    return this.items.pop()
  }
  print(){
    return console.log(this.items.toString())
  }
}

const stack=new Stack()
stack.push(1,2,3,4)
stack.print()
stack.pop()
stack.print()