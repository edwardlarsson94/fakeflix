export function createrOfElements(typeElemen,attr){
    let elem = document.createElement(typeElemen);
    if(attr.src && attr.alt){
        elem.setAttribute('src',attr.src);
        elem.setAttribute('alt',attr.alt);
    }
    return elem;
}

export function renderElement(elem,child){
    elem.appendChild(child);
}