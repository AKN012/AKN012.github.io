let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

let destinationValue = params.get("destination");
let destination = document.getElementById("destination");

destination.value = destinationValue;

let result = document.getElementById("resultDisplay");

function submitResult() {
    console.log()
    return false;
}

document.getElementById('bookingInputs').addEventListener('submit', function (event) {
    event.preventDefault();
    doLocationInfo(destination.value);
    result.style.display = "block";
});

function doLocationInfo() {
    var data = [
        {
            value: 'Bali-Indonesia',
            location: 'Bali, Indonesia',
            price: 'P 1336',
        },
        {
            value: 'Kyoto-Japan',
            location: 'Kyoto, Japan',
            price: 'P 2000',
        },
            ];
        
        var result = data.filter(function(item) {
            return item.value === destination.value;
        });
            
        if (result.length > 0) {
            var output = "";
            result.forEach(function(item) {
            output += "Location: " + item.location + " <br> Price: " + item.price + "<br>";
        });

            document.getElementById("result").innerHTML = output;
        } 
        else {
            document.getElementById("result").innerHTML = "No results found.";
        }
    }
function elementBlur(input) {
    input.style.outline = '2px solid transparent';
    if (input.value.trim() === '') {
        input.style.border = '2px solid red';
    } 
    else {
        input.style.border = '2px solid green';
    }
}

function elementFocus(input) {
    input.style.outline = '2px solid green';
    input.style.border = '2px solid transparent';
}