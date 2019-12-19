document.addEventListener("DOMContentLoaded", () => {
    let film;
    let title;
    let select = document.querySelector("select")
    let movieInfo = document.querySelector("#movieInfo")
    let userInput = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    let userReview = document.querySelector("#userReviews")
    let id; 
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    const fetchData = async () => {
        try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films"); 
        film = res.data
        debugger

        for(let i = 0; i <= film.length; i++){
            let option = document.createElement("option")
            let release = film[i]["release_date"]
            let descript = film[i]["description"]
            title = film[i]["title"]
            option.innerText = title
            debugger
            p.innerText = title
            p2.innerText = release
            p3.innerText = descript
            select.appendChild(option)
            // debugger
        }
                
        }
        catch(err){
            console.log(err)
        }
    }
    
    select.addEventListener("change", event => {
        p.innerText = event.target.value
        debugger
        movieInfo.appendChild(p)
        movieInfo.appendChild(p2)
        movieInfo.appendChild(p3)
    })
    const review = (input) => {
        input = text.value
        let submitReview = document.createElement("li")
        submitReview.innerText = input
        userReview.appendChild(submitReview)
    }
    
    
    
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        review()
    })
    
    fetchData()
})



