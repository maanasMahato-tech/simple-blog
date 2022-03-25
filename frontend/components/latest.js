import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Latest = () => {
    const [latestdata, setLatestData] = useState([]);

    const latest_posts = async () => {
        const res = await axios.get("http://localhost:1337/api/posts?fields=title,meta_desc&sort=createdAt:desc");
        const api_data = await res.data;
        setLatestData(api_data.data.slice(0, 6));
    }

    useEffect(() => {
        latest_posts();
    }, [])

    return (
        <div className=' bg-white'>
            {latestdata.map(item => {
                return <div key={item.id}>
                    <Link href={`/blog/${item.id}`} passHref>
                        <div className='rounded-lg shadow-sm shadow-black my-2 mx-auto text-center p-2 cursor-pointer break-words'>
                            <h1 className=' text-xl' >{item.attributes.title}</h1>
                            <p className=' text-md font-light'>{item.attributes.meta_desc.slice(0, 100)}...</p>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default Latest;