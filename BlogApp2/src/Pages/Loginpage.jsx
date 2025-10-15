import { useNavigate } from 'react-router';
import blogPromoImage from '../assets/BlogLogin.jpg'; 
import {Input} from '../components/index'
import { useForm } from 'react-hook-form';
import userAuth from '../appwrite/appwriteAuth'
import { useSelector, useDispatch } from 'react-redux';
import {userLogin, userLogout} from '../store/userslice' 
const Login = () => {
  const navigate = useNavigate()
  const {register,handleSubmit} = useForm()
  const dispatch = useDispatch()
  const login = async(data) => {
    console.log(data)
    console.log(data.email)
    console.log(data.password)

    const userdata = await userAuth.userLogin(data.email,data.password)
    if(userdata){
      dispatch(userLogin(data))
    }
  };
  
  const brandOrange = "#FF8C00"; 
  const brandBlue = "#004D99";   
  const linkBlue = "#007BFF";    

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
        <img 
          src={blogPromoImage} 
          alt="Illustration of a person using a blog app" 
          className="w-full lg:w-1/2 h-auto max-h-96 lg:max-h-full object-contain rounded-lg shadow-lg" 
          />

      <div className="flex justify-center items-center p-8 sm:p-12 w-full lg:w-1/2">
        
        <form onSubmit={handleSubmit(login)} className="w-full max-w-md">
          
          {/* Title "Sign In" */}
          <h2 
            className="text-4xl font-extrabold mb-10" 
            style={{ color: brandBlue }}
          >
            Login
          </h2>
          
          <div className="mb-6">
            <Input 
            label="Email address" 
            type="email" 
            placeholder="Email address *" 
            classNameLabel="block text-base font-medium text-gray-700 sr-only" 
            classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500" {...register('email',{
              required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                }
            })}/>
          </div>

          <div className="mb-6">
            <Input 
            label="Password" 
            type="password" 
            placeholder="Password *" 
            classNameLabel="block text-base font-medium text-gray-700 sr-only" 
            classNameInput="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-opacity-100 transition duration-150 text-lg placeholder-gray-500 focus:border-orange-500" {...register("password",{
              required:true
            })}/>
          </div>
          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full py-3 text-lg text-white font-bold rounded-lg transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"
            style={{ backgroundColor: brandOrange }}
          >
            Sign In
          </button>

          <p className="text-center text-base text-gray-700">
            Don't have an account? 
            <a 
              className="font-bold hover:underline ml-1 cursor-pointer"
              style={{ color: linkBlue }} 
              onClick={()=>navigate('/signup')}
            >
              Create One Now
            </a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;