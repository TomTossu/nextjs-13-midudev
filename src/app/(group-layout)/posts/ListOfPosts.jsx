import Link from "next/link"
import LikeButton from "./LikeButton"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

async function ListOfPosts() {
    const posts = await fetchPosts()

    return posts.slice(0, 5).map((post) => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
        </article>
    ))
}

export default ListOfPosts