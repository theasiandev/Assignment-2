function formFunction(){
    //Getting the values from the form
    var attraction = Number(document.getElementById("attractionSelect").value);
    var adults = Number(document.getElementById("adultsSelect").value);
    var child = Number(document.getElementById("childSelect").value);

    //Declaring variable for txt and total
    var txt = "";
    var total = 0;

    //Ticket Prices
    var USS = [79, 59];
    var SEA = [40, 29];
    var ACW = [38, 30];
    var MXM = [12, 28];

    //Checking which attraction it is, then refer to the array and calculate total price
    if (attraction == 0) {
        total = ((adults * USS[0]) + (child * USS[1])).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == 1) {
        total = ((adults * SEA[0]) + (child * SEA[1])).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == 2) {
        total = ((adults * ACW[0]) + (child * ACW[1])).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == 3) {
        total = ((adults * MXM[0]) + (child * MXM[1])).toFixed(2);
        txt = "Your total is: $" + total;
    }

    //Displaying output to webpage
    document.getElementById("output").innerHTML = txt;
}