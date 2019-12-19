document.addEventListener("DOMContentLoaded", () => {
    let film;
    let title;
    let select = document.querySelector("select")
    let movieInfo = document.querySelector("#movieInfo")
    let userInput = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    let userReview = document.querySelector("#userReviews")
    let h3 = document.createElement("h3")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    const fetchData = async () => {
        try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films"); 
        film = res.data

        for(let i = 0; i <= film.length; i++){
            let option = document.createElement("option")
            let release = film[i]["release_date"]
            let descript = film[i]["description"]
            title = film[i]["title"]
            option.innerText = title
            
            h3.innerText = title
            p2.innerText = release
            p3.innerText = descript
            select.appendChild(option)
        }       
        }
        catch(err){
            console.log(err)
        }
    }
    
    select.addEventListener("change", event => {
        title = event.target.value
        h3.innerText = title
        movieInfo.appendChild(h3)
        movieInfo.appendChild(p2)
        movieInfo.appendChild(p3)
    })
    const review = (input) => {
        input = text.value
        let submitReview = document.createElement("li")
        // let b = document.createElement("b")
        // b.innerText = title
        submitReview.innerText = `${title}: ${input}`
        userReview.appendChild(submitReview)
    }
    
    
    
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        review()
    })
    
    fetchData()
})



