if (window == top) {
  window.onkeyup = doKeyPress;
}

function textReplace(text) {
  var result = "";
  for(var i in text){
    var char = text[i]

    if(engToAr[char]){
      result += engToAr[char];
    }

    else if (arToEng[char]) {
      result += arToEng[char];
    }

    else{
      result += char;
    }
  }
  return (result);
}




function doKeyPress(e){
  if (e.which == 81 && e.ctrlKey) {
    var text;
    var selected;
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    if(text.length > 0){
      var new_text = textReplace(text);

      if (window.getSelection().focusNode.data) {
        selected = window.getSelection().focusNode;
        selected.data = new_text;
      }

      else if (window.getSelection().focusNode.children.text) {
        selected = window.getSelection().focusNode.children;
        selected.text = new_text;
      }

      else{
        for (var i=0; i<window.getSelection().focusNode.children.length; i++){
          if(window.getSelection().focusNode.children[i]){
            selected = window.getSelection().focusNode.children[i]
            selected.value = new_text;
          }
        }
      }
    }
  }
}
