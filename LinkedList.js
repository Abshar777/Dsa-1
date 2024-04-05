class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(val) {
    // ithu ennu vecha listinteee firstillu add cheyyan annu
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`the list is empty`);
    } else {
      let curr = this.head;
      let elem = "";
      while (curr) {
        elem += ` ${curr.value}`;
        curr = curr.next;
      }
      console.log(elem);
    }
  }
  append(val) {
    if (this.isEmpty()) {
      this.head = new Node(val);
      this.size++;
    }
    const node = new Node(val);
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
    }
    prev.next = node;
    this.size++;
  }
   insert(index,val){
     if(index<0 || index>this.size){
        throw new Erorr('given index is note ');
      
     }
    if(index==0){
      this.prepend(val)
    }
     const node=new Node(val)
     let flag=0;
     let prev=this.head;
     while(flag<index-1){
       prev=prev.next
       flag++
     }
     node.next=prev.next;
     prev.next=node
     this.size++;
   }
   remove(index){
     if(index<0 || index>this.size){
       console.log('the index is note exist')
     }
     if(index==0){
       let removeElam=this.head;
       this.head=this.head.next;
       this.size--;
       return removeElam;
     }else{
       let prev=this.head,flag=0
       while(flag<index-1){
         prev=prev.next;
         flag++;
       }
       let remove=prev.next;
       prev.next=remove.next
       this.size--;
     }
     
   }
   search(val){
     let prev=this.head;
     for(let i=0;i<this.size;i++){
       
       if(prev.value==val){
         return console.log(i);
       }
       prev=prev.next
     }
     return console.log(-1);
   }

reverse(){
  let prev=null;
  let curr=this.head;
  while(curr){
    let next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next
  }
  this.head=prev
  return this.print()
}
}
const linkedList = new LinkedList();
linkedList.prepend(5);
linkedList.prepend(6);
console.log(linkedList.getSize());
linkedList.print();
linkedList.append(7);
linkedList.append(8);
linkedList.insert(2,10)
linkedList.print()
linkedList.remove(0)
linkedList.search(10)
linkedList.print();
linkedList.reverse()

module.export={LinkedList}