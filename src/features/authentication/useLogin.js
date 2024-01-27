import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard', { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoading, login };
};
