let progressCircle = document.querySelector('.progressBarImageCircle');
let circleRadius = progressCircle.r.baseVal.value
let circleLangth = 2 * Math.PI * circleRadius
let progressBarValue = document.querySelector('.progressBarValue');
let animationController = document.querySelector('.animationController');
let circleImage = document.querySelector('.progressBarImage');
let hideController = document.querySelector('.hideController');
let visabilityState
let controller

progressBarValue.addEventListener('change', ()=> {loadProgress(progressBarValue.value)})

animationController.addEventListener('change', ()=> {
    controller = checkedToBool(animationController)
    
    animation(controller, progressCircle)
})

hideController.addEventListener('change', ()=> {
    visabilityState = checkedToBool(hideController)
    changeElementVisability(circleImage, visabilityState)
})


progressCircle.style.strokeDasharray = `${circleLangth} ${circleLangth}`;
progressCircle.style.strokeDashoffset = circleLangth;
loadProgress(progressBarValue.value)
controller = checkedToBool(animationController)
animation(controller, progressCircle)
visabilityState = checkedToBool(hideController)

changeElementVisability(circleImage, visabilityState)

/*Checkbox to boolean type*/
function checkedToBool(checkboxField){
    let controller
    if(checkboxField.checked){
        controller = true
    }
    else {
        controller = false
    }
    return controller
}
/*Percentage of load-bar*/
function loadProgress(percent){
    let offset
    if (percent < 100)
        offset = circleLangth*(1-(percent/100))
    else{
        offset = circleLangth*(1-(99.9/100))
        progressBarValue.value = 100
    }
    progressCircle.style.strokeDashoffset = offset;
}
/*Turn on or off animation*/
function animation(animationController, progressCircle){
    if (animationController)
    {
        progressCircle.style.animationPlayState = 'running';
    }
    else{
        progressCircle.style.animationPlayState = 'paused';
    }
}
/*Show or hide chosen element*/
function changeElementVisability(element, visabilityState){
    if (!visabilityState){
        element.style.visibility = 'visible'
    }
    else{
        element.style.visibility = 'hidden'
    }
}
