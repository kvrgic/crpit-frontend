import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/auth/authSlice';
import bgImg from '../../assets/3274408.jpg';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loginUser, {isLoading: loginloading}] = useLoginUserMutation()
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLogin = async(e) => {
      e.preventDefault();
      const data = {
        email,
        password
      }
      //console.log(data);
      try{
        
        const response = await loginUser(data).unwrap();
        console.log(response)
        const {token, user} = response;
        dispatch(setUser({...user, token}));
        alert("Uspješno ste se prijavili")
        navigate('/')
      }catch(error){
        setMessage("Molimo unesite ispravnu e-mail adresu i lozinku.")
      }
      
    }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
    {/* Slika pozadine - zamijeniti animacijom */}
    <img
      src={bgImg}
      alt="Pozadina"
      className="absolute inset-0 w-full h-full object-cover blur-sm z-0 opacity-80"
    />

    <div className='relative z-10 bg-white/90 backdrop-blur-md max-w-sm w-full rounded-xl shadow-2xl ring-1 ring-white/20 p-8 mt-10 transition-transform duration-300 hover:scale-[1.02]'>
        <h2 className='text-2xl font-semibold pt-5'>Prijavite se</h2>
        <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input type="email" value={email} 
            placeholder='E-mail adresa'
            required
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />

            <input type="password" value={password} 
            placeholder='Lozinka'
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />

            {
                message && <p className='text-red-500'>{message}</p>
            }
            <button 
            disabled={loginloading}
            className='w-full mt-5 bg-primary hover:bg-indigo-950 text-white font-medium py-3 rounded-md'>Prijava</button>

        </form>
        <p className='my-5 text-center'>Nemate korisnički nalog? 
            <Link to="/register" className="text-red-700 italic"> Registrujte se</Link> ovdje.</p>
    </div>
    </div>
  )
}

export default Login