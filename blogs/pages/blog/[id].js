import {useRouter} from 'next/router'
import posts from '../../posts.json'

const blog = () =>{
    const router = useRouter()

    const post = posts[router.query.id]
    if (!post) return <p></p>
    return(
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
)};
export default blog