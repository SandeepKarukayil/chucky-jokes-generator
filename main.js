let h1 = document.querySelector('.quote')
 
let btn = document.querySelector('button')
btn.addEventListener('click',reload)
function reload(){
    window.location.reload()
} 
let url = `https://api.kanye.rest`
 fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
 h1.textContent = data.quote   
})
.catch((err)=>{
    console.log(err)
})