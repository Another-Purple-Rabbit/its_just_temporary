import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AppInput } from '../components/core/AppInput';

const register = () => {
  const [registration, setRegistration] = useState({});
  const router = useRouter();
  const { asPath, query } = router;


  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch('https://6409-77-244-144-29.ngrok-free.app/api/v1/auth/register', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(registration)
      })
  
      const data = await res.json();
  
      if (data.email[0] === 'This field is required.') {
        toast('Something went wrong 😓', { type: 'warning' })
        return;
      }
  
      console.log(data)
      
      setRegistration({})
      toast('Registration successfully! 🥳', { type: 'success' })
      localStorage.setItem('tokens', '1');
      router.push({ pathname: '/quotes', query }, asPath, { scroll: false });
      return;

    } catch (err) {
      toast('Something went wrong 😓', { type: 'warning' })
      return;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistration((prev) => ({ ...prev, [name]: value }))
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h flex flex-col items-end justify-end">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Link href="/" className="flex items-center font-semibold text-gray-900 dark:text-white">
          <Image
            className="mb-5"
            src="/img/header/logo.svg"
            alt="logo"
            width={130}
            height={24}
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <AppInput onChange={handleChange} label="First name" id="firstName" name="first_name" required />
              </div>
              <div>
                <AppInput onChange={handleChange} label="Last name" id="lastName" name="last_name" required />
              </div>
              <div>
                <AppInput onChange={handleChange} label="Your email" id="email" type="email" name="email" placeholder="name@company.com" required />
              </div>
              <div>
                <AppInput onChange={handleChange} label="Password" id="password" type="password" name="password" placeholder="*****" required />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? {' '}
                <Link href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default register