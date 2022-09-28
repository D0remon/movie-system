// let box=document.querySelector('.box');
let price=document.getElementById('price');
let seat_1=document.getElementById('seat-1');
let total_price=0;
seat_1.addEventListener('click',()=>{

  if(seat_1.style.color!='tomato'){
     seat_1.style.color='tomato'
     total_price+=25;
     price.innerText=total_price
  }
  else{
    seat_1.style.color='rgba(216, 228, 238, 0.879)'
    total_price-=25;
    price.innerText=total_price
  }

})  
let seat_5=document.getElementById('seat-5');
seat_5.addEventListener('click',()=>{

  if(seat_5.style.color!='tomato'){
     seat_5.style.color='tomato'
     total_price+=25;
     price.innerText=total_price
    }
    else{
      seat_5.style.color='rgba(216, 228, 238, 0.879)'
      total_price-=25;
      price.innerText=total_price
    }
  })
  let seat_3=document.getElementById('seat-3');
seat_3.addEventListener('click',()=>{

  if(seat_3.style.color!='tomato'){
     seat_3.style.color='tomato'
     total_price+=25;
     price.innerText=total_price
    }
    else{
      seat_3.style.color='rgba(216, 228, 238, 0.879)'
      total_price-=25;
      price.innerText=total_price
    }
  })
  let seat_6=document.getElementById('seat-6');
  seat_6.addEventListener('click',()=>{
  
    if(seat_6.style.color!='tomato'){
       seat_6.style.color='tomato'
       total_price+=25;
       price.innerText=total_price
      }
      else{
        seat_6.style.color='rgba(216, 228, 238, 0.879)'
        total_price-=25;
        price.innerText=total_price
      }
    })

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
  if(total_price==0){
    swal("Please Book your seat first!", {
      icon: "warning",
    })
  }
  else{
    swal({
      title: "Are you sure?",
      text: "Once Booked, you will not be able to cancel!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        if(seat_1.style.color=='tomato'){
          localStorage.setItem('seat1',true)
        }
        if(seat_3.style.color=='tomato'){
          localStorage.setItem('seat3',true)
        }
        if(seat_5.style.color=='tomato'){
          localStorage.setItem('seat5',true)
        }
        if(seat_6.style.color=='tomato'){
          localStorage.setItem('seat6',true)
        }
        swal("Yayy! Your Booking are confirmed!", {
          icon: "success",
        }).then(()=>{
          window.location.href="/"
        })
      } else {
        swal("Your Bookings are canceled!");
      }
    });

  }

})
if(localStorage.getItem('seat1')){
  seat_1.style.color='black'
  seat_1.style.pointerEvents='none'
}
if(localStorage.getItem('seat3')){
  seat_3.style.color='black'
  seat_3.style.pointerEvents='none'
}
if(localStorage.getItem('seat5')){
  seat_5.style.color='black'
  seat_5.style.pointerEvents='none'
}
if(localStorage.getItem('seat6')){
  seat_6.style.color='black'
  seat_6.style.pointerEvents='none'
}





// let price=document.getElementById('price');
// price.innerHTML=`Your total is: ${seat_1*2}`;

 
  