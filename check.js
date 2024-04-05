class Node {
   constructor(val) {
     this.next=0
     this.value=val;
      
   }
}

class LinkedList {
   
   constructor() {
      this.head=null;
     this.size=0
   }
  isEmpty(){
  return this.size==0
  }
  getSize(){
    return this.size
  } 
  prepend(val){
    let node =new Node(val)
    if(this.isEmpty()){
      this.head=node
    }
    else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  print(){
    let elem='',curr=this.head
  
    
    while(curr.next){
      elem+=curr.value+' ';
      curr=curr.next;
    }
    elem+=curr.value
    console.log(`${elem}`);
  }
  append(val){
    if(this.isEmpty()){
      const node =new Node(val)
      this.head=node
    }else{
      let prev=this.head;
      while(prev.next){
        prev=prev.next
      }
      prev.next=new Node(val)
      
    }
    this.size++
  }
  insert(index,val){
   if(index<0 || index>this.size){
     console.log('the index is note exist')
     return 
   }
    if(index==0){
      this.prepend(val)
    }else{
      const node=new Node(val)
    let prev=this.head
    for(let i=0;i<index-1;i++){
      prev=prev.next
    }
      node.next=prev.next;
      prev.next=node
    this.size++
    }
  
  }
remove(index){
  if(index<0 || index>this.size()){
    console.log(`the index is note exist`);
  }
  else{
    if(index==0){
      this.head=this.head.next
    }
    let prev=this.head
    for(let i=0;i<parseInt(index-1);i++){
      prev=prev.next;
    }
    let curr=prev.next
    prev.next=curr.next
    this.size--;
  }
}
  
  serach(val){
    let prev=this.head
    for(let i=0;i<this.size;i++){
      if(val==prev.value){
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
      prev=curr
      curr=next
    }
    this.head=prev
  }
  middleElemRemove(){
    const middle=this.getSize()
    this.remove(middle/2)
  }
  swap(index1,index2){
    if(index1<0 || index2<0 || index1>th)
  }
}

const list=new LinkedList()
list.prepend(5)
list.append(10)
list.append(2)
list.append(7)
list.remove(177)
list.print()