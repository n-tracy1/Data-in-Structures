class BST {
    constructor(value, top = 200, left = 950) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.style = {
            top: top,
            left: left
        };
    }
}

//adding functionality
BST.prototype.addNode = function(value, top = 200, left = 950) {
    top += 50;
    if (value < this.value) {
        left -= 50;
        this.left ? this.left.addNode(value, top, left) : this.left = new BST(value, top + 'px', left + 'px');
    }
    else if (value > this.value) {
        left += 50;
        this.right ? this.right.addNode(value, top, left) : this.right = new BST(value, top + 'px', left + 'px');
    }
}

//delete functionality

//find Value functionality

//depth first pre functionality

//depth first in functionality

//depth first post functionality

//breadth first functionality

export default BST;