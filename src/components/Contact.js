import React, { useRef } from 'react'

export const Contact = () => {
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  const emailClickHandler = (event) => {
    event.preventDefault();
    window.open('mailto:jayshah9791@gmail.com?subject="Came from your Portfolio"&body='+ `${messageInputRef.current.value}`);
  }

  return (
    <div name="contact" className='w-full bg-[#0a192f] flex justify-center items-baseline p-8'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - jayshah9791@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name="name" className='bg-[#ccd6f6] p-2' />
            <input type="email" placeholder='Email' name="email" className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name='message' rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message' ref={messageInputRef} ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 p-3 my-8 mx-auto flex items-center' onClick={emailClickHandler}>Let's Collaborate</button>
        </form>
    </div>
  )
}
