import { useState } from 'react';

type LoginFormData = {
  id: string;
  password: string;
};

type LoginFormErrors = {
  id: string;
  password: string;
};

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    id: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<LoginFormErrors>({
    id: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = { id: '', password: '' };
    let isValid = true;

    // ID validation
    if (!formData.id.trim()) {
      newErrors.id = '아이디를 입력하세요.';
      isValid = false;
    } else if (formData.id.length < 3) {
      newErrors.id = '아이디를 입력하지 않았거나 잘못된 계정입니다.';
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력하세요.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = '아이디 또는 비밀번호가 잘못되었습니다.';
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return {
    formData,
    errors,
    showPassword,
    rememberMe,
    handleInputChange,
    togglePasswordVisibility,
    toggleRememberMe,
    validateForm
  };
};
