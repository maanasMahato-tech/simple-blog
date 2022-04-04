import React, { useState } from 'react'
import axios from 'axios'

const contact = () => {
  const API_URL = 'http://localhost:1337'
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();

  const formData = async (e) => {
    e.preventDefault()
    const finalData = {
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message
      }
    }
    console.log(finalData)
    await axios.post(`${API_URL}/api/viewermsgs`, finalData)

    setfirstname()
    setlastname()
    setemail()
    setmessage()
  }
  return (
    <div className='grid grid-cols-12 mx-8'>
      <div className=' col-span-8 my-8 mx-10'>
        <h1 className='text-5xl font-mono'>Contact us</h1>
        <h1 className=' mt-36 break-words w-5/6 text-center text-2xl font-mono'>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</h1>
      </div>
      <div className=' mx-auto my-4 col-span-4 w-full'>
        <form method='POST' className='bg-blue-100 p-8 shadow-md shadow-gray-500 w-full font-mono text-bold text-xl'>
          <div className=' my-4 mt-8'>
            <label>Firstname: </label>
            <input name='firstname' className='  shadow-md shadow-gray-500 rounded-lg p-2 outline-none w-9/12' type="text" value={firstname || ''} onChange={(e) => setfirstname(e.target.value)} />
          </div>
          <div className=' my-4'>
            <label>Lastname: </label>
            <input name='lastname' className='  shadow-md shadow-gray-500 rounded-lg p-2 outline-none w-9/12' type="text" value={lastname || ''} onChange={(e) => setlastname(e.target.value)} />
          </div>
          <div className=' my-4'>
            <label>Email: </label>
            <input name='email' className='  shadow-md shadow-gray-500 rounded-lg p-2 outline-none w-9/12' type="Email" value={email || ''} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className=' my-4'>
            <div>
              <label>Message: </label>
            </div>
            <textarea name='message' className=' shadow-md shadow-gray-500 rounded-lg p-2 outline-none w-full' type="text" value={message || ''} onChange={(e) => setmessage(e.target.value)} rows={10} />
          </div>
          <div className=' my-4 mb-8'>
            <button type='submit' onClick={formData} className=' m-2 p-2 text-center bg-blue-500 rounded-md shadow-md shadow-gray-500 text-white hover:bg-blue-400'>Submit</button>
            <button type='reset' className=' m-2 p-2 text-center bg-red-500 rounded-md shadow-md shadow-gray-500 text-white hover:bg-red-400'>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default contact