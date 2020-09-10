const saludar = (nombre) => 'Hola ' + nombre ;

// Mostrar el resultado por consola
saludar('Alejandro');

function multiplicar(a, b){
    const resultado = a + b;
    return resultado;
}

// Mostrar el resultado por consola
multiplicar(3, 15)

function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
}

// Mostrar el resultado por consola.
crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

function devolverFecha(){
    return 'Hoy es ';
}

// Mostrar el resultado por consola.
devolverFecha('10','09','2020');
