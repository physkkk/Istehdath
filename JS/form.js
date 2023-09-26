let b=document.getElementById('b')
let namee=document.getElementById('name')

b.addEventListener('click',function name(params) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'تم الإرسال بنجاح ' + namee.value,
        showConfirmButton: false,
        timer: 1500
     
    })
    console.log(namee);
})

//API

//creating function
const adding=()=>{
    const name=document.getElementById('name').value
    const mail=document.getElementById('mail').value
     
    const data={mail,name}
    // console.log(data);

axios.post(`https://64fdc856596493f7af7e9033.mockapi.io/api/v1/users`,data)
.then((response) => {
console.log(data);
console.log('clear',data);

const api=response.data
})

}

// reading and bringing data
    axios.get(`https://64fdc856596493f7af7e9033.mockapi.io/api/v1/users`).then((response)=>{
  
    const api=response.data
    
    
    let all=document.getElementById('data-list')
    
    api.map((result)=>{
        const row =document.createElement('div')
        row.innerHTML=`
        
             <h4> مرحبا ${result.name} </h4>
            
         
                   `;
    
        all.appendChild(row)
      
    console.log(response);
    })
    }
    )
    