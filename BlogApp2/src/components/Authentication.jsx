import { useSelector } from "react-redux"

export default function Loader({ children }) {
    const userState = useSelector((state) => state.appwriteAuthstore.isLoggedIn)

    if (userState) {
        return children
    }

    return (
        <div className='w-screen h-screen flex'>
            <p className='justify-center items-center m-auto'>loading...</p>
        </div>
    )
}
