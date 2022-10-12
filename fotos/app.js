var divResults= document.querySelector("#Resultado");
const verUsers= async ()=>{

    const respuesta= await fetch("https://jsonplaceholder.typicode.com/photos")
    const json=await respuesta.json();
    console.log(json)
    var sd=0;
    json.map(photos=>{
        if(sd==10){ return;}
let divUser=document.createElement("div");
divUser.className="photos"
divUser.innerHTML=`
<img src="${photos.url}" width="100%" alt="">
<p>${photos.title}</p>

`;
divResults.appendChild(divUser);
sd++;

    });
}
const clearUsers= async ()=>{
    divResults.innerHTML ="";
        }