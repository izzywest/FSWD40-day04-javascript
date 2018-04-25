// First task

document.write("<b>" + "Basic 1 | Reading Status" + "</b>" + "<br>" + "<br>");


library = [
    { title: "When Breath Becomes Air", 
      author: "Paul Kalanithi",
      readingStatus: true 
    },
    { title: "The Girls", 
      author: "Emma Cline",
      readingStatus: true 
    },
    { title: "The Nest", 
      author: "Cynthia",
      readingStatus: false 
    },
        { title: "The Crown", 
      author: "Kiera Cass",
      readingStatus: true 
    },
        { title: "Behind Closed Doors", 
      author: "B.A. Paris",
      readingStatus: false 
    },
        { title: "It Ends with Us", 
      author: "Colleen Hoover",
      readingStatus: true 
    },
];


for (var i = 0; i < library.length; i++) {
	if (library[i].readingStatus == true) {
		document.write("Already read " + library[i].title + "<br>")

	}else {
		document.write("You still need to read " + library[i].title + "<br>")

	}
}


// Second Task

document.write("<br>" + "<br>" + "<b>" + "Basic 2 | Truncate" + "</b>" + "<br>" + "<br>");


    var str = "I am a hero from World of Warcraft"; 
    var res = str.slice(0, 12);
    var short = "Before: " + str + "<br>" + "After: " + res;
    document.write(short);

