import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const { isSmallScreen } = useWindowDimensions();
  const rowType = isSmallScreen ? 'vertical' : 'horizontal';
  return (
    <>
    <Row type={rowType}>
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations />
    </Row>

    <BookingTable />
    </>
  );
}

export default Bookings;
