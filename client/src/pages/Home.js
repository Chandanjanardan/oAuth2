import Card from "../componenets/Card"
import {posts} from "../data"

const Home = () => {
    return (
        <div className="home">
            {posts.length !==0 && posts.map(post=>(
                <Card  post={post}/>
            ))}
        </div>
    )
}

export default Home
