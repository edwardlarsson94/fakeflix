// Regla JSX 1: Solo se puede renderizar o almacenar un elemento
// Regla JSX 2: Hacer uso de fragmentos
// Regla JSX 3: Toda etiqueta debe cerrarse
// Regla JSX 4: Todo atributo compuesto se convierte en un camelCase

const Logo = ()=>{
    return (
        <>
            <h1>Hola</h1>
            <img src="./images/logo.png" 
                alt="Logo Libreria JS"
                className="logo"></img>
        </>
    )
}