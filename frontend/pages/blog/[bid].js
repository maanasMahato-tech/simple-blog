import React from 'react'
import axios from 'axios';
import Link from 'next/link'

const blogpost = ({ blog_post }) => {
    const api_url = 'http://localhost:1337'
    return (
        <div className=" container mx-auto my-8 break-words">
            <h1 className=' text-3xl text-center my-4'>{blog_post.attributes.title}</h1>
            <div className=' grid grid-cols-2'>
                <div className=' my-2 w-full h-auto'>
                    <img className=' mx-auto w-full rounded-lg h-6/12' src={api_url + blog_post.attributes.image.data.attributes.formats.medium.url} alt="image could not load" width="400" height="400" />
                </div>
                <div className=' w-11/12 mx-auto mt-4'>
                    <p>{blog_post.attributes.desc}</p>
                </div>
            </div>
            <div className=' my-4'>
                <Link href={'/'}><button className=' p-2 bg-blue-700 text-white hover:bg-blue-500 rounded-md shadow-lg shadow-black'>Go Back to Blog</button></Link>
            </div>
        </div>
    )
}

export default blogpost;


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:1337/api/posts/${params.bid}?fields=title,desc,publishedAt&populate=image`)
    const post_data = await res.data

    return {
        props: {
            blog_post: post_data.data
        }
    }
}