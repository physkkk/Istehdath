let b=document.getElementById('sub')
b.addEventListener('click',function (params) {
 alert('تم الإرسال بنجاح' )
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'تم الإرسال بنجاح',
        showConfirmButton: false,
        timer: 1500
      })
})