import React from 'react';
import style from './pre-data.scss';

const PreData = ({ data }) => {
  if (!data.length) {
    return null;
  }
  const dataString = JSON.stringify(data, null, '  ');
  return <pre className={style['pre-data']}>{dataString}</pre>;
};

export default PreData;
