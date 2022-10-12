const consumirAPI=async ()=>{
    const respuesta= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json=await respuesta.json();
    console.log("user id:"+json.userID);
    console.log( "id:"+json.ID);
    console.log("titulo:" +json.title);
    console.log("completado:"+json.completed);
    let div=document.createElement("div");
    div.className="cajita";
    div.innerHTML`<p><span>user id:${json.userID}</p>
    <p> id:${json.id}</p>
    <p>titulo:${json.titlr}</p>
    <p>completado:${jsom.completed}</p>`;
    Document.body.appendChild(div);

}