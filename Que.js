class Que{
  constructor(){
    this.items=[];
    this.rear=null
  }
  enqueue(...elem){
     this.items.push(...elem)
  }
  dequeue(){
  return  this.items.shift()
  }
  isEmpty(){
    return this.items.length===0
  }
  peek(){
    if(this.isEmpty()) return null;
    return this.items[0]
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
  
}

const que=new Que()
que.enqueue(2,3)
que.print()
que.peek()
que.dequeue()
que.print()