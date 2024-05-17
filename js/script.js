fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    let cats=data
    const img1= document.getElementById("img1")
    const img2= document.getElementById("img2")
    const img3= document.getElementById("img3")
    const img4= document.getElementById("img4")
    const img5= document.getElementById("img5")
    const img6= document.getElementById("img6")
    const img7= document.getElementById("img7")
    const img8= document.getElementById("img8")
    const img9= document.getElementById("img9")
    const img10= document.getElementById("img10")
    img1.src=cats[0].url
    img1.alt=cats[0].id
    img2.src=cats[1].url
    img2.alt=cats[1].id
    img3.src=cats[2].url
    img3.alt=cats[2].id
    img4.src=cats[3].url
    img4.alt=cats[3].id
    img5.src=cats[4].url
    img5.alt=cats[4].id
    img6.src=cats[5].url
    img6.alt=cats[5].id
    img7.src=cats[6].url
    img7.alt=cats[6].id
    img8.src=cats[7].url
    img8.alt=cats[7].id
    img9.src=cats[8].url
    img9.alt=cats[8].id
    img10.src=cats[9].url
    img10.alt=cats[9].id
})
.catch((err)=>console.error(err))


function getCatInfo(param){
    if(param=="info1"){
        const id= document.getElementById("img1").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    } 
    
    
    
    else if(param=="info2"){
        const id= document.getElementById("img2").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info3"){
        const id= document.getElementById("img3").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info4"){
        const id= document.getElementById("img4").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info5"){
        const id= document.getElementById("img5").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info6"){
        const id= document.getElementById("img6").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info7"){
        const id= document.getElementById("img7").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info8"){
        const id= document.getElementById("img8").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else if(param=="info9"){
        const id= document.getElementById("img9").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
    else {
        const id= document.getElementById("img10").alt
        const URL="https://api.thecatapi.com/v1/images/"+id
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const name=document.getElementById("name")
        const description=document.getElementById("desc")
        if(data.breeds){
            name.innerText='Name: '+data.breeds[0].name
            description.innerText='Description: '+data.breeds[0].description
        }
        else{
            if(data.categories){
                name.innerText='Name: '+data.categories[0].name
                description.innerText='Description: '+"This is a cat"
            }
            else{
                name.innerText='Name: '+"cat"
                description.innerText='Description: '+"This is a cat"
            }
           
        }
            
        var myModal = new bootstrap.Modal(document.getElementById('toggleMyModal'), {
            keyboard: false
          })
          
        var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
    })
    }
}