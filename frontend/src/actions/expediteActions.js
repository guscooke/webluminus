const incrementExpediteCount = () => ({
  type: "INCREMENT_EXPEDITE_COUNT",
});

const decrementExpediteCount = () => ({
  type: "DECREMENT_EXPEDITE_COUNT",
});

const setExpediteCount = ({ count }) => ({
  type: "SET_EXPEDITE_COUNT",
  count,
});

module.exports = {
  incrementExpediteCount,
  decrementExpediteCount,
  setExpediteCount,
};
