import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function Editors({ labelclassName ,control, initialValue = "<p>Add your content...</p>", label }) {
    return (
        <div className=' flex flex-col w-full' >
            <label className={labelclassName} htmlFor={label}>{label}</label>
            <Controller
                name='content'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey='j6hre17x3q4vhsybzx68znp0m9fxpt1tu7zyuorvq9jwwwje'
                        initialValue={initialValue}
                        value={value}
                        init={{
                            height: 500,
                            menubar: true,
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
                        onEditorChange={(content)=>onChange(content)}
                    />
                )}
            />
        </div>
    );
}