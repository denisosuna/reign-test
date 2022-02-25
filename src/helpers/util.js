import moment from "moment";

// Create formatter (English).

export const dateFormater = (date) => {
  return moment(date).fromNow();
};
