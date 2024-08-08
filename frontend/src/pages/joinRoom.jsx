import { useState } from "react"

export default function JoinRoom() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Joining room:', room, 'as:', name)
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
        <h1 className='text-3xl my-3 font-semibold'>Join A Room</h1>

        <form className='flex flex-col gap-3 mt-3' onSubmit={handleSubmit}>
          <input type='text' placeholder='Room Name' className='border-2 py-1 border-slate-800 rounded-md px-2' onChange={(e) => setName(e.target.value)}/>
          <input type='text' placeholder='Username' className='border-2 py-1 border-slate-800 rounded-md px-2'onChange={(e) => setRoom(e.target.value)}/>
          <button type='submit' className='bg-slate-900 text-white py-2 rounded-md'>Join</button>
        </form>
      </div>
    )
}