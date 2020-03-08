$(document).ready(() => {
    //get all cars from the database 
    $.get("/api/cars/all", function(data) {
        let carArr = [];

        //gets the last three cars to display on index.html to show latest cars
        for (var i = data.length - 3; i < data.length; i++) {
            // console.log(data[i]);
            carArr.push(data[i]);

            //this works but not exactly dry 
            // carTitle.text(data[i].make);
            // let newDiv = $("<div>");
            // newDiv.addClass("columns small-12 medium-4 large-4");
            // let newCard = $("<div>");;
            // newCard.addClass("car-card");
            // // let newImg = $("<img>");
            // let newTitle = $("<h3>")
            // newTitle.addClass("car-title")
            // newTitle.text(`${data[i].make}`);
            // let newPTag = $("<p>");
            // newPTag.text(`${data[i].year} ${data[i].make} ${data[i].model} ${data[i].trim}`);
            // // let infoButton = $("<button>");
            // // infoButton.addClass("car-info")
            // // let addButton = $("<button>");
            // newDiv.append(newCard);
            // newDiv.append(newTitle);
            // newDiv.append(newPTag);
            // carSection.prepend(newDiv);
        }

        //set the text of all titles using an array
        let titleArr = [$(".car-title0"), $(".car-title1"), $(".car-title2")];

        for (let i = 0; i < titleArr.length; i++) {
            titleArr[i].text(`${carArr[i].year} ${carArr[i].make} ${carArr[i].model} ${carArr[i].trim}`);
        }

        let infoArr = [$("#info0"), $("#info1"), $("#info2")];

        for (let i = 0; i < titleArr.length; i++) {
            infoArr[i].text(`Engine: ${carArr[i].engine} || Transmission: ${carArr[i].transmission}`);
        }
        // carTitle0.text(`${carArr[0].year} ${carArr[0].make} ${carArr[0].model} ${carArr[0].trim}`);
        // carTitle1.text(`${carArr[1].year} ${carArr[1].make} ${carArr[1].model} ${carArr[1].trim}`);
        // carTitle2.text(`${carArr[2].year} ${carArr[2].make} ${carArr[2].model} ${carArr[2].trim}`);
    })

})