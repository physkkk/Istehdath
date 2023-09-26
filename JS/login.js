
// API data get
//reading with API





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


//     axios.get(`https://64fdc856596493f7af7e9033.mockapi.io/api/v1/users`).then((response)=>{
  
//     const api=response.data
    
    
//     let all=document.getElementById('data-list')
    
//     api.map((result)=>{
//         const row =document.createElement('tr')
//         row.innerHTML=`
        
//              <h4>${result.name}</h4>
//              <h4>${result.mail}</h4>
            
         
//                    `;
    
//         all.appendChild(row)
    
    
//     //  user=document.getElementById('n').value
//     //  email=document.getElementById('m').value
      
//     console.log(response);
//     })
//     }
//     )
    

//      const adding=()=>{
//             const title=document.getElementById('title').value
//             const image=document.getElementById('image').value
//             const option=document.getElementById('option').value
//             const data={option,title,image}

//   axios.post('https://64fdc856596493f7af7e9033.mockapi.io/api/v1/title',data)
// .then((response) => {
//     console.log('clear',data);
    
//     const api=response.data
   

// })
//         }
