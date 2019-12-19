document.addEventListener("DOMContentLoaded", () => {
    let film;
    let release;
    let descript;
    let title;
    let select = document.querySelector("select")
    let movieInfo = document.querySelector("#movieInfo")
    let userInput = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    let userReview = document.querySelector("#userReviews")
    let id; 

    const fetchData = async () => {
        try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films"); 
        film = res.data
        debugger

        for(let i = 0; i <= film.length; i++){
            let option = document.createElement("option")
            let filmNames = film[i]["title"]
            id = film[i]["id"]
            option.innerText = filmNames
            select.appendChild(option)
            // debugger
        }
        }
        catch(err){
            console.log(err)
        }
    }

    const review = (input) => {
        input = text.value
        let submitReview = document.createElement("li")
        submitReview.innerText = input
        userReview.appendChild(submitReview)
    }

    const populateDescription = async () => {
        debugger
        try {
            let resDescript = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
            debugger
            let info = resDescript.data
            let p = document.createElement("p")
            let p2 = document.createElement("p")
            let p3 = document.createElement("p")

                release = info["release_date"]
                descript = info["description"]
                title = info["title"]
                debugger
                
                p.innerText = title;
                p2.innerText = release;
                p3.innerText = descript;
                movieInfo.appendChild(p)
                movieInfo.appendChild(p2)
                movieInfo.appendChild(p3)
        }
        catch(err){
            console.log(err)
        }
    }

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        review()
    })
    select.addEventListener("change", (event) => {
        select.value = event.target.value
        populateDescription(id)

    })
    fetchData()
})



