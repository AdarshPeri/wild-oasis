import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';

export const useCheckout = () => {
  const queryClient = useQueryClient();

  const { isPending: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data?.id} successfully checked out.`);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => toast.error('Error while checking out! Please try again.'),
  });

  return { isCheckingOut, checkout };
};
