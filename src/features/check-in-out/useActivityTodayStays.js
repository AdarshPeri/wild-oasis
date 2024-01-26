import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

export const useActivityTodayStays = () => {
  const { isLoading, data: stays } = useQuery({
    queryKey: ['todayActivity'],
    queryFn: getStaysTodayActivity,
  });

  return { isLoading, stays };
};
