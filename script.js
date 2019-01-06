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


function getSelectionText() {
    var text;
    var selected;
    if (window.getSelection) {
        text = window.getSelection().toString();
        selected = window.getSelection().focusNode.children.text;
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    if(text.length > 0){
      selected.value = textReplace(text);
    }
}

window.onkeyup = getSelectionText;
window.onmouseup = getSelectionText;
