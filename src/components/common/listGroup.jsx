import PropTypes from 'prop-types';
import React from 'react';

// textProperty, valueProperty we are using them in order to be decoupled and be able to use it with any kind of list
const ListGroup = ({  
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem  
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        let className = 'list-group-item ';
        if (selectedItem === item) className += 'active';

        return (
          <li
            key={item[valueProperty]}
            style={{ cursor: 'pointer' }}
            className={className}
            onClick={() => onItemSelect(item)}
            data-testid="list-group"
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
