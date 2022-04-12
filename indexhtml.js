function readFileA () {
    // (A) GET SELECTED FILE
    let selected = document.getElementById("picker").files[0];
   
    // (B) READ SELECTED FILE
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        //get line 6 from file reader
        let line6 = reader.result.split("\n")[4];
        if(line6 =='<input type="button" value="Click Me">') {
          document.getElementById("sf").innerHTML = "You finished";
        } else {
          document.getElementById("sf").innerHTML = "That was close but not quite";
        }
    });
    reader.readAsText(selected);
  }
