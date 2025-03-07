'use client';
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8">Number Counter</h1>
      <div className="count">{count}</div>
      <div className="flex justify-center gap-4">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}
