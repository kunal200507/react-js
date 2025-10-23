import { Input, Button, Editors } from './index.js'
import { useForm } from 'react-hook-form'
import React, { useState, useRef } from 'react';

function Createpost() {
    const { register, handleSubmit } = useForm()
    const [content, setContent] = useState('<p>Initial content</p>');
    const editorRef = useRef(null);
    function createPost(data){
        console.log(data)
    }

    return (
        <div className="w-full h-auto bg-red-50 relative" >
            <div className="h-full w-1 bg-black absolute left-81">

            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        Internal Blog Request
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit(createPost)}>

                        <div>
                            <Input
                                type="text"
                                label="Blog Topic"
                                placeholder="Topic"
                                classNameLabel="block font-medium mb-1"
                                classNameInput="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                                {...register("topic", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div>
                            <Input
                                type="text"
                                label="Meta Description"
                                placeholder="Meta description of the blog"
                                classNameLabel="block font-medium mb-1"
                                classNameInput="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                                {...register("description", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Blog Content</label>
                            <Editors
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type={"submit"}
                                text={"post"}
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Createpost