import dayjs from 'dayjs';

const Emoji = {
  smile: '/images/emoji/smile.png',
  sleeping: '/images/emoji/sleeping.png',
  angry: '/images/emoji/angry.png',
  puke: '/images/emoji/puke.png'
};

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const changeDateFormatPopup = (someDate) => dayjs(someDate).format('DD MMMM YYYY');
const changeDateFormatComment = (someDate) => dayjs(someDate).hour(someDate).format('YYYY/MM/DD');
const changeDateFormatCard = (someDate) => dayjs(someDate).format('YYYY');
const changeHoursFormat = (minutes) => dayjs(minutes).minute(minutes).format('h[h] mm[m]');

export {getRandomNumberInRange, changeDateFormatPopup, changeDateFormatCard, changeHoursFormat, changeDateFormatComment, Emoji};
