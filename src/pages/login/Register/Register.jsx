import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
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
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-xs my-20 mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder='Your Name'
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter Email'
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
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Photo Url</label>
                    <input
                        type="text"
                        id="photo"
                        placeholder='Photo Url'
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Register
                </button>
                <span className="label-text mt-1">
                    Already Have an Account? <Link to='/login' className='text-blue-700 text-base font-semibold'>Login</Link>
                </span>
                <span className="label-text"></span>
                <span className="label-text"></span>
            </form>
        </div>
    );
};

export default Register;