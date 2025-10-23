import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';

export default function Editors() {
    let content
    const { control } = useForm();
    const [initialValue, setInitialvalue] = useState("<p>Add your content...</p>")
    return (
        <Controller
            name='content'
            control={control}
            render={({field:{onChange}}) => {
                <Editor
                    apiKey='j6hre17x3q4vhsybzx68znp0m9fxpt1tu7zyuorvq9jwwwje'
                    initialValue={initialValue}
                    init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={onChange}
                />
            }}
        >

        </Controller>
    );
}