class BST {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

//build adding functionality
BST.prototype.addNode = function(value) {
    if (value < this.value) {
        this.left ? this.left.addNode(value) : this.left = new BST(value);
    }
    else if (value > this.value) {
        this.right ? this.right.addNode(value) : this.right = new BST(value)
    }
}

export default BST;