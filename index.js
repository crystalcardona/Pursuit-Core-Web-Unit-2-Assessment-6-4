document.addEventListener("DOMContentLoaded", () => {
    let film;
    let year;
    let release;
    let discript;
    let title;
    let select = document.querySelector("select")
    let movieInfo = document.querySelector("#movieInfo")
    let input = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    let description = document.querySelector("#descri[tion")

    const fetchData = async () => {
        try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films"); 
        film = res.data
        debugger

        for(let i = 0; i <= film.length; i++){
            let option = document.createElement("option")
            let filmNames = film[i]["title"]
            option.innerText = filmNames
            select.appendChild(option)
            // debugger
        }
        }
        catch(err){
            console.log(err)
        }
    }
    const populateDescription = async () => {
        try {
            let resDescript = await axios.get("https://ghibliapi.herokuapp.com/films");
            let info = resDescript.data
            debugger

            for(let i =0; i < info.length; i++){
                let p = document.createElement("p")
                let p2 = document.createElement("p")
                let p3 = document.createElement("p")
                release = info[i]["release_date"]
                descript = info[i]["description"]
                
                p.innerText = title;
                p2.innerText = release;
                p3.innerText = descript;
                movieInfo.appendChild(p)
                movieInfo.appendChild(p2)
                movieInfo.appendChild(p3)

            }
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
    populateDescription()
})