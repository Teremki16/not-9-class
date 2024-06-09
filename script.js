let notes = []

if(localStorage.getItem("notes")!=null){
  notes = JSON.parse(localStorage.getItem("notes"))
  draw()
}


  $("#add").on("click", function(){
    let note = {
      title:$("#head").val(),
      text:$("#text").val(),
      data:new Date().getTime(),
      complete: false
    }
    $("#head").val("")
    $("#text").val("")
    notes.push(note)
    console.log(notes)
    draw()
  })

function draw(){
  localStorage.setItem("notes",JSON.stringify(notes))
  $(".notes").empty();
  notes.forEach((msg)=>{
    $(".notes").append(`
      <div class="note ${msg.complete}">
      <div class="zagolovok">${msg.title}</div>
      <ul>
      <li><div class="text">${msg.text}</div></li>
      </ul>
      <div class="data">${new Date(msg.data).toDateString()}</div>
      <div class="knopka">
        <button onclick="del(${msg.data})"><i class="fa-solid fa-trash-can"></i></button>
        <button><i class="fa-solid fa-pencil"></i></button>
        <button><i class="fa-solid fa-check"></i></button>
      </div>
    </div>
      `)
  })
}

$("#clear").click(()=>{
  notes = []
  draw()
})


function del(id){
  notes = notes.filter(item => item.data !== id);
  draw();
}



if (objectToModify) {
  objectToModify.complete = objectToModify.complete
}

 draw()

 
  function redact(data) {
    let objectToModify = notes.find(obj => obj.data == data);
  

if(objectToModify) {
 objectToModify.title = prompt
}
}

function complete(data) {
  let objectToModify = notes.find(obj => obj.data == data);



if(objectToModify) {
  objectToModify.complete= !objectToModify.complete
  draw()


}
}


// new Date(data).toDateString()

// localStorage.setItem("notes", JSON.stringfy(data))

// JSON.parse(localStorage.getItem("notes"))




