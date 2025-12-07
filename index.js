let progressCircle = document.querySelector('.progressBarImageCircleFront');
let circleRadius
let circleLangth
let progressBarValue = document.querySelector('.progressBarValue');
let animationController = document.querySelector('.animationController');
let circleImage = document.querySelector('.progressBarImage');
let hideController = document.querySelector('.hideController');
let visabilityState
let controller

progressBarValue.addEventListener('change', ()=> {onLoadProgress(progressBarValue.value)})

animationController.addEventListener('change', ()=> {
    controller = onTurnCheckedToBool(animationController)
    
    onAnimate(controller, progressCircle)
})

hideController.addEventListener('change', ()=> {
    visabilityState = onTurnCheckedToBool(hideController)
    onChangeElementVisability(circleImage, visabilityState)
})

window.addEventListener('resize', ()=>{
    onCalculateCircleSize()
    onLoadProgress(progressBarValue.value)
})


onCalculateCircleSize()

onLoadProgress(progressBarValue.value)
controller = onTurnCheckedToBool(animationController)
onAnimate(controller, progressCircle)
visabilityState = onTurnCheckedToBool(hideController)

onChangeElementVisability(circleImage, visabilityState)


function onCalculateCircleSize(){
    circleRadius = progressCircle.r.baseVal.value
    
        if(window.innerHeight < window.innerWidth){
            circleRadius/=2
        }
    
    circleLangth = 2 * Math.PI * circleRadius
    progressCircle.style.strokeDasharray = `${circleLangth} ${circleLangth}`;
    progressCircle.style.strokeDashoffset = circleLangth;
    
}
function onTurnCheckedToBool(checkboxField){
    let controller
    if(checkboxField.checked){
        controller = true
    }
    else {
        controller = false
    }
    return controller
}

function onLoadProgress(percent){
    let offset = 0
    progressBarValue.value = ""
    if(percent <= 0)
    {
        offset = circleLangth
        progressBarValue.value = 0
    }
    else if (percent < 100){
        offset = circleLangth*(1-(percent/100))
        progressBarValue.value = percent
    }
    else{
        offset = circleLangth*(1-(99.9/100))
        progressBarValue.value = 100
    }
    
    progressCircle.style.strokeDashoffset = offset;
}

function onAnimate(animationController, progressCircle){
    if (animationController)
    {
        if(!progressCircle.classList.contains("animated")){
            progressCircle.classList.add("animated")
        }
        progressCircle.style.animationPlayState = 'running';
    }
    else{
        progressCircle.style.animationPlayState = 'paused';
        if(progressCircle.classList.contains("animated")){
            progressCircle.classList.remove("animated")
        }
    }
}

function onChangeElementVisability(element, visabilityState){
    if (!visabilityState){
        element.style.visibility = 'visible'
    }
    else{
        element.style.visibility = 'hidden'
    }
}
