const button_translate = document.getElementById("translate")
const button_rotate = document.getElementById("rotate-b")
const button_scale = document.getElementById("scale")

var options = document.getElementById("options")
const reset = document.getElementById("reset")
reset.onclick = function(){
    location.reload();

}
button_translate.onclick = function(){
    var option = options.value
    translate_x(option)
    translate_y(option)

}

button_rotate.onclick = function(){
    var option = options.value;
    rotate(option);
}
button_scale.onclick = function(){
    var option = options.value;
    scale(option)

}


function translate_x(option){
    const translate_x = document.getElementById("translate-x");
    const element = document.getElementById(option)
    let element_left = parseInt(getComputedStyle(element).getPropertyValue('left'));
    let left = element_left + parseInt(translate_x.value);
    element.style.position = 'absolute';
    element.style.left = `${left}px`;

}

function translate_y(option){
    const translate_y = document.getElementById("translate-y");
    const element = document.getElementById(option)
    let element_top = parseInt(getComputedStyle(element).getPropertyValue('top'));
    let top = element_top - parseInt(translate_y.value);
    element.style.position = 'absolute';
    element.style.top = `${top}px`;

}

function scale(option){
    const scale_x = document.getElementById("scale-x");
    const scale_y = document.getElementById("scale-y");
    const element = document.getElementById(option);
    element.style.transform=`scale(${+scale_x.value},${+scale_y.value})`

}


function rotate(option){
    const rotate_ = document.getElementById("rotate");
    const element = document.getElementById(option)
    let rotate = parseInt(getComputedStyle(element).getPropertyValue('rotate'));
    rotate = (rotate + parseInt(rotate_.value)) % 360
    element.style.position = 'absolute';
    element.style.rotate = `${rotate}deg`;

}


