import Image from "next/image"

const fetchComments = async (id) => {
    // await new Promise(resolve => setTimeout(resolve, 3000))
    // throw new Error('Error al cargar los comentarios')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function CommentsPage({ params }) {
    const { id } = params
    const comments = await fetchComments(id)
    return (
        <ul style={{ background: '#444', fontSize: '12px' }}>
            {comments.map((comment) => (
                <li li key={comment.id} >
                    <Image alt={comment.name} src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${comment.id}`} width='50' height='50' />
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))
            }
        </ul >
    )
}