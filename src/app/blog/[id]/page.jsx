'use client'
import { useParams, useRouter } from "next/navigation";

const BlogPost = () => {
    const router = useRouter()
    const param = useParams()
    console.log(param)
    return (
        <div>Blogpost{param.id}</div>
    );
}

export default BlogPost;