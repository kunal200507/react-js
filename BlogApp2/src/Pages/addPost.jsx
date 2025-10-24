import Createpost from "../components/Createpost"

export default function AddPost(){
    return(
        <div className="w-full h-auto bg-red-50 relative" >
            <div className="h-full w-1 bg-black absolute left-3xl">

            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 flex-col">
                <div className=" p-8 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        write your Blog here...
                    </h2>
                </div>
                <div className="w-full max-w-2xl">
                    <Createpost/>
                </div>
            </div>

        </div>
    )
}

