import React, { PropTypes } from 'react'

const MediaQuery = (props) => {
  const { size, children } = props;
  return (
    <div className={`MediaQuery-${size}`}> {children} </div>
  );
};

MediaQuery.defaultProps = {
    size: 'mobile'
}

MediaQuery.propTypes = {
    size: React.PropTypes.oneOf(['mobile', 'desktop'])
}

export default MediaQuery;