// console.log('test');

//  namee = document.getElementById('name').value
let b=document.getElementById('but')
console.log( "edddd");
b.addEventListener('click', function greet() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 8000
    })
})
