'use client'
import { useState } from "react"

function LikeButton({ id }) {
    const [liked, setLiked] = useState(false)

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? 'Liked' : 'Not Liked'}
        </button>
    )
}

export default LikeButton