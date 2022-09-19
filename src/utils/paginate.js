import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // This will return a lodash object and with it we can chain all the lodash methods
  // Value method returns a regular array
  return _(items).slice(startIndex).take(pageSize).value();
}
