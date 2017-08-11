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
            title: 'title ${i}',
            author: `user${i}`
        })
        // Create 0-10 comments
        for (let a = 0; a < Math.random() * 10; a++) {
            data.comments.push({
                id: a,
                body: `comments body ${i} ${a}`,
                postId: i
            })
        }
    }
    return data
}
