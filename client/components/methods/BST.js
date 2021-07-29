class BST {
    constructor(value, top = 250, left = 950) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.depth = 0;
        this.style = {
            top: top,
            left: left,
        };
    }
}

BST.prototype.autoBalancer = function() {
    //could do a depth first search
    //then balance 
    const depth = this.preDFS();
    console.log(depth);
    const startWidth = (2 ** depth) * 75;
    function balance(node, width, currDepth = 0, direction) {
        if (currDepth === 0 && node.left !== null) {
            balance(node.left, width/2, currDepth + 1, 'left');
        }
        if (currDepth === 0 && node.right !== null) {
            balance(node.right, width/2, currDepth + 1, 'right');
        }
        else  {
            //increase the total distance between upper nodes to make space for lower nodes
            //increasing/decreasing width by one half of previous width

            //SOME ISSUE HERE ABOUT READ ONLY PROPERTY OF LEFT
            console.log(node.style.left, typeof node.style.left);
            console.log(typeof direction, direction);
            if (direction === 'left') {
                node.style.left = node.style.left - width/2;
            }
            else if (direction === 'right') {
                // console.log('we have changed the rights distance')
                node.style.left = parseInt(node.style.left) + width/2;
            }
            console.log(node.left);
            if (node.left !== null) {
                console.log('is left read only?')
                balance(node.left, width/2, currDepth + 1, 'left');
            }
            if (node.right !== null) {
                console.log('the issue is in here')
                balance(node.right, width/2, currDepth + 1, 'right')
            }
            // else return;
        }
    }
    balance(this, startWidth);
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
    function firstPre(node, depth = 0) {
        let rightDepth = depth;
        let leftDepth = depth;
        if (node.left !== null) {
            leftDepth = Math.max(firstPre(node.left, depth + 1));
        }
        if (node.right !== null) {
            rightDepth = Math.max(firstPre(node.right, depth + 1));
        }
        return Math.max(leftDepth, rightDepth);
    }
    return firstPre(this);
}

//depth first in functionality

//depth first post functionality

//breadth first functionality

export default BST;