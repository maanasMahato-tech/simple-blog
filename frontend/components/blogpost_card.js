import React from 'react'
import Link from 'next/link'

const Card = (props) => {
    const API_URL = "http://localhost:1337"
    return (
        <div className=' rounded-md shadow-sm shadow-black p-8 my-12 bg-white'>
            <div className=' my-2'>
                <img className=' mx-auto w-full rounded-lg h-6/12 r' src={API_URL + props.data.attributes.image.data.attributes.formats.medium.url} alt="image could not load" width="400" height="400" />
            </div>
            <div className=' my-2'>
                <h1 className=' text-xl'>{props.data.attributes.title}</h1>
            </div>
            <div className=' my-2'>
                <p>{props.data.attributes.meta_desc}...</p>
            </div>
            <div className=' my-4'>
                <Link href={`/blog/${props.data.id}`}><button className=" bg-blue-400 text-white p-2 rounded-md shadow-md shadow-black hover:bg-blue-500" >Read More</button></Link>
            </div>
        </div>
    )
}

export default Card