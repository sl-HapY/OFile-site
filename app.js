function copyText() {
    const textToCopy = "0x865589ECafC23fa9E3B872e95Dd08e27188d6a7A";
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
document.getElementById("qrCodeImage").addEventListener("mousedown", copyText);
