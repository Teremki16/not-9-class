let notes = []
let last;

if (localStorage.getItem("notes") != null) {
  notes = JSON.parse(localStorage.getItem("notes"))
  draw()
}


$("#add").on("click", function () {
  if ($("#head").val() != "" && $("#text").val() != "") {

    let note = {
      title: $("#head").val(),
      text: $("#text").val(),
      data: new Date().getTime(),
      complete: false
    }
    $("#head").val("")
    $("#text").val("")
    notes.push(note)
    console.log(notes)
    draw()

  }
  else {
    alertify.error("заповніть усі поля")

  }
})

function draw() {
  localStorage.setItem("notes", JSON.stringify(notes))
  $(".notes").empty();
  notes.forEach((msg) => {
    $(".notes").append(`
      <div class="note ${msg.complete}">
      <div class="zagolovok">${msg.title}</div>
      <ul>
      <li><div class="text">${msg.text}</div></li>
      </ul>
      <div class="data">${new Date(msg.data).toDateString()}</div>
      <div class="knopka">
        <button onclick="del(${msg.data})"><i class="fa-solid fa-trash-can"></i></button>
        <button  onclick="redact(${msg.data})"><i class="fa-solid fa-pencil"></i></button>
        <button onclick="complete(${msg.data})"><i class="fa-solid fa-check"></i></button>
      </div>
    </div>
      `)
  })
}

$("#clear").click(() => {
  notes = []
  draw()
})


function del(id) {
  notes = notes.filter(item => item.data !== id);
  draw();
}

function redact(data) {
  let objectToModify = notes.find(obj => obj.data == data);
  openOverlay()
  if (objectToModify) {
    // objectToModify.title = prompt("введіть новий заголовок")
    // objectToModify.text = prompt("введіть нову нотатку")
    $("#redtitle").val(objectToModify.title)
    $("#redtext").val(objectToModify.text)
    last = data
  }
draw()
}

function saveNote(){
  let objectToModify = notes.find(obj => obj.data == last);
  objectToModify.title = $("#redtitle").val()
  objectToModify.text = $("#redtext").val()
  closeOverlay()
  draw()

}

function complete(data) {
  let objectToModify = notes.find(obj => obj.data == data);
  if (objectToModify) {
    objectToModify.complete = !objectToModify.complete;
    draw()

  }
}

function openOverlay() {
  document.getElementById('overlay').style.visibility = 'visible';
}

function closeOverlay() {
  document.getElementById('overlay').style.visibility = 'hidden';
}



// new Date(data).toDateString()

// localStorage.setItem("notes", JSON.stringfy(data))

// JSON.parse(localStorage.getItem("notes"))




