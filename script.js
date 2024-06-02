let notes = []

$(document).ready(function () {
  $("#add").on("click", function(){
    let note = {
      title:$("#head").val(),
      text:$("#text").val(),
      data:new Date().getTime()
    }
    $("#head").val("")
    $("#text").val("")
    notes.push(note)
    console.log(notes)
  })










});



// new Date(data).toDateString()

// localStorage.setItem("notes", JSON.stringfy(data))

// JSON.parse(localStorage.getItem("notes"))