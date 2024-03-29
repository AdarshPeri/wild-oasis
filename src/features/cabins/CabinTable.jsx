import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  const { isSmallScreen } = useWindowDimensions();

  if (isLoading) return <Spinner />;
  if (!cabins?.length) return <Empty resource='cabins' />;

  const filterValue = searchParams.get('discount') || 'all';
  let filteredCabins;

  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => !cabin.discount);
  else if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount);
  else filteredCabins = cabins;

  // sorting
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const columnDefinition = isSmallScreen
    ? '0.7fr 1fr 1fr 0.3fr'
    : '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr';

  return (
    <Menus>
      <Table columns={columnDefinition}>
        <Table.Header>
          {isSmallScreen ? (
            <>
              <div>Cabin</div>
              <div>Price</div>
              <div>Discount</div>
              <div></div>
            </>
          ) : (
            <>
              <div></div>
              <div>Cabin</div>
              <div>Capacity</div>
              <div>Price</div>
              <div>Discount</div>
              <div></div>
            </>
          )}
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
