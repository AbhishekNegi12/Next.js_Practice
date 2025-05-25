export default function Page({ params }) {
//   console.log("Params:", params); // This will show in terminal/server logs

    let languages = ["python","javascript","java","cpp","C"]
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>;   
    }
    else{
        return <div>Post not Found</div>
    }
}
