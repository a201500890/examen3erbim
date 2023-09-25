alert("Cuestionario sobre el turismo en el peru");
alert("Bienvenido/a al cuestionario sobre el turismo");
nom=prompt("Ingresa tu nombre!")
res1=prompt("¿En que departamento se encuentra el lago titicaca?\nA.Tacna\nB.Puno\nC.Cusco ");
if(res1=="B"){
    res1=5
}else if(res1=="A"){
res1=0
}
else if(res1=="C"){
    res1=0
}
    else{
        alert(nom,"no es una opcion valida")
    }
res2=prompt("¿Desde que parte del peru se pueden avistar ballenas jorobadas?\nA.Lima e Ica\nB.Arequipa y tacna\nC.Piura y tumbes");
if(res2=="B"){
    res2=0
}else if(res2=="A"){
res2=0
}
else if(res2=="C"){
    res2=25
}
    else{
        alert(nom,"no es una opcion valida")
    }
res3=prompt("Plato tipico de la selva peruana\nA.Tacacho con cecina\nB.Arroz con pollo\nC.Lomo saltado");
if(res3=="B"){
    res3=0
}else if(res3=="A"){
res3=25
}
else if(res3=="C"){
    res3=0
}
    else{
        alert(nom,"no es una opcion valida")
    }

    if(res1+res2+res3==75){
      document.write("Lo has hecho bien! 100 de 100!, todas tus respuestas son correctas,",nom)
    }else if(res1+res2+res3==25){
        document.write("Vamos, intentalo una vez mas,",nom)
    }
        else{
            alert(nom,"Puedes hacerlo mejor,",nom)
        }
