class BST {
    constructor(value, top = 250, left = 950) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.depth = 0;
        this.style = {
            top: top,
            left: left
        };
    }
}

BST.prototype.autoBalancer = function() {
    //could do a depth first search
    //then balance 
}

//adding functionality --> perhaps change the new node position values to be based on the most recent parent nodes + 50?
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
BST.prototype.preDFS = function() {
    // function firstPre(node) {

    // }
}

//depth first in functionality

//depth first post functionality

//breadth first functionality

export default BST;