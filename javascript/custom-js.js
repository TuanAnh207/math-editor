/**
 * The following functions where copied from http://stackoverflow.com/questions/4823691/insert-an-html-element-in-a-contenteditable-element
 * Combined they insert a span, or overwrite a selection with a span
 * An example in js fiddle can be viewed at http://jsfiddle.net/timdown/XGSyn/
 */

function isOrContainsNode(ancestor, descendant) {
    var node = descendant;
    while (node) {
        if (node === ancestor) return true;
        node = node.parentNode;
    }
    return false;
}

function insertNodeOverSelection(node, containerNode) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            if (isOrContainsNode(containerNode, range.commonAncestorContainer)) {
                range.deleteContents();
                range.insertNode(node);
            } else {
                containerNode.appendChild(node);
            }
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        if (isOrContainsNode(containerNode, range.parentElement())) {
            html = (node.nodeType == 3) ? node.data : node.outerHTML;
            range.pasteHTML(html);
        } else {
            containerNode.appendChild(node);
        }
    }
}