"use strict";

var Item = function() {

};

Object.defineProperties(Item.prototype,
{
  render:
  {
    /**
     * Renders the item, returning HTML that displays the item.
     * @return {HTML String} HTML string that will display the item.
     */
    value: function()
    {
      throw new Error("'.render()'' not implemented");
    }
  }
});

module.exports = Item;
