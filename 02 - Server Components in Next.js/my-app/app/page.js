// import Image from "next/image";

// "use client"
// import { useState, useEffect } from "react";

import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am Abhishek")

  let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e)})
  a.then(e=>{console.log(e.toString())})

  return (    
    // In next.js everything by default is a server component
    //throws an error    
    <div>
      <Navbar/>
      I am a component 
      {/* {count} */}
      {/* <button onClick={()=> setCount(count+1)}>Click Me</button> */}
    </div>
  );
}
