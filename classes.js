class LinkedList{
    constructor(head=null){
        this.head = head
    }
    append(value){
        let new_node = new Node(value)
        if(this.head == null){
            this.head = new_node
        }
        else{
            let current_node = this.head
            while(current_node.nextNode != null){
                current_node = current_node.nextNode
            }
            current_node.nextNode = new_node
        }
    }
    preAppend(value){
        let new_node = new Node(value)
        if(this.head == null) this.head = new_node
        else{
            let old_head = this.head
            new_node.nextNode = old_head
            this.head = new_node
        }
    }
    listSize(){
        let counter = 0
        let current_node = this.head
        while (current_node != null) {
            counter++ 
            current_node = current_node.nextNode
        }
        return counter
    }
    get_head(){
        return this.head
    }
    tail(){
        let current_node = this.head
        if (current_node == null) return 'Linked list is empty'
        while (current_node.nextNode != null) {
            current_node = current_node.nextNode
        }
        return current_node
    }
    at(index){
        let current_node = this.head
        if(current_node == null) return 'Linked list is empty'
        else if(index < 0) return 'Index is negative'
        let counter = 0
        while(current_node.nextNode != null && counter < index){
            current_node = current_node.nextNode
            counter++ 
        }
        if(index > counter) return 'Linked list is shorter'
        return current_node
    }
    pop(){
        if(this.listSize() == 1) {            
            this.head = null
        }
        else{
            let before_last_element = this.at(this.listSize()-2)
            before_last_element.nextNode = null
        }
    }
    contains(value){
        let current_node = this.head
        while (current_node != null) {
            if(current_node.value == value) return true
            current_node = current_node.nextNode
        }
        return false
    }
    find(value){
        let current_node = this.head
        let index = 0
        while (current_node != null) {
            if(current_node.value == value) return index
            current_node = current_node.nextNode
            index++
        }
        return null
    }
    toString(){
        
        let string = ''
        let current_node = this.head
        if(current_node == null) {
            console.log('List is empty');
            return
        }
        while (current_node != null) {
            string += `(${current_node.value})=>`
            current_node = current_node.nextNode
        }
        string += 'null'
        console.log(string);
        
    }
    insertAt(value, index){
        let new_node = new Node(value)
        let before_target_node = this.at(index-1)
        let target_node = this.at(index)

        new_node.nextNode = target_node
        before_target_node.nextNode = new_node
    }
    removeAt(index){
        let before_target_node = this.at(index-1)
        let after_target_node = this.at(index+1)
        before_target_node.nextNode = after_target_node
    }
}
class Node{
    constructor(value=null, nextNode=null){
        this.value = value
        this.nextNode = nextNode
    }
}

export {LinkedList, Node}