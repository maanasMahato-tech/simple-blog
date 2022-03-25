import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

const Category = () => {

  const [myCategory, setMyCategory] = useState([]);

  const getCateData = async () => {
    const res = await axios.get("http://localhost:1337/api/categories");
    try {
      const j_data = await res.data;
      setMyCategory(j_data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    getCateData();
  }, [])

  return (
    <div className=' bg-white'>
      {myCategory.map(item => {
        return (
          <div key={item.id}>
            <Link href={`/category/${item.id}`} passHref>
              <h1 className='rounded-lg shadow-sm shadow-black text-xl my-2 mx-auto text-center p-2 cursor-pointer'>{item.attributes.name}</h1>
            </Link>
          </div>

        )
      })}
    </div>
  )
}

export default Category