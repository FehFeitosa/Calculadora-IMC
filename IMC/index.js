function calculate(){
    var heigth = document.getElementById("height").value / 100;
    var weigth = document.getElementById("weight").value;

    var imc = weigth/(heigth)**2;
    var text = ""
    if(imc < 18.5){
        text = "Você está magro"
    }else if(imc < 24.9){
        text = "Você está normal"
    }
    else if(imc < 29.9){
        text = "Você está com sobrepeso"
    }
    else if(imc < 39.9){
        text = "Você está com obesidade"
    }
    else if(imc > 39.9){
        text = "Você está com obesidade morbida"
    }
    document.getElementById("text_area").innerText = text
}