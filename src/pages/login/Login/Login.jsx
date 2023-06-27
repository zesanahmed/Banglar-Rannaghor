import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-xs mt-20 mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
                Log In
            </button>
            <span className="label-text mt-1">
                Don't Have an Account? <Link to='/register' className='text-blue-700 text-base font-semibold'>Register</Link>
            </span>
            <span className="label-text"></span>
            <span className="label-text"></span>
        </form>
    );
};

export default Login;