"use client"

import React from 'react'

const About = () => {
  return (
    <div>
        <div className='container'>
            <h1>This is about me</h1>
            <p>Hey I am a Good Coder</p>

            <style jsx>{`
                .container{
                    background-color:red;
                    color:yellow;
                }
            `}</style>
        </div>

        <div className="conatiner">Hey my name is Abhishek

            <style jsx global>{`
                .container{
                    background-color:red;
                    color:yellow;
                }
            `}</style>
        </div>
    </div>
  )
}

export default About