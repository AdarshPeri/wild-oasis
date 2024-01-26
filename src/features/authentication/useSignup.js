import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useSignup = () => {
    const { isPending: isLoading, mutate: signup } = useMutation({
      mutationFn: ({ fullName, email, password }) => signupApi({ fullName, email, password }),
      onSuccess: () => {
        toast.success('Account successfully created. Please verify the account from your email.')
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  
    return { isLoading, signup };

}

