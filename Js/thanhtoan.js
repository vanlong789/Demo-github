var giamGia = document.querySelector('.js-pays__login');
var onClik = document.querySelector('.js-pays__span');
onClik.addEventListener('click',function(){
    giamGia.classList.toggle('open');
})


/*Thanh toán qr*/
var paySubmit = document.querySelector('.js-pay-submit');
var modalNumber = document.querySelector('.js-modal-number');
var modalSucsess =document.querySelector('.js-modal-sucsess');
//var modalPays = document.querySelector('.js-modal-pays');
var modalClose = document.querySelector('.js-modal-close');
var modalTurnOn = document.querySelector('.js-modal-turnon');


//thanh toán
// modalPays.addEventListener('click',function(){

// })
//hiển thị thanh thanh toán
paySubmit.addEventListener('click',function(){
    //hiển thị qr để thanh toán
    modalTurnOn.classList.add('open');
    //Thông báo chờ thanh toán
    modalNumber.innerHTML = "Đang chờ thanh toán...";
    //Sau khi thanh toán thì báo thành công
    setTimeout(function(){
        modalNumber.innerHTML = "";
        modalSucsess.innerHTML= "Quá trình thanh toán thành công. Cảm ơn bạn";
        modalClose.classList.add('open');
    },10000)
})
//đóng thanh toán
modalClose.addEventListener('click',function(){
    modalTurnOn.classList.remove('open');
    //windown.location ='./';
})