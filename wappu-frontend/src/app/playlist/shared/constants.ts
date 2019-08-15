import { Radio } from '../../core/models';

export const RADIO_EDITIONS: Radio[] = [
// {id: '2016', startAt: new Date('2016-04-10T00:00:00+03:00'), endAt: new Date('2016-04-31T23:59:59+03:00')},
// {id: '2017', startAt: new Date('2017-04-10T00:00:00+03:00'), endAt: new Date('2017-04-31T23:59:59+03:00')},
  {id: '2018', startAt: new Date('2018-04-17T00:00:00+03:00'), endAt: new Date('2018-04-30T23:59:59+03:00')},
  {id: 'ruska', startAt: new Date('2018-10-22T00:00:00+03:00'), endAt: new Date('2018-10-25T23:59:59+03:00')},
  {id: '2019', startAt: new Date('2019-04-15T00:00:00+03:00'), endAt: new Date('2019-04-31T23:59:59+03:00')},
  {id: 'assyt', startAt: new Date('2019-08-01T00:00:00+03:00'), endAt: new Date('2019-08-04T23:59:59+03:00')},
];

// TODO: compile time default

export const DEFAULT_RADIO = RADIO_EDITIONS.find(radio => radio.id === 'assyt');
export const DEFAULT = 'assyt';
