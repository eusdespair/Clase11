//Creacion del Perfil 


let studentName = 'Elizabeth';
let studentAge = 19;
let isEnrolled = 'true';
switch (isEnrolled) {
    case 'true':
        //Codigo a ejecutar
        console.log('El alumno esta inscrito');
        break;
    default:
        console.log('Lo sentimos, el alumno no esta inscrito ');
        break; 
}

//CALIFICACIONES 

let gradeMath = 8.0;
let gradeScience = 7.5;
let gradeLanguage = 9.0;

//ASISTENCIA 
let totalClasses = 30;
let attendedClasses =28; 

//Calculando Estadisticas:
averageGrade= (gradeMath + gradeScience + gradeLanguage)/3;
attendancePercentage= (attendedClasses * 100)/totalClasses;

//MOSTRAR INFORMACION

console.log('Informacion del estudiante: ');
console.log('Nombre del esudiante:  ' + studentName);
console.log('Estatus de Inscripcion:  ' + isEnrolled);


console.log('Calificacion de Matematicas:  ' + gradeMath);
console.log('Calificacion de Ciencias:  ' + gradeScience);
console.log('Calificacion de Lenguaje:  ' + gradeLanguage);
console.log('Promedio de Calificaciones:  ' + averageGrade);

console.log('Total de Clases:  ' + totalClasses);
console.log('Clases a las que asisitio el alumno:  ' + attendedClasses);
console.log('Porcentaje de asistencias:  ' + attendancePercentage + '%');


/*
let isEnrolled = true;
if (isEnrolled = true){
    console.log("El alumno esta inscrito");
}
else{
    console.log("El alumno no esta inscrito");
}
*/

//  node Act_Pt2.js