function validDate(date) {

    todayDate = getTodaysDate();
    if (date > todayDate) {
        document.getElementById('dateInput').setAttribute('min', getTodaysDate());
        document.getElementById('dateInput').setAttribute('max', getTodaysDateThreeMonths());
    }
}

function getTodaysDate() {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    today = year + "-" + month + "-" + day;

    return today;
}

function getTodaysDateThreeMonths() {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 3;
    year = date.getFullYear();
    month += 1;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    today = year + "-" + month + "-" + day;

    return today;
}

function formFunction() {
    //Getting the values from the form
    var attraction = document.getElementById("attractionSelect").value;
    var adults = document.getElementById("adultsSelect").value;
    var child = document.getElementById("childSelect").value;

    //Declaring variable for txt and total
    var txt = "";
    var total = 0;

    //Ticket Prices
    var a = [28, 15];
    var b = [20, 12];
    var c = [12, 8];
    var d = [8, 5];
 
    //Checking which attraction it is, then refer to the array and calculate total price
    if (attraction == "0") {
        total = ((adults * Number(a[0])) + (child * Number(a[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "1") {
        total = ((adults * Number(b[0])) + (child * Number(b[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "2") {
        total = ((adults * Number(c[0])) + (child * Number(c[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "3") {
        total = ((adults * Number(d[0])) + (child * Number(d[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    if (txt == "") {
        txt = "Please select an attraction."
    }

    //Displaying output to webpage
    document.getElementById("result").innerHTML = txt;
}
