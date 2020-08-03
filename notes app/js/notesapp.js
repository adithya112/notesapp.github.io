console.log('notes app');
showNotes();
// adding notes to localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    let notesObj = [];
     if (notes == null) {
         notesObj = [];
     }
     else {
         notesObj = JSON.parse(notes);
     }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html+= `
        <div class="card noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id = "${index}" onclick = "deleteNote(${index})" class="btn btn-primary">Delete note</button>
        </div>
    </div>
        
        
        `;
 });
let notesElem = document.getElementById('notes');
if (notesObj.length !=0) {
    notesElem.innerHTML = html;
}
else{
    notesElem.innerHTML = `nothing to show! Use "add a note " section above.`;
}

}

function deleteNote(index) {
    console.log(index);
    let notes = localStorage.getItem('notes');
    // let notesObj = [];
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let ivalue= search.value.toLowerCase();
    // console.log(ivalue);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if (cardTxt.includes(ivalue)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }


    })
})