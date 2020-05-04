//Fonts https://github.com/NovelCOVID/API

const https = require ("https")

https
    .get("https://disease.sh/v2/countries/Brazil?yesterday=false&strict=true", res => {
        let data = ""

        res.on("data", chunk => {
            data += chunk
        })


        res.on("end", () => {
            let brazil ={
                 country : JSON.parse(data).country,

                 totalCases : JSON.parse(data).cases,
                 active : JSON.parse(data).active,
                 todayCases : JSON.parse(data).todayCases,
    
                 deaths : JSON.parse(data).deaths,
                 todayDeaths : JSON.parse(data).todayDeaths,
                   
                 recovered : JSON.parse(data).recovered,
            }
            
            
            Object.keys(brazil).map(function(key, index) {
                brazil[key];
              });
              
              console.log(brazil); // retorna todos os dados
        })
    })
    .on("error", err => {
        console.log("Error: " + err.message)

    }) 

