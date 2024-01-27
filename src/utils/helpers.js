import { formatDistance, parseISO } from 'date-fns';
import moment from 'moment/moment';

export const subtractDates = (dateStr1, dateStr2) =>
  moment(dateStr1).diff(moment(dateStr2), 'days')

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

export const getToday = function () {
  return moment().startOf('day').utc().toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'INR' }).format(
    value
  );
