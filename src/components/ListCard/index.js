import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './Item';

import './style.scss';

const ListItems = (props) => {
  const { config, className, ARTICLE_TYPE } = props;
  const cn = classNames('listItems-container', {
    [className]: className,
  });
  return (
    <div className={cn}>
      {config && config.map(item => <Item ARTICLE_TYPE={ARTICLE_TYPE} {...item} />)}
    </div>
  );
};

ListItems.propTypes = {
  className: PropTypes.string,
  config: PropTypes.array,
  ARTICLE_TYPE: PropTypes.object,
};

export default ListItems;
