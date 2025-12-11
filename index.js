const progressCircle = document.querySelector('.progressBarImageCircleFront');
let circleRadius
let circleLangth
const progressBarValue = document.querySelector('.progressBarValue');
const animationController = document.querySelector('.animationController');
const circleImage = document.querySelector('.progressBarImage');
const hideController = document.querySelector('.hideController');
let visabilityState
let controller

progressBarValue.addEventListener('change', ()=> {onLoadProgress(progressBarValue.value)})

animationController.addEventListener('change', ()=> {
    controller = animationController.checked
    
    onAnimate(controller, progressCircle)
})

hideController.addEventListener('change', ()=> {
    visabilityState = hideController.checked
    onChangeElementVisability(circleImage, visabilityState)
})

window.addEventListener('resize', ()=>{
    onCalculateCircleSize()
    onLoadProgress(progressBarValue.value)
})


onCalculateCircleSize()

onLoadProgress(progressBarValue.value)
controller = animationController.checked
onAnimate(controller, progressCircle)
visabilityState = hideController.checked

onChangeElementVisability(circleImage, visabilityState)


function onCalculateCircleSize(){
    
    circleRadius = progressCircle.r.baseVal.value
    
    
    circleLangth = 2 * Math.PI * circleRadius

    
    
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
    progressCircle.style.strokeDasharray = `${circleLangth-offset} ${offset}`;
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
