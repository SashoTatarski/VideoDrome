import React from 'react';
import PropTypes from 'prop-types';

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

Like.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Like;
