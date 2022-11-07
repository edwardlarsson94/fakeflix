import {createrOfElements,renderElement} from './library.js';

let header = createrOfElements('header',{});
let img = createrOfElements('img',{src:'./images/logo.png',alt:'.Logo Libreria JS'});

renderElement(document.getElementById('root'),header);
renderElement(header,img);