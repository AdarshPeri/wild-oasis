import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useBookings } from './useBookings';
import BookingRow from './BookingRow';
import Pagination from '../../ui/Pagination';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function BookingTable() {
  const { bookings, count, isLoading } = useBookings();
  const { isSmallScreen } = useWindowDimensions();

  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resource='bookings' />;

  const columnDefinition = isSmallScreen
    ? '1fr 2.5fr 2fr 0.5fr'
    : '0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem';

  return (
    <Menus>
      <Table columns={columnDefinition}>
        <Table.Header>
          {!isSmallScreen ? (
            <>
              <div>Cabin</div>
              <div>Guest</div>
              <div>Dates</div>
              <div>Status</div>
              <div>Amount</div>
              <div></div>
            </>
          ) : (
            <>
              <div>Cabin</div>
              <div>Guest</div>
              <div>Status</div>
              <div></div>
            </>
          )}
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
