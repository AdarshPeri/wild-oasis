import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin was updated successfully!');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isEditing, editCabin };
};
