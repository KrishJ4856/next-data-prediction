"use client"

// imports
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  // State to record the user input
  const [inputVal, setInputVal] = useState("");

  // Destructuring useRouter() to get push() function
  const { push } = useRouter();

  // Function to take in input and switch to a ssr component
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  // HTML we are returning
  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="text-black" type="text" placeholder="Type your name" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  )
}
