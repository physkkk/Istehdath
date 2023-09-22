function btn(params) {
    let div=document.getElementById('cardsf')
    let p=document.createElement('div')
   
    p.id='about'
    p.innerHTML=`
    <div class="about">
    <img src="" alt="">
    <p>test</p>
</div>
    `
   
   div.appendChild(p)
 
    let span= document.createElement('span')

    span.innerHTML="\u00d7";
   
   p.appendChild(span)
 
   span.id='s'

span.addEventListener('click',function() {    
div.removeChild(p)

})

}


function btn2(params) {
    // let div=document.getElementById('cardsr')
    let div=document.getElementById('cardsr')
    let p3=document.createElement('div')

    p3.innerHTML=`
    <div class="about">
    <img >
    <p>test</p>
</div>
    `
   div.appendChild(p3)

    let span= document.createElement('span')

    span.innerHTML="\u00d7";

   p3.appendChild(span)

   span.id='s'

span.addEventListener('click',function() {    
div.removeChild(p3)

})

}

function btn3(params) {
    let div=document.getElementById('cardsm')
    let p=document.createElement('div')
   
    p.id='about'
    p.innerHTML=`
    <div class="about">
    <img src="" alt="">
    <p>test</p>
</div>
    `
   
   div.appendChild(p)
 
    let span= document.createElement('span')

    span.innerHTML="\u00d7";
   
   p.appendChild(span)
 
   span.id='s'

span.addEventListener('click',function() {    
div.removeChild(p)

})

}

function btn4(params) {
    let div=document.getElementById('cardsrm')
    let p=document.createElement('div')
   
    p.id='about'
    p.innerHTML=`
    <div class="about">
    <img src="" alt="">
    <p>test</p>
</div>
    `
   
   div.appendChild(p)
 
    let span= document.createElement('span')

    span.innerHTML="\u00d7";
   
   p.appendChild(span)
 
   span.id='s'

span.addEventListener('click',function() {    
div.removeChild(p)

})

}