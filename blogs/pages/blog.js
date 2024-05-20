import Link from 'next/link'
import posts from '../posts.json'

const blog = () =>(
    <div>
        <h1>Blog</h1>

        <ul>
            {Object.entries(posts).map((value,index)=>{
                return <li key={index}>{value[1].title}</li>
            })}

        </ul>
        
    </div>
);
export default blog