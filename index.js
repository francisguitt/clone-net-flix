 document.getElementById('prevent').addEventListener('ckick',
(e)=>{e.preventDefault()})

const Email=document.getElementById('email');
const Key = document.getElementById('key');
const Btn = document.getElementById('btn-logged');

Email
.addEventListener('input',(e)=>{
 const Event_email = e
  .target.value;
  enterEmail(Event_email);
})

Key
.addEventListener('input',(e)=>{
  const Event_pass=e
 .target.value;
 const passnumber= Event_pass;
 //parseFloat(Event_pass);
 enterPassword(passnumber);
  //console.log(passnumber)
})


function enterEmail(data){
  const storage = window
  .localStorage
  .setItem('d',JSON
  .stringify(data))
}

function enterPassword(safety){
const storageSafety = window
  .localStorage
  .setItem('s', safety) 
}

Btn
.addEventListener('click',
  ({Event_email
  ,passnumber
  ,storage}
  )=>{
  if(Event_email == "" || passnumber !== true){
    Email.style
    .border="1px solid #ff0000"
    Key.style
    .border="1px solid #ff0000"
  }}) 
  
  
   function resetPage(){
     setTimeout(()=>{
     window
   .localStorage.removeItem('d');
     window
   .localStorage.removeItem('s');
     },2000)
   }
   setTimeout(()=>{
     resetPage();
   },20000)
   //resetPage()

   
   const enter=()=>{
   alert('Deseja Contratar um de nossos planos ? ')
  
}
