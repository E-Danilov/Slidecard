const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons-container")




const containerSrc_info = [

    {title:"HTML", version:"Version: 5B",info:"Limbaj de marcare hipertext", src_img:"img/iconHTML.png",src_btn:'img/HTML_icon.png',},

    {title:"CSS", version:"Version: 22.00B",info:"Linbaj de stil în cascadă" , src_img:"img/iconCSS.png",src_btn:'img/CSS_icon.png',},

    {title:"JavaScript", version:"Version: 19.00B",info:"Linbaj de programare" , src_img:"img/iconJS.png" ,src_btn:'img/JS_icon.png',},
    

]
containerSrc_info.forEach(element => {
    if (element.info.includes("hipertext")) {
        console.log(element.info);
        
    }
})

containerSrc_info.forEach(element => {
    const img = document.createElement("img");
    img.className = "btn"
    img.src = element.src_btn;
    buttonsContainer.append(img)
    
}) 


const footerDecoration = document.createElement("div")
footerDecoration.className = "footer_cont_decoration";
container.append(footerDecoration)

containerSrc_info.forEach(item => {
    const divContainer =document.createElement("div")
    const img = document.createElement("img");
    img.className = "img"
    img.src = item.src_img;
    const longLine = document.createElement("div")
    longLine.className = "text_decoration long-line";
    longLine.innerHTML = item.title
    const shortLine = document.createElement("div")
    shortLine.className = "text_decoration short-line";
    shortLine.innerHTML = item.version
    const longLine1 = document.createElement("div")
    longLine1.className = "text_decoration long-line";
    longLine1.innerHTML = item.info
    const footerContBar = document.createElement("div")
    footerContBar.className = "footer_Cont_Bar";
    divContainer.append(img, longLine, shortLine, longLine1,footerContBar);
    slideContainer.append(divContainer) 


    
})
const buttons = document.querySelectorAll('.btn');


const cardsStyle = [
    {position: '600px', color: '#f5870a'},
    {position: '0', color: '#1255ff'},
    {position: '-800px', color: '#ffe81a'},
];
//Arroy Функция
// const project = () =>{

// }

const initialPosition = () =>{
    buttons[1].classList.add("active");
    body.style.backgroundColor = cardsStyle[1].color;
    slideContainer.style.marginLeft = cardsStyle[1].position;
  }
  initialPosition()

  const slideshow = () =>{
    buttons.forEach((btn, idx) =>{
        btn.addEventListener("click",() =>{
            buttons.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            body.style.backgroundColor = cardsStyle[idx].color;
    slideContainer.style.marginLeft = cardsStyle[idx].position;
        })
    })
  }
  slideshow()