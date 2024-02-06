// POPUP PENCERELERI 

const youtube=document.querySelector(".youtube")
const youtube2=document.querySelector(".youtube2")
const youtube3=document.querySelector(".youtube3")
const youtube4=document.querySelector(".youtube4")
const youtube5=document.querySelector(".youtube5")

const çarpı=document.querySelector("#çarpı")
const çarpı2=document.querySelector("#çarpı2")
const çarpı3=document.querySelector("#çarpı3")
const çarpı4=document.querySelector("#çarpı4")
const çarpı5=document.querySelector("#çarpı5")


const iki=document.querySelector("#iki")
const üç=document.querySelector("#üç")
const dört=document.querySelector("#dört")
const beş=document.querySelector("#beş")
const altı=document.querySelector("#altı")

const video=document.querySelector("#video")
const video2=document.querySelector("#video2")
const video3=document.querySelector("#video3")
const video4=document.querySelector("#video4")
const video5=document.querySelector("#video5")

// const embed=document.querySelector("video")

// iki.addEventListener("click",()=>{
//     youtube.style.margin="auto auto"
//     youtube.style.padding="auto auto"
//     youtube.style.backgroundColor="black"
//     youtube.style.color="white"    
//     youtube.showModal()  
// })

iki.addEventListener("click",()=>{
    const time=()=>{
        setTimeout(()=>{
            youtube.style.margin="auto auto"
            youtube.style.padding="auto auto"
            youtube.style.backgroundColor="#151515"
            youtube.style.color="white"
            youtube.style.width="700px"    
            youtube.style.height="500px"
            youtube.style.border="0.3px solid black"    
            youtube.showModal()  
        },300)
    }
    time()
})

çarpı.addEventListener("click",()=>{
    youtube.removeChild(video)
    youtube.close()
    
})



üç.addEventListener("click",()=>{
    youtube2.style.margin="auto auto"
    youtube2.style.padding="auto auto"
    youtube2.style.backgroundColor="#151515"
    youtube2.style.color="white"  
    youtube2.style.width="700px"    
    youtube2.style.height="500px"
    youtube2.style.border="0.3px solid black"
    youtube2.showModal()  
})

çarpı2.addEventListener("click",()=>{
    youtube2.removeChild(video2)
    youtube2.close()
    
})



dört.addEventListener("click",()=>{
    youtube3.style.margin="auto auto"
    youtube3.style.padding="auto auto"
    youtube3.style.backgroundColor="#151515"
    youtube3.style.color="white" 
    youtube3.style.width="700px"    
    youtube3.style.height="500px"
    youtube3.style.border="0.3px solid black"
    youtube3.showModal()  
})

çarpı3.addEventListener("click",()=>{
    youtube3.removeChild(video3)
    youtube3.close()
    
})



beş.addEventListener("click",()=>{
    youtube4.style.margin="auto auto"
    youtube4.style.padding="auto auto"
    youtube4.style.backgroundColor="#151515"
    youtube4.style.color="white"   
    youtube4.style.width="700px"    
    youtube4.style.height="500px"
    youtube4.style.border="0.3px solid black"
    youtube4.showModal()  
})

çarpı4.addEventListener("click",()=>{
    youtube4.removeChild(video4)
    youtube4.close()
    
})



altı.addEventListener("click",()=>{
    youtube5.style.margin="auto auto"
    youtube5.style.padding="auto auto"
    youtube5.style.backgroundColor="#151515"
    youtube5.style.color="white" 
    youtube5.style.width="700px"    
    youtube5.style.height="500px"
    youtube5.style.border="0.3px solid black"
    youtube5.showModal()  
})

çarpı5.addEventListener("click",()=>{
    youtube5.removeChild(video5)
    youtube5.close()
    
})







// SEARCH POPUP MODELI{

    const search=document.querySelector("#search")
    const arama=document.querySelector(".arama")

    search.addEventListener("click",()=>{
        arama.style.margin="auto auto"
        arama.style.padding="auto auto"
        arama.style.backgroundColor="black"
        arama.style.color="white"
        arama.style.width="540px"    
        arama.style.height="50px"
        arama.style.border="0px solid black"
        arama.style.borderRadius="15px"
        arama.showModal()

    })


 //İLK POPUP 
 
 const ilkpopup=document.querySelector(".ilk-popup")
 const şubat=document.querySelector("#şubat")

  window.onload=()=>{
    ilkpopup.style.margin="auto auto"
    ilkpopup.style.padding="auto auto"
    ilkpopup.style.backgroundColor="black"
    ilkpopup.style.color="white"
    ilkpopup.style.width="542px"    
    ilkpopup.style.height="670px"
    ilkpopup.style.border="0px solid black"
    ilkpopup.style.borderRadius="15px"
    ilkpopup.showModal()
    
  }
 
  şubat.addEventListener("click",()=>{
    ilkpopup.close()
  })


