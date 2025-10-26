import { useParams } from "react-router"
import userdb from "../appwrite/appwriteDb"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Post() {
    const {slug} = useParams()
    const [topic, setTopic] = useState("")
    const [content, setContent] = useState("")
    const [name, setName] = useState("")
    const userData = useSelector((state)=>state.appwriteAuthstore.data)
    useEffect(()=>{
        async function getPost() {
            const postData = await userdb.getpost(slug,userData.$id)
            setTopic(postData.topic)
            setContent(postData.content)
            setName(userData.name)
        }
    },[])
    return (
        <div className="flex justify-center" >
        <div className="p-10 flex flex-col w-1/2 items-start ">
            
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{topic}</h1>

                {JSON.parse(content)}

                <p className="text-lg italic text-gray-600 mb-6">By <span className="font-semibold">{name}</span></p>
            </div>
        </div>
    )
}