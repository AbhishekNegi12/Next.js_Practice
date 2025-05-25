// "use client"



export default function Home() {
  // console.log("The id is : ",process.env.ID)
  // console.log("The secret is : ",process.env.SECRET)
  return (
    <div>Hey this is Home Page. The id is {process.env.NEXT_PUBLIC_ID}</div>
  );
}
