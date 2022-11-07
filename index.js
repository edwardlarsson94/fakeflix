import {createrOfElements,renderElement} from './library.js';

let img = createrOfElements('img',{
    src:'./images/logo.png',
    alt:'.Logo Libreria JS'
},[]);
let a = createrOfElements('a',{
    href: "/"
},[]);
let li = createrOfElements('li',{},[a]);
let ul = createrOfElements('ul',{},[li]);
let nav = createrOfElements('nav',{},[ul]);
let header = createrOfElements('header',{},[img,nav]);

renderElement(document.getElementById('root'),header);











/* 
Finalizar la estructura con una buena optimazcion de la libreria
<header>
    <img src="./images/logo.png" alt="Logo Libreria JS">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Tvseries">TV Series</a></li>
            <li><a href="/Movies">Movies</a></li>
        </ul>
    </nav>
</header>  */