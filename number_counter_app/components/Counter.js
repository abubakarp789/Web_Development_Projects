'use client'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">{count}</h1>
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button 
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter