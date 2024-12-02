import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to StayVista</p>
        </div>
        <form
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='mb-2 text-sm'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full py-3 text-white rounded-md bg-rose-500'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex items-center justify-center p-2 m-3 space-x-2 border border-gray-300 cursor-pointer border-rounded'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?
          <Link
            to='/login'
            className='text-gray-600 hover:underline hover:text-rose-500'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
