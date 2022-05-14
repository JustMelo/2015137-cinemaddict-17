import dayjs from 'dayjs';

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const changeDateFormatPopup = (someDate) => dayjs(someDate).format('DD MMMM YYYY');
const changeDateFormatComment = (someDate) => dayjs(someDate).format('YYYY/MM/DD hh[:]mm');
const changeDateFormatCard = (someDate) => dayjs(someDate).format('YYYY');
const changeHoursFormat = (minutes) => dayjs(minutes).minute(minutes).format('h[h] mm[m]');

export {getRandomNumberInRange, changeDateFormatPopup, changeDateFormatCard, changeHoursFormat, changeDateFormatComment };
