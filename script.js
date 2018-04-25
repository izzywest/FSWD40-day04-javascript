// First task

document.write("<b>" + "Basic 1 | Reading Status" + "</b>" + "<br>" + "<br>");


library = [{
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        readingStatus: true
    },
    {
        title: "The Girls",
        author: "Emma Cline",
        readingStatus: true
    },
    {
        title: "The Nest",
        author: "Cynthia",
        readingStatus: false
    },
    {
        title: "The Crown",
        author: "Kiera Cass",
        readingStatus: true
    },
    {
        title: "Behind Closed Doors",
        author: "B.A. Paris",
        readingStatus: false
    },
    {
        title: "It Ends with Us",
        author: "Colleen Hoover",
        readingStatus: true
    },
];


for (var i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
    	//msg1 = "Already read " + library[i].title + "<br>";
    	//document.getElementById("firsttry").innerHTML = msg1;
        document.write("Already read " + library[i].title + "<br>")

    } else if(library[i].readingStatus == false) {
    	//msg2 = "You still need to read " + library[i].title + "<br>";
    	//document.getElementById("firsttry").innerHTML = msg2;
        document.write("You still need to read " + library[i].title + "<br>")
    }
}


// Second Task

document.write("<br>" + "<br>" + "<b>" + "Basic 2 | Truncate" + "</b>" + "<br>" + "<br>");


var str = "I am a hero from World of Warcraft";
var res = str.slice(0, 12);
var short = "Before: " + str + "<br>" + "After: " + res;
//document.getElementById("secondtry").innerHTML = short;
document.write(short);


// Third task ???

/*
document.createElement ???
*/

document.write("<br>" + "<br>" + "<b>" + "Basic 3 | Table Creation" + "</b>" + "<br>" + "<br>");

// Fourth task
/*
Basic 4 | Hotels
Create three objects of type Hotel. Each of them share some properties and methods. The user should be able to insert number of nights for each hotel and get back results, whether the hotel is available or not (for some number of nights). For each hotel generate random integers from 1-10 that stores available nights. If the the Hotel is available, provide a button labeled "I'll reserve" otherwise provide a message with text "Sorry, no free room for <number_of_nights> nights".

Try to style the Program with the colors #003580, #FFFFFF and #E9F0FA so it can be embedded within real production website.
*/


function hotels(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
}
