import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Category from '../../components/category'

const category_post = ({ cate_data }) => {
    const API_URL = "http://localhost:1337"
    return (
        <div className=' grid grid-cols-12'>
            <div className='mx-4 ml-32 col-span-9'>
                <div className=' my-2'>
                    {cate_data.attributes.posts.data.map(mydata => {
                        return (
                            <div key={mydata.id} className="">
                                <div className=' rounded-md shadow-md shadow-black p-8 my-12'>
                                    <div className=' my-2'>
                                        <img className=' mx-auto w-full rounded-lg h-6/12 r' src={API_URL + mydata.attributes.image.data.attributes.formats.medium.url} alt="image could not load" width="400" height="400" />
                                    </div>
                                    <div className=' my-2'>
                                        <h1 className=' text-xl'>{mydata.attributes.title}</h1>
                                    </div>
                                    <div className=' my-2'>
                                        <p>{mydata.attributes.meta_desc}</p>
                                    </div>
                                    <div className=' my-4'>
                                        <Link href={`/blog/${mydata.id}`}><button className=" bg-blue-400 text-white p-2 rounded-md shadow-md shadow-black hover:bg-blue-500" >Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='col-span-3 mx-8'>
                <div className='lg:sticky relative top-8'>
                    <div className='rounded-md shadow-md shadow-black p-8 my-12'>
                        <h1 className='text-3xl text-center'>Categories</h1>
                        <Category />
                    </div>
                    <div className='rounded-md shadow-md shadow-black p-8 my-12'>
                        <h1 className='text-3xl '>Latest</h1>
                    </div>
                </div>
            </div >

        </div>

    )
}

export default category_post

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:1337/api/categories/${params.cid}?populate[posts][fields]=title,meta_desc&populate[posts][populate]=image`)
    const res_data = await res.data

    return {
        props: {
            cate_data: res_data.data
        }
    }
}