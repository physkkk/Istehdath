function btn(params) {
    let div=document.getElementById('cardsf')
    let p=document.createElement('div')
   
    p.id='about'
    p.innerHTML=`
    <div class="about">
    <ul dir="rtl">
    <li>جمع وتحليل المعلومات حول الدخل، النفقات، الأصول </li>
    <br>
    <li>موازنة الخطة المالية وتحليل مدى اتساقها</li>
    <br>
    <li>البحث عن التمويل الذي يمكن أن تحصل عليه الشركة</li>
    <br>
     <li>حساب وتقييم التكلفة الإجمالية لكل نوع من الموارد</li>
 </ul>
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
    <ul dir="rtl">
    <li>تحديد أنواع الموارد اللازمة لتحقيق هذه الأهداف</li>
    <br>
    <li>المساهمة بالانتاجية الإجمالية للمشروع </li>
    <br>
    <li> عملية بناء وتنظيم الهيكل مع الإستمرارية </li>
    <br>
     <li>التحليل والنظر بالوضع الحالي للقوة العاملة بالشركة </li>
 </ul>
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