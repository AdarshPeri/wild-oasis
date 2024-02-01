/* eslint-disable react/prop-types */
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import styled from 'styled-components';

const StyledStat = styled.div`
  grid-column: 1/5 ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }
`;
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Stat 1)
  const numBookings = bookings.length;

  // Stat 2)
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // Stat 3)
  const checkins = confirmedStays.length;

  // Stat 4)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <StyledStat>
      <Stat
        icon={<HiOutlineBriefcase />}
        title='Bookings'
        value={numBookings}
        color='blue'
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title='Sales'
        value={formatCurrency(sales)}
        color='green'
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title='Check ins'
        value={checkins}
        color='indigo'
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title='Occupancy rate'
        value={Math.round(occupation * 100) + '%'}
        color='yellow'
      />
    </StyledStat>
  );
}

export default Stats;
