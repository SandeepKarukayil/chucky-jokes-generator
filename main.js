let h1 = document.querySelector('.quote')
 let img = document.querySelector('img')
let btn = document.querySelector('button')
btn.addEventListener('click',reload)
function reload(){
    window.location.reload()
} 
let url = `https://api.chucknorris.io/jokes/random`
 fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.value)
    img.src=data.icon_url
   h1.textContent = data.value   
})
.catch((err)=>{
    console.log(err)
})