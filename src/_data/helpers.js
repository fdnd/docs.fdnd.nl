module.exports = {
  /**
   * Returns back class active based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    return itemUrl === pageUrl || (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0)
      ? ' class="active"'
      : ''
  },
}
