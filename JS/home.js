//who are we section 
let us=document.getElementById('us')
us.innerText='شركة استحداث  لإدارة  وتخطيط المشاريع متخصصة في تزويد عملائنا بجودة عالية من الحلول المبتكرة مع مجموعة واسعة من الخدمات من قبل فريقنا المحترف والخبير. نحن نسعى جاهدين لنكون تعزيزًا وتطويرًا ونجاحًا لمستثمرينا وأصحاب المشاريع.'


let points=document.getElementById('points')
let point=document.createElement('p')
let point2=document.createElement('p')
let point3=document.createElement('p')
point.innerText='الإبداع'
point2.innerText='المواكبة'
point3.innerText='التميز'
points.appendChild(point)
points.appendChild(point2)
points.appendChild(point3)



point.id='point'
point2.id='point'
point3.id='point'


let about=document.getElementById('about')
let about2=document.getElementById('about2')
let about3=document.getElementById('about3')


let all=document.getElementById('all')
point.addEventListener('click', function () {
  all.removeChild(about2)
  let p=document.createElement('p')
  p.innerText="لان الابداع عنواننا ، نستلهم أفكارنا من بيئتنا المحلية لننفذها بمقاييس عالمية "
  about.appendChild(p)

point.addEventListener('click', function() {

 all.removeChild(about)
  
})

});


point2.addEventListener('click',function () {
  
  let p=document.createElement('p')
  p.innerText="نتطور لنطوّر ونستمر في عمليتنا التطويرية لنرتقي بعملائنا"
  about2.appendChild(p)

 point2.addEventListener('click',function () {
    all.removeChild(about2)
      console.log('removed');
     })

});





point3.addEventListener('click',function () {


    let p=document.createElement('p')
    p.innerText="وسمنا الي نتميز فيه بمشاريعنا"
    about3.appendChild(p)
   
 point2.addEventListener('click',function () {
  all.removeChild(about3)
    console.log('removed');
   })
  });
  

  // numbers function


let num=document.getElementById('num')

let ex=document.createElement('p')
num.appendChild(ex)
ex.innerText='مشروع تم العمل عليه'
ex.id="ex"

//number increase
let number1=document.createElement('h4')
let x=30
number1.innerText="+"+x;
num.appendChild(number1)

number1.addEventListener('mousemove',function count() {
  number1.innerText="+"+x++;
  if (x>=85) 
    number1.innerText="+"+89;
    // num.removeChild(number1)
    // console.log('removeddd');
  })
 
let years=document.createElement('p')
years.innerText='سنوات الخبرة'
years.id="ex"
num.appendChild(years)


let number2=document.createElement('h4')
let y="+"+1
num.appendChild(number2)

number2.innerText=y;
number2.addEventListener('mousemove',function name(params) {
  number2.innerText="+"+y++
  if (y>=11) {
    number2.innerText="+"+11
  }
})
  
  
let market=document.createElement('p')
market.innerText='حملة تسويقية ناجحة'
market.id='ex'
num.appendChild(market)


let number3=document.createElement('h4')
let z="+"+60
number3.innerText=z
num.appendChild(number3)

number3.addEventListener('mousemove',function name(params) {
  number3.innerText="+"+z++
  if (z>=114) {
    number3.innerText="+"+114
  }

  
})