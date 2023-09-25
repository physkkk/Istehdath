// console.log('test');

let namee = document.getElementById('name').value
let b = document.getElementById('but')
console.log(b, "edddd");
b.addEventListener('click', function greet() {
    all();
})

const all = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}