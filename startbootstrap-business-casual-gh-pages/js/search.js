function search() {
    var input, filter, one, two, three, four, five, six;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    one = document.getElementById("restaurant-cards");
    two = one.getElementsByClassName("col-md-6 col-xl-3 d-flex");
    console.log(two);
    three = two.getElementsByClassName("car mb-4");
    console.log(three);
    four = three.getElementsByClassName("card-body");
    five = four.getElementsByClassName("row");
    console.log(five);
    six = five.getElementsByClassName("col-sm");
    console.log(six);
    /*
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    */
}