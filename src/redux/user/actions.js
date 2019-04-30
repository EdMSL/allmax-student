import Types from './constants';

const changeTime = () => ({
  type: Types.CHANGE_TIME,
});

const addDate = date => ({
  type: Types.ADD_DATE,
  date,
});

export {
  changeTime,
  addDate,
};
