$(document).ready(() => {
    $(document).foundation();
    $.get("/api/cars/all", data => {
        let carSection = $("#append-here");

        for (let i = 0; i < data.length; i++) {
            // console.log(data[i]);
            // carTitle.text(data[i].make);
            let newDiv = $("<div>");
            newDiv.addClass("columns small-12 medium-4 large-4");

            let newCard = $("<div>");
            newCard.addClass("car-card");

            // let newImg = $("<img>");
            let newImg = $(`<img src="./img/defaultcarpic.jpeg" alt="Car Img" class="pic1">`);

            let newTitle = $("<h3>");
            newTitle.addClass("car-title");
            newTitle.text(`${data[i].make} ${data[i].model}`);

            let yearTag = $("<p>");
            let makeTag = $("<p>");
            let modelTag = $("<p>");
            let trimTag = $("<p>");
            let engineTag = $("<p>");
            let transTag = $("<p>");
            yearTag.text(`Year: ${data[i].year}`);
            makeTag.text(`Make: ${data[i].make}`);
            modelTag.text(`Model: ${data[i].model}`);
            trimTag.text(`Trim: ${data[i].trim}`);
            engineTag.text(`Engine: ${data[i].engine}`);
            transTag.text(`Transmission: ${data[i].transmission}`);


            let addBtn = $("<button>");
            addBtn.text("Delete from Inventory");
            addBtn.addClass("add-to-favs");
            newCard.append(newTitle, yearTag, makeTag, modelTag, trimTag, engineTag, transTag, addBtn);
            newDiv.append(newCard);
            carSection.prepend(newDiv);
        }
    });

    var vinInput = $("#fname");
    var addBtn = $(".addVehicleSubmit");
    const queryUrl = `http://api.carmd.com/v3.0/decode?vin=`;

    addBtn.on("click", function (event) {
        event.preventDefault();

        var carData = {
            vin: vinInput.val().trim(),
        };
        // If we have a vin, run the submitCar function
        submitCar(carData.vin);
        vinInput.val("Enter a Vin Number");
        location.reload();
    });

    function submitCar(vin) {
        $.post("/api/cars", { vin })
            .then(function (data) {
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch();
    }



    module.exports = function carInfo(vin) {
        return axios({
            method: 'get',
            url: queryUrl + vin,
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                "authorization": process.env.API_KEY,
                "partner-token": process.env.PARTNER_TOKEN
            }
        }).then(function (response) {
            return response.data.data;
        });
    };


})



