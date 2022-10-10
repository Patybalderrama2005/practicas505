const consumirAPI=async ()=>{
    const respuestas=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json=await respuestas.json();
    console.log("user id:"+json.userID);
    console.log( "id:"+json.userID);
    console.log("titulo:" +json.userID);
    console.log("completado:"+json.userID);
    let div=document.createElement("div");
    div.className="cajita";
    div.innerHTML`<p>user id:${json.userID}</p>
    <p> id:${json.id}</p>
    <p>titulo:${json.titlr}</p>
    <p>completado:${jsom.completed}</p>`;
    Document.body.appendChild(div);

}