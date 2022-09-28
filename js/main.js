//to generate random color 
function randompickerbtn() {
    let hexCodeValue = document.querySelector("#randomValuePara")
    let colorBox = document.querySelector("#randomPicker");
    let codePool = "0123456789ABCDEF";
    let hash = "#";
    for (var i = 0; i < 6; i++){
        hash += codePool[(Math.floor(Math.random() * 16))];
    }
    hexCodeValue.textContent = hash;
    colorBox.style.backgroundColor = hash;
}

//to display color by hexcode
function hexFindbtn() {
    let hexInput = document.querySelector("#hexInput").value;
    console.log(hexInput.length)
    if (hexInput.length != 7) {
        alert("Only six-digit hex code is allowed with prefix '#'.  Example: #1265FF");
    } else if (hexInput.charAt(0) != '#') {
        alert("Enter hex code with '#' in start");
    } else {
        let colorBox = document.querySelector("#color-box");
        colorBox.style.backgroundColor = hexInput;
    }
}

//to display color by RGB
function RGBFindbtn() {
    let r = document.querySelector("#RInput").value;
    let g = document.querySelector("#GInput").value;
    let b = document.querySelector("#BInput").value;
    let colorByRgb = document.querySelector("#rgb-color-box");

    if ( (r || g || b) <= 255) {
        function convertToHex(color) {
            var hexadecimal = color.toString(16);
            return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
        }

        let finalHexCode = '#' + convertToHex(Number(r)) + convertToHex(Number(g)) + convertToHex(Number(b));
        colorByRgb.style.backgroundColor = finalHexCode;
    }
    else {
        alert("Enter value between 0 to 255")
    }
}

//to display color by RGB range
function RangeSelector() {
    let r = document.querySelector("#RrInput").value;
    let g = document.querySelector("#GrInput").value;
    let b = document.querySelector("#BrInput").value;
    let boxColor = document.querySelector("#range-color-box");

    function convertToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    let HexCode = '#' + convertToHex(Number(r)) + convertToHex(Number(g)) + convertToHex(Number(b));
    boxColor.style.background = HexCode;
}

// hex to rgb converter
String.prototype.convertToRGB = function () {
    if (this.length != 6) {
        alert("Only six-digit hex code is allowed.");
    }
    
    var convertToHex = this.match(/.{1,2}/g);
    var RGB = [
        parseInt(convertToHex[0], 16),
        parseInt(convertToHex[1], 16),
        parseInt(convertToHex[2], 16)
    ];
    return RGB;
};

//to convert hex code to RGB 
function hexConvbtn() {
    let hexToRgbInput = document.querySelector("#hexCInp");
    let hexToRgbOutPut = document.querySelector("#hexCOut");
    let RGB = (hexToRgbInput.value).convertToRGB()
    hexToRgbOutPut.textContent = RGB;
}

//to convert RGB to hex code
function rgbConvbtn() {
    let r = document.querySelector("#RCInput").value;
    let g = document.querySelector("#GCInput").value;
    let b = document.querySelector("#BCInput").value;
    let rgbToHexOutPut = document.querySelector("#rgbCOut");

    if ((r || g || b) <= 255) {
        function convertToHex(color) {
            var hexadecimal = color.toString(16);
            return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
        }

        let finalHexCode = '#' + convertToHex(Number(r)) + convertToHex(Number(g)) + convertToHex(Number(b));
        rgbToHexOutPut.textContent = finalHexCode;
    }
    else {
        alert("Enter value between 0 to 255")
    }
}
