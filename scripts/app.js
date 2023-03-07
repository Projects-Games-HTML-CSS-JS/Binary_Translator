// function to translate
function convert(){
    var input = document.getElementById("text").value;
    var output = document.querySelector("#output");
    output.innerHTML = "";
    for (var i = 0; i < input.length; i++){
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