{/* <header>
    <img src="./images/logo.png" alt="Logo Libreria JS">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Tvseries">TV Series</a></li>
            <li><a href="/Movies">Movies</a></li>
        </ul>
    </nav>
</header>  */}


// let header = document.createElement('header');
// let root = document.getElementById('root');
// let img = document.createElement('img');
// root.appendChild(header);
// header.appendChild(img);
// img.setAttribute('src', './images/logo.png');
// img.setAttribute('alt', '.Logo Libreria JS');


function createrOfElements(typeElemen,attr){
    let elem = document.createElement(typeElemen);
    console.log(typeElemen,attr);
    if(attr.src && attr.alt){
        console.log('entro');
        elem.setAttribute('src',attr.src);
        elem.setAttribute('alt',attr.alt);
    }
    return elem;
}

function renderElement(elem,child){
    elem.appendChild(child);
}

let header = createrOfElements('header',{});
let img = createrOfElements('img',{src:'./images/logo.png',alt:'.Logo Libreria JS'});

renderElement(document.getElementById('root'),header);
renderElement(header,img);


// ACTIVIDAD: 
// COMPLETAR LA LISTA QUE VA DENTRO DEL HEADER CON LA LIBRERIA
{/* <header>
    <img src="./images/logo.png" alt="Logo Libreria JS">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Tvseries">TV Series</a></li>
            <li><a href="/Movies">Movies</a></li>
        </ul>
    </nav>
</header>  */}