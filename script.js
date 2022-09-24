// let box=document.querySelector('.box');
let seat_1=document.getElementById('seat-1');
// seat_1=20;
seat_1.addEventListener('click',()=>{

  if(seat_1.style.color!='tomato'){
     seat_1.style.color='tomato'
  }
  else{
    seat_1.style.color='rgba(216, 228, 238, 0.879)'
  }

})  
let seat_5=document.getElementById('seat-5');
seat_5.addEventListener('click',()=>{

  if(seat_5.style.color!='tomato'){
     seat_5.style.color='tomato'
    }
    else{
      seat_5.style.color='rgba(216, 228, 238, 0.879)'
    }
  })
  let seat_3=document.getElementById('seat-3');
seat_3.addEventListener('click',()=>{

  if(seat_3.style.color!='tomato'){
     seat_3.style.color='tomato'
    }
    else{
      seat_3.style.color='rgba(216, 228, 238, 0.879)'
    }
  })
  let seat_6=document.getElementById('seat-6');
  seat_6.addEventListener('click',()=>{
  
    if(seat_6.style.color!='tomato'){
       seat_6.style.color='tomato'
      }
      else{
        seat_6.style.color='rgba(216, 228, 238, 0.879)'
      }
    })

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
  swal({
    title: "Are you sure?",
    text: "Once Booked, you will not be able to cancel!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Yayy! Your Booking are confirmed!", {
        icon: "success",
      });
    } else {
      swal("Your Bookings are canceled!");
    }
  });

})




// let price=document.getElementById('price');
// price.innerHTML=`Your total is: ${seat_1*2}`;

 
  