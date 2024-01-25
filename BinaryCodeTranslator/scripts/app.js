// function to translate
function convert(){
    var input = document.getElementById("text").value;
    var output = document.querySelector("#output");
    output.innerHTML = "";
    // checks the length of the input
    for (var i = 0; i < input.length; i++){
      // charCodeAt() - returns the code of a character, which is a general number
      // toString(2) - to convert into a binary string
      // + " " - creates a space between each letter
      output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";  
    }
}

// function to copy the binary code
function copyCode() {
    const textarea = document.createElement('textarea');
    const code = document.getElementById("output").innerText;
    if (!code) { return; }
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Binary code copied to clipboard');
}