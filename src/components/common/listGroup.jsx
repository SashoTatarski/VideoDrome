import React from 'react';
import PropTypes from "prop-types";

// textProperty, valueProperty we are using them in order to be decoupled and be able to use it with any kind of list
const ListGroup = ({
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        let classname = 'list-group-item ';
        if (selectedItem === item) classname += 'active';

        return (
          <li
            key={item[valueProperty]}
            style={{ cursor: 'pointer' }}
            className={classname}
            onClick={() => onItemSelect(item)}
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
