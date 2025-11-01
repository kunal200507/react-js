import { Input, Button, Editors } from './index.js'
import { useForm } from 'react-hook-form'
import React, { useState, } from 'react';
import userdb from '../appwrite/appwriteDb.js'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function    Createpost() {
    const userdata = useSelector((state)=>state.appwriteAuthstore.data)
    const navigate = useNavigate()
    const [imgUrl,setImgUrl] = useState(null)
    const [save,setSave] = useState(false)
    const [slugError, setSlugError] = useState(false)
    const { register, handleSubmit, control, setValue } = useForm()
    let slug=null;
    function imagePreview(data){
        setImgUrl(data.imageUrl)
        slug = data.topic.replaceAll(" ","-")
        if(slug.length>=36){
            setSlugError(true)
            setSave(false)
        }else{
            setSlugError(false)
            setValue("slug",slug,{shouldValidate:true})
            setSave(true)
        }
    }

    async function createPost(data) {
        data.userId = userdata.$id
        data.name = userdata.name
        console.log(data)
        try {
            const responce = await userdb.createPost({...data})
            if(responce){
                alert("posted")
                navigate(`/`)
            }else{
                alert("try Again")
            }

        } catch (error) {
            console.log(error)
            // alert(error)
        }
    }

    return (
        <form className="space-y-4" onSubmit={
            save?handleSubmit(createPost):handleSubmit(imagePreview)}>
            {
                slugError&&
                    <p className='text-red-600'>
                        The tittle is too long.
                    </p>
            }
            <div>
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
            
            {save&&<div>
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
                save&&<div>
                            <img
                                src={imgUrl}
                                alt="Blog-image"
                                className="rounded-lg mb-4 w-full h-auto object-cover"
                />
                        </div>
            }

            <div className="pt-4 flex flex-row justify-between">
                {save?<Button
                    type={"submit"}
                    text={"post"}
                    classNameButton={"bg-orange-500 w-full py-3 text-lg text-white font-bold rounded-lg transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"}
                />:<Button
                    type={"submit"}
                    text={"save"}
                    classNameButton={"bg-orange-500 w-full py-3 text-lg text-white font-bold rounded-lg transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"}
                />}
            </div>
        </form>
    )
}

export default Createpost