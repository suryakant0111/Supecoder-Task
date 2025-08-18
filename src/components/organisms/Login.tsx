import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    id: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = { id: '', password: '' };
    let isValid = true;

    // ID validation
    if (!formData.id.trim()) {
      newErrors.id = '아이디를 입력하세요.';
      isValid = false;
    } else if (formData.id.length < 3) {
      newErrors.id = '아이디를 입력하지 않았거나 잘못되었 계정정니다.';
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력하세요.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = '아이디 또는 비밀번호가 잘못됐지 않습니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Login attempt:', formData);
      // Handle successful login here
    }
  };

  const isFormValid = formData.id.trim() && formData.password.trim() && !errors.id && !errors.password;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg p-10 w-full max-w-md shadow-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-400 tracking-wider">LANDAS</h1>
        </div>

        {/* Login Form */}
        <div className="space-y-5">
          {/* ID Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              아이디
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                errors.id 
                  ? 'border-red-400 bg-red-50' 
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
              placeholder="IDIDID222"
            />
            {errors.id && (
              <p className="mt-1 text-xs text-red-500">{errors.id}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 pr-12 border rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  errors.password 
                    ? 'border-red-400 bg-red-50' 
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400 focus:ring-2"
              />
              <span className="ml-2 text-gray-700">아이디 저장</span>
            </label>
            <div className="text-gray-500">
              <span>아이디찾기</span>
              <span className="mx-1">|</span>
              <span>비밀번호 찾기</span>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className={`w-full py-3 rounded-md font-medium text-white transition-all duration-200 ${
              isFormValid
                ? 'bg-yellow-400 hover:bg-yellow-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            로그인
          </button>

          {/* Register Link */}
          <div className="text-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 text-sm underline"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;