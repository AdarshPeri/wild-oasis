/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { format } from 'date-fns';
import { formatDistanceFromNow } from '../../utils/helpers';
import { formatCurrency } from '../../utils/helpers';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyRupee,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import DataItem from '../../ui/DataItem';
import { Flag } from '../../ui/Flag';
import moment from 'moment';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const StyledBookingDataBox = styled.section`
  padding: 3.2rem 4rem;
  overflow: hidden;

  @media (max-width: 40em) {
    margin-top: 2rem;
    padding: 0.2rem;
  }
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: 'Sono';
    font-size: 2rem;
    margin-left: 4px;
  }

  @media (max-width: 40em) {
    padding: 1rem 2rem;
    svg {
      height: 4.8rem;
      width: 4.8rem;
    }

    gap: 2rem;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
  @media (max-width: 40em) {
    padding: 1.6rem 2rem 0.6rem;
  }
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  @media (max-width: 40em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    & p:first-of-type {
      font-size: 2rem;
    }
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media (max-width: 40em) {
    padding: 0.4rem 0.8rem;

    svg {
      height: 4.8rem;
      width: 4.8rem;
    }
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

function BookingDataBox({ booking }) {
  const { isSmallScreen } = useWindowDimensions();

  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {moment().isSame(moment(startDate), 'days')
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && (
            <Flag
              src={countryFlag}
              alt={`Flag of ${country}`}
              size={isSmallScreen && 'large'}
            />
          )}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          {!isSmallScreen && <span>&bull;</span>}
          <p>{email}</p>
          {!isSmallScreen && <span>&bull;</span>}
          <p>
            <strong>National ID</strong> {nationalID}
          </p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label='Observations'
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label='Breakfast included?'>
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyRupee />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
