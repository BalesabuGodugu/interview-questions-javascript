/*
Given a tree, write a function that prints out the nodes of the tree in level order.

tree : 
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
   
   traverse(tree) ->  1 2 3 4 5 6 7 
*/

class Node {
	constructor (value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function traverse (tree) {
  if (!tree) return;
  
  const quque = [];
  quque.push(tree);
  
  while (quque.length > 0) {
    let curr = quque.shift();
    console.log(curr.value);
    
    if (curr.left !== null) quque.push(curr.left);
    if (curr.right !== null) quque.push(curr.right);
  }
}

let left = new Node(2);
left.left = new Node(4);
left.right = new Node(5);

let right = new Node(3);
right.left = new Node(6);
right.right = new Node(7);

let tree = new Node(1);
tree.left = left;
tree.right = right;

traverse(tree);