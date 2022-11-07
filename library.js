export function createrOfElements(typeElemen,attr,childs){
    let elem = document.createElement(typeElemen);
    let keysElements = Object.keys(attr);
        keysElements.map(keys=>elem.setAttribute(keys,attr[keys]));
        childs.map(child=>renderElement(elem,child));
    return elem;
}

export function renderElement(elem,child){
    elem.appendChild(child);
}