// index.js
module.exports = () => {
    const data = {
        posts: [],
        comments: []
    }
    // Create 1000 posts
    for (let i = 0; i < 1000; i++) {
        data.posts.push({
            id: i,
            title: 'title ${i}'
            author: `user${i}`
        })
        // Create 0-10 comments
        for (let i = 0; i < Math.random() * 10; i++) {
            data.comments.push({
                id: i,
                body: `comments body ${i}`,
                postId: i
            })
        }
    }
    return data
}
