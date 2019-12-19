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

    const review = (input) => {
        input = text.value
        let submitReview = document.createElement("li")
        submitReview.innerText = input
        userReview.appendChild(submitReview)
    }

    select.addEventListener("change", async event => {
        try {
          let info = await axios.get(
            `https://ghibliapi.herokuapp.com/films/${event.target.value}`
          );
          let p = document.createElement("p")
          let p2 = document.createElement("p")
          let p3 = document.createElement("p")
    
          release = info["release_date"]
          descript = info["description"]
          title = info["title"]
    
          title.innerText = title;
          descript.innerText = descript;
          release.innerText = release;
    
          movieInfo.appendChild(p)
          movieInfo.appendChild(p2)
          movieInfo.appendChild(p3)
        } catch (err) {
          debugger;
        }
      });

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        review()
    })

    fetchData()
})

