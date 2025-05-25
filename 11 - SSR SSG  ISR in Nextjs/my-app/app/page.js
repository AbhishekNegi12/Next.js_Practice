

// export default function Home() {
//   console.log("Hello")
//   return (
//     <div>I am HomePage</div>
//   );
// }

import { revalidatePath } from "next/cache";

export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog', | {next : { revalidate: 'no-store' }});
  // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' });
  let posts = await data.json();
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
