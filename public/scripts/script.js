
const URL = "http://localhost:3000/api"

document.addEventListener("DOMContentLoaded",()=>{
    upDatePosts()
})

function upDatePosts(){
    fetch(`${URL}/all`)
    .then(res => res.json())
    .then(json => {
        let postElements = ""
        let posts = JSON.parse(json)
        posts.forEach(post =>{
            postElement = `
                <div id =${post.id} class="card mb-2">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>
            `
            postElements+= postElement;
        })
        document.getElementById("posts").innerHTML = postElements
    })

}


function newPost(){
    title = document.getElementById("title").value
    description = document.getElementById("description").value

    let post ={title, description}

    const options={
        method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }
    fetch(`${URL}/new`, options).then(res => {
        console.log(res);
        upDatePosts()
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
    })
    
}