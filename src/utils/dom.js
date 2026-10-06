export function el(tag, className, html) {
    const node = document.createElement(tag);

    if (className) {
        node.className = className;
    }

    if (html !== undefined) {
        node.innerHTML = html;
    }

    return node;
}

export const ap = (parent, ...children) => parent.append(...children)