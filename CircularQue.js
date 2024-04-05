class CircularQue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(elem) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = elem;
      this.currentLength++;
      if (this.front == -1) this.front = this.rear;
    }
  }
  dequeue() {
    if (this.isEmpty()) return null;
    else {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }
  peek() {
    if (!this.isEmpty()) return this.items[this.front];
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("there is no element in the array");
    }else{
      let i,str='';
      for(i=this.front;i<this.rear;i=(i+1)%this.capacity){
        str+=this.items[i]+' '
      }
      str+=this.items[i]
      console.log(str)
    }
    
  }
}

const circular=new CircularQue(5);
circular.enqueue(1)
circular.enqueue(2)
circular.enqueue(3)
circular.enqueue(4)
circular.print()
console.log(circular.dequeue())
circular.enqueue(5)
console.log(circular.peek())
circular.print()

