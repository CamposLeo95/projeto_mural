module.exports = {

    posts: [
        {
            id: 12345,
            title: "Teste mural",
            description: "Descrição teste"
        }
    ],

    getAll(){
        return this.posts
    },

    newPosts(title, description){
        this.posts.push({
            id: generateID,
            title,
            description
        })
    }
}


function generateID(){
    return Math.random().toString(36).substring(2, 9)
}