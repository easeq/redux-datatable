const isDescendant = (parent, child) => {
    var node = child.parentNode;
    while (node) {
        if (node === parent) {
            return true;
        }

        node = node.parentNode;
    }

    return false;
}

export default isDescendant;
