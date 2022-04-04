import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Category from '../../components/category'
import Latest from '../../components/latest'

const category_post = ({ cate_data }) => {
    const API_URL = "http://localhost:1337"
    return (
        <div className=' grid grid-cols-12'>
            <div className='col-span-2 mx-2'>
                <div className='lg:sticky relative top-8 w-full'>
                    <div className='rounded-md shadow-sm shadow-black p-4 my-12 bg-white'>
                        <h1 className='text-3xl text-center'>Categories</h1>
                        <Category />
                    </div>
                </div>
            </div >
            <div className='col-span-7 mr-4'>
                <div className='w-12/12  break-words'>
                    {cate_data.attributes.posts.data.map(mydata => {
                        return (
                            <div key={mydata.id} className="">
                                <div className=' rounded-md shadow-md shadow-black p-8 my-12'>
                                    <div className=' my-2 flex flex-col justify-between'>
                                        <h1 className=' text-4xl'>{mydata.attributes.title}</h1>
                                        <p className='text-sm font-extralight my-2'>Published at: {mydata.attributes.createdAt}</p>
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
            <div className=' col-span-3 mx-2'>
                <div className='lg:sticky relative top-4 w-full'>
                    <div className='rounded-md shadow-sm shadow-black p-4 my-12 bg-white'>
                        <h1 className='text-3xl text-center'>Latest posts</h1>
                        <Latest />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default category_post

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:1337/api/categories/${params.cid}?populate[posts][fields]=title,meta_desc,createdAt`)
    const res_data = await res.data

    return {
        props: {
            cate_data: res_data.data
        }
    }
}