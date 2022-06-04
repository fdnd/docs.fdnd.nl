/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
module.exports = (collection) =>
  collection.sort((a, b) => (Number(a.data.order) > Number(b.data.order) ? 1 : -1))
