import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // convert items array into lodash wrapper => (items)
  //.value() will return back regular array
  return _(items).slice(startIndex).take(pageSize).value();
}
