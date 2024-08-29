let h1 = document.querySelector('.quote')
let btn = document.querySelector('button')
btn.addEventListener('click',reload)
function reload(){
    window.location.reload()
} 
let url = `https://zenquotes.io/api/quotes`
 fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    // img.src=data.images[0].url
   h1.textContent = data[0].q   
})
.catch((err)=>{
    console.log(err)
})