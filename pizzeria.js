var menu_list = ["Chicken Tandoori Pizza", "Non-Veg Overload Pizza", "Chicken Pepper Barbeque Pizza", "Golden Delight Pizza", "Extra Corn Cheese Pizza"];

function view_menu () {
    var htmldata;

    htmldata = "<ol class='menu_list'>";

    menu_list.sort();

    for (i = 0; i < menu_list.length; i++) {
        htmldata = htmldata + "<li>" + menu_list[i] + "</li>";
    }

    htmldata = htmldata + "</ol>";

    console.log(htmldata);

    document.getElementById("menu").innerHTML = htmldata;
}

function create () {
    htmldata;

    htmldata = "<section class='cards'>";

    var items = document.getElementById("toppings").value;

    menu_list.push(items);

    menu_list.sort();

    for (i = 0; i < menu_list.length; i++) {
        htmldata = htmldata + "<div class='card'>" + "<img src='Images.pizzeria/Pizza-Card.png'>" + menu_list[i] + " Pizza" + "</div>";
    }

    htmldata = htmldata + "</section>";

    console.log(htmldata);

    document.getElementById("added_menu").innerHTML = htmldata;
}