import React from 'react'
import Link from 'next/link'

const Card = (props) => {
    const API_URL = "http://localhost:1337"
    return (
        <div className=' rounded-md shadow-sm shadow-black p-8 my-12 bg-white h-3/6 font-mono'>
            <div className=' my-2 flex flex-col justify-between'>
                <h1 className=' text-4xl'>{props.data.attributes.title}</h1>
                <p className='text-sm my-2 font-extralight'>Published at: {props.data.attributes.createdAt}</p>
            </div>
            <div className=' my-2'>
                <p className=' text-xl'>{props.data.attributes.meta_desc}...</p>
            </div>
            <div className=' my-4'>
                <Link href={`/blog/${props.data.id}`}><button className=" bg-blue-400 text-white p-2 rounded-md shadow-md shadow-black hover:bg-blue-500" >Read More</button></Link>
            </div>
        </div>
    )
}

export default Card