function readFileA () {
    // (A) GET SELECTED FILE
    let selected = document.getElementById("picker").files[0];
   
    // (B) READ SELECTED FILE
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        //get line 6 from file reader
        let line6 = reader.result.split("\n")[5];
      document.getElementById("sf").innerHTML = line6;
    });
    reader.readAsText(selected);
  }