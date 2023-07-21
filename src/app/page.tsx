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
      <h1 className="text-center text-4xl mt-5">Data Prediction App</h1>
    <div className="h-[300px] w-[400px] mx-auto my-10 border-2 border-solid border-white flex items-center justify-center flex-col">
      <div className="h-[30%]">
        <h1 className="text-2xl">Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
        <input className="text-black bg-white rounded-xl p-2" type="text" placeholder="Type your name" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        <button type="submit" className="mt-10 bg-white rounded-xl text-black h-[45px] w-[150px] font-bold">Predict Data</button>
      </form>
    </div>
    </div>
  )
}
