import React from 'react';

const Like = ({ liked, onClick }) => {
  let classes = 'fa fa-heart';
  if (!liked) classes += '-o';
  return (
    <>
      <i
        data-testid="like"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
        className={classes}
        aria-hidden="true"
      ></i>
    </>
  );
};

export default Like;
