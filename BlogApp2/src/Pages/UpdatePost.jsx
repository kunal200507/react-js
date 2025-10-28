import { Input, Button, Editors } from '../components/index.js'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState, } from 'react';
import userdb from '../appwrite/appwriteDb.js'
import { useParams, useNavigate } from 'react-router';

export default function Updatepost() {

    const { slug } = useParams()
    const navigate = useNavigate()
    const [slugError, setSlugError] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)
    const [save, setSave] = useState(false)
    const [content, setContent] = useState(false)
    const { register, handleSubmit, control, setValue } = useForm()
    useEffect(() => {
        userdb.getpost(slug)
            .then((prevPost) => {
                setValue("slug", slug, { shouldValidate: true })
                setValue("topic", prevPost.topic, { shouldValidate: true })
                setValue("Description", prevPost.Description, { shouldValidate: true })
                setContent(prevPost.content)
                setImgUrl(prevPost.imageUrl)
            })
            .catch((error) => {
                console.log("Error please try again!!")
                console.log(error)
            })
    }, [])

    function imagePreview(data) {
        setImgUrl(data.imageUrl)
        slug = data.topic.replaceAll(" ", "-")
        if (slug.length >= 36) {
            setSlugError(true)
            setSave(false)
            navigate("/yourposts")
        } else {
            setSlugError(false)
            setValue("slug", slug, { shouldValidate: true })
            setSave(true)
        }
    }

    async function updatePost(data) {
        try {
            const responce = await userdb.updatePost(data)
            alert("post updated")
            console.log(responce)
        } catch (error) {
            console.log("Error please try again!!")
            console.log(error)
        }
    }

    return (
        <div className="w-full h-auto bg-red-50 relative -z-0" >
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 flex-col">
                <div className=" p-8 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        update your Blog
                    </h2>
                </div>
                <div className="w-full max-w-2xl">

                    <form className="space-y-4" onSubmit={
                        save ? handleSubmit(updatePost) : handleSubmit(imagePreview)}>
                        <div>
                            {
                                slugError &&
                                <p className='text-red-600'>
                                    The tittle is too long.
                                </p>
                            }
                            <Input
                                type="text"
                                label="Blog Topic"
                                placeholder="Topic"
                                classNameLabel="block font-medium mb-1"
                                classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500"
                                {...register("topic", {
                                    required: true,
                                })}
                            />
                        </div>

                        {save && <div>
                            <Input
                                type="text"
                                label="slug"
                                classNameLabel="block font-medium mb-1"
                                readOnly
                                classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500"
                                {...register("slug", {
                                    required: true,
                                })}
                            />
                        </div>}

                        <div>
                            <Input
                                type="text"
                                label="Description"
                                placeholder="description of the blog"
                                classNameLabel="block font-medium mb-1"
                                classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500"
                                {...register("description", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div>
                            <Editors
                                labelclassName={"block font-medium mb-1"}
                                label={"Blog Content"}
                                control={control}
                                initialValue={content}
                            />
                        </div>

                        <div >
                            <Input
                                type="text"
                                label="Image url"
                                placeholder="Enter url of image"
                                classNameLabel="block font-medium mb-1"
                                classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500"
                                {...register("imageUrl", {
                                    required: true,
                                })}
                            />
                        </div>

                        {
                            save && <div>
                                <img
                                    src={imgUrl}
                                    alt="Blog-image"
                                    className="rounded-lg mb-4 w-full h-auto object-cover"
                                />
                            </div>
                        }

                        <div className="pt-4 flex flex-row justify-between">
                            {save ? <Button
                                type={"submit"}
                                text={"Update Post"}
                                classNameButton={"bg-orange-500 w-full py-3 text-lg text-white font-bold rounded-lg transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"}
                            /> : <Button
                                type={"submit"}
                                text={"save"}
                                classNameButton={"bg-orange-500 w-full py-3 text-lg text-white font-bold rounded-lg transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"}
                            />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}