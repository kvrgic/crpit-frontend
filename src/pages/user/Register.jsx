import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/features/auth/authApi';
import bgImg from '../../assets/3274408.jpg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [message, setMessage] = useState('');

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = '';

    if (name === 'username') {
      const trimmed = value.trim();
      if (trimmed.length === 0) {
        error = 'Ime je obavezno';
      }
    }

    if (name === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) error = 'Unesite ispravan email';
    }

    if (name === 'password') {
      if (value.length < 6) error = 'Lozinka mora imati barem 6 karaktera';
      else if (!/[A-Z]/.test(value)) error = 'Lozinka mora sadržavati barem jedno veliko slovo';
      else if (!/[0-9]/.test(value)) error = 'Lozinka mora sadržavati barem jedan broj';
      else if (!/[^A-Za-z0-9]/.test(value)) error = 'Lozinka mora sadržavati barem jedan specijalni znak';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (field, value) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, value);
  };

  const getBorderStyle = (field) => {
    if (!touched[field]) return '';
    return errors[field] ? 'border border-red-500' : 'border border-green-500';
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const newErrors = {};

    if (trimmedUsername.length === 0) {
      newErrors.username = 'Ime je obavezno';
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Unesite ispravan email';
    }

    if (password.length < 6) {
      newErrors.password = 'Lozinka mora imati barem 6 karaktera';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Lozinka mora sadržavati barem jedno veliko slovo';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Lozinka mora sadržavati barem jedan broj';
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newErrors.password = 'Lozinka mora sadržavati barem jedan specijalni znak';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ username: true, email: true, password: true });
      setMessage("Molimo ispravite greške u formi.");
      return;
    }

    try {
      await registerUser({ username: trimmedUsername, email, password }).unwrap();
      alert("Uspješno ste se registrovali!");
      navigate("/login");
    } catch (error) {
      console.log("GREŠKA SA SERVERA:", error);
      if (error.data?.errors) {
        const serverErrors = {};
        error.data.errors.forEach(err => {
        serverErrors[err.param] = err.msg;
        });
        setErrors(serverErrors);
        setTouched({ username: true, email: true, password: true });
        setMessage("Molimo ispravite greške označene ispod.");
      } else if (error.data?.message) {
      setMessage(error.data.message);
      } else {
        setMessage("Neuspješna registracija!");
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
      <img
        src={bgImg}
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover blur-sm z-0 opacity-80"
      />

      <div className="relative z-10 bg-white/90 backdrop-blur-md max-w-sm w-full rounded-xl shadow-2xl ring-1 ring-white/20 p-8 mt-10 transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold pt-5">Registrujte se</h2>
        <form onSubmit={handleRegister} className="space-y-5 max-w-sm mx-auto pt-8">

          {/* Ime */}
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
                validateField('username', e.target.value);
              }}
              onBlur={(e) => handleBlur('username', e.target.value)}
              placeholder="Korisničko ime"
              className={`w-full bg-bgPrimary focus:outline-none px-5 py-3 ${getBorderStyle('username')}`}
            />
            {touched.username && errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField('email', e.target.value);
              }}
              onBlur={(e) => handleBlur('email', e.target.value)}
              placeholder="E-mail adresa"
              className={`w-full bg-bgPrimary focus:outline-none px-5 py-3 ${getBorderStyle('email')}`}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Lozinka */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateField('password', e.target.value);
              }}
              onBlur={(e) => handleBlur('password', e.target.value)}
              placeholder="Lozinka"
              className={`w-full bg-bgPrimary focus:outline-none px-5 py-3 pr-16 ${getBorderStyle('password')}`}
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
            >
            {showPassword ? (
            <EyeSlashIcon className="h-4 w-4" />
            ) : (
            <EyeIcon className="h-4 w-4" />
            )}
            </button>

            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

          </div>

          {/* Poruka greške */}
          {message && <p className="text-red-600">{message}</p>}

          <button
            type="submit"
            className="w-full py-3 mt-5 bg-primary hover:bg-indigo-950 text-white font-medium rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Registrujem..." : "Registracija"}
          </button>
        </form>

        <p className="my-5 text-center">
          Već imate nalog?
          <Link to="/login" className="text-red-700 italic"> Prijavite se</Link> ovdje.
        </p>
      </div>
    </div>
  );
};

export default Register;
