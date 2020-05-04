//Fonts https://github.com/filipefer1/covid19-api

const https = require ("https")

https
    .get(" https://covid-api-brasil.herokuapp.com/DF", res => {
        let data = ""

        res.on("data", chunk => {
            data += chunk
        })


        res.on("end", () => {
            let df = {
                cases: JSON.parse(data).casos,
                deaths: JSON.parse(data).mortes
            }
            console.log(df) // retorna todos os dados
    })
    .on("error", err => {
        console.log("Error: " + err.message)

    }) 
    })
