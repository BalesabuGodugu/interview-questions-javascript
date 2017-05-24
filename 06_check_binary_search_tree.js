// always check values equal to the parent should go left or right

class Node {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// o (n)
function isBTS(n) {

	var isBSTHelper = function (n, min, max) {
		if (!n) return true;
		if (n.value < min || n.value > max) return false;
		return isBSTHelper(n.left, min, n.value) && isBSTHelper(n.right, n.value + 1, max); // n.value + 1 we dont want it to be equal
	}

	return isBSTHelper(n, Number.MAX_VALUE, Number.MIN_VALUE);
}

function dfs(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

// bfs
function inorder(node){
   if(node){
      inorder(node.left);
      console.log(node.value);
      inorder(node.right);
   }
}

function postorder(node){
   if(node){
      inorder(node.left);
      inorder(node.right);
      console.log(node.value);
   }
}

let left = new Node(3, null, null);
let right = new Node(6, null, null);
let tree = new Node(5, left, right);

console.log(isBTS(tree));

inorder(tree);
//postorder(tree);
