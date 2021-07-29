class BST {
    constructor(value, top = 250, left = 935) {
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

//autobalancer to keep the widths manageable
BST.prototype.autoBalancer = function(currState) {
    
    const depth = this.preDFS();
    const startWidth = (2 ** depth) * 75;
    const center = currState.style.left;
    
    // NOTE: For balancing on the the screen size, can calculate positioning based on these metrics below - just need to add calculations for 50% of these 
    // Do later if I have time
    console.log('attempted window method: ', window.innerHeight, window.innerWidth);
    //

    //create a copy of previous state to modify and return - this method makes sure to grab all nested objects directly and NOT their pointers
    const modState = JSON.parse(JSON.stringify(currState));

    //copy the prototype chain onto new state so that it has access to all methods on this page
    //need to keep prototype chain for ALL nest objects - this whole thing is becoming hideous - I apologize to my future self
    function prototypeCopy(node) {
        node.__proto__ = currState.__proto__;
        if (node.left !== null) prototypeCopy(node.left);
        if (node.right !== null) prototypeCopy(node.right);
    }
    prototypeCopy(modState);

    function balance(node, width, center, currDepth = 0, direction) {
        if (currDepth === 0 && node.left !== null) {
            balance(node.left, width/2, center, currDepth + 1, 'left');
        }
        if (currDepth === 0 && node.right !== null) {
            balance(node.right, width/2, center, currDepth + 1, 'right');
        }
        else  {
            //increase the total distance between upper nodes to make space for lower nodes
            //increasing/decreasing width by one half of previous width
            if (direction === 'left') {
                node.style.left = parseInt(center) - width/2 + 'px';
            }
            else if (direction === 'right') {
                node.style.left = parseInt(center) + width/2 + 'px';
            }
            if (node.left !== null) {
                balance(node.left, width/2, node.style.left, currDepth + 1, 'left');
            }
            if (node.right !== null) {
                balance(node.right, width/2, node.style.left, currDepth + 1, 'right')
            }
        }
    }
    balance(modState, startWidth, center);
    return modState;
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

//prebuilt BST for demo purposes
BST.prototype.preBuilt = function() {
    const preNodes = [15, 5, 2, 6, 12, 20, 25, 18, 13, 11, 8, 1, 3];
    console.log('we are inside prebuilt')
    for (const el of preNodes) {
        this.addNode(el, 250);
    }
}

export default BST;