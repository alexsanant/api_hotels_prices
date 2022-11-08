const fs = require('fs');
const csvParser = require('csv-parser');



function getHotels(request, response) {

    const result = [];
    
    //RANDOM NUMBER FOR HOTELS
    var aleatorio = Math.random();
    aleatorio = aleatorio * 16470;
    aleatorio = Math.trunc(aleatorio);

    console.log(aleatorio);

    fs.createReadStream('./prices.csv')
        .pipe(csvParser())
        .on('data', function(data) {
            result.push(data)
        })
     
        .on("end", function() {

            response.send(result[aleatorio]);
            
        });

}

module.exports = {
    getHotels
};