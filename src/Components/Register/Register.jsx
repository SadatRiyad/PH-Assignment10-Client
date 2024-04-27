import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { BsInfoCircle } from "react-icons/bs";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { registerUser, updateUserProfile, setRender, setUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state || '/';
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, photoURL, password } = data;

        registerUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        setRender(true);
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        toast("Registration successful, you will be redirected to the home page shortly!", { type: "success", autoClose: 2000 });
                        setTimeout(() => {
                            navigate(redirect);
                        }, 3000)
                    });
            }).catch(() => {
                toast.error('Email already in use, please try another email', { autoClose: 2000 });
                reset();
            });
    };

    return (
        <div className="hero card-body px-0 md:px-12 min-h-screen bg-red">
            <Helmet>
                <title>Register | BB-Artistry</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome to <span className="text-blue font-extrabold">BB-Artistry</span> Registration...</h1>
                    <p className="py-6 text-base md:text-md">
                        Create an account to unlock exclusive features and access premium content. <br /> Once registered, you will be able to browse our listings and more.
                        If you have any questions or need assistance, feel free to contact our support team.
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card bg-white shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="text-blue font-bold text-4xl font-Rajdhani">Register Here</h5>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please input your name"
                                }
                            })} type="text" placeholder="your full name" className="input input-bordered" />
                            {errors?.name && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.name?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Please enter your email"
                                }, pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,9}$/,
                                    message: "Invalid email format"
                                }
                            })} type="email" placeholder="your email" className="input input-bordered" />
                            {errors?.email && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.email?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: "Please enter a photo URL"
                                }
                                // , pattern: {
                                //     value: /^https?:/i,
                                //     message: "Invalid image url format"
                                // } 
                            })} type="text" placeholder="your photoURL" className="input input-bordered" />
                            {errors?.photoURL && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.photoURL?.message}</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }, minLength: {
                                    value: 6,
                                    message: "Minimum length of 6 characters"
                                }, validate: {
                                    uppercase: value => value === value.toLowerCase() ? "Password must contain at least one uppercase letter" : undefined,
                                    lowercase: value => value === value.toUpperCase() ? "Password must contain at least one lowercase letter" : undefined
                                }
                            })} type={passwordVisible ? 'text' : 'password'} placeholder="your password" className="input input-bordered pr-10" />
                            {errors?.password && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.password?.message}</span>}
                            <button
                                type="button"
                                className="absolute inset-y-0 top-8 right-0 flex items-center px-3"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ?
                                    <AiOutlineEye size={20} />
                                    :
                                    <AiOutlineEyeInvisible size={20} />
                                }
                            </button>
                        </div>
                        <div className="items-center flex">
                            <input {...register("checkbox", {
                                required: {
                                    value: true,
                                    message: "Checkbox must be checked"
                                }
                            })} type="checkbox" default className="checkbox bg-white border-1 border-dotted border-blue checkbox-xs mr-1" />
                            <label htmlFor="terms" className="text-xs text-tertiary">I agree to the <a href="#" className="text-blue underline">terms and conditions!</a></label>
                            {errors?.checkbox && <span className="text-red text-xs mt-1 flex items-center"><BsInfoCircle className="mr-1 text-blue font-bold text-base" />{errors?.checkbox?.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Register</button>
                        </div>
                        <div className="mt-1">
                            <p className="text-xs md:text-sm">Or, Already have an account? <Link to="/login" className="text-blue underline font-semibold">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;