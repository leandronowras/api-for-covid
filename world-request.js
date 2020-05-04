//Fonts https://github.com/NovelCOVID/API

const https = require ("https")

https
    .get("https://disease.sh/v2/all?yesterday=false", res => {
        let data = ""

        res.on("data", chunk => {
            data += chunk
        })

        res.on("end", () => {
            let world ={
                totalCases : JSON.parse(data).cases,
                active : JSON.parse(data).active,
                todayCases : JSON.parse(data).todayCases,

                deaths : JSON.parse(data).deaths,
                todayDeaths : JSON.parse(data).todayDeaths,
        
                recovered : JSON.parse(data).recovered,
        }
        
        
        Object.keys(world).map(function(key, index) {
            world[key];
            });
            
            console.log(world); // retorna todos os dados
    })
    })


    .on("error", err => {
        console.log("Error: " + err.message)

    }) 

