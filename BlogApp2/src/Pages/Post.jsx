import { useParams } from "react-router"
import userdb from "../appwrite/appwriteDb"
import { useEffect, useState } from "react"

export default function Post() {
    const { slug } = useParams()
    const [topic, setTopic] = useState("")
    const [content, setContent] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        if (!slug) return
        userdb.getpost(slug)
            .then((postData) => {
                setTopic(postData.topic)
                setContent(postData.content)
                setName(postData.name)
            })
            .catch((error) => {
                console.log(error)
                alert("please refresh")
            })
    }, [slug])

    return (
        <div className="flex justify-center" >
            <div className="p-10 flex flex-col w-1/2 items-start ">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{topic}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                <p className="text-lg italic text-gray-600 mb-6">By <span className="font-semibold">{name}</span></p>
            </div>
        </div>
    )
}
