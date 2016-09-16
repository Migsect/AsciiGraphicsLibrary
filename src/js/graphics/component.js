"use strict";

var Item = require("Item");

var Component = function(charMatrix)
{
  var self = this;
  Object.defineProperties(self,
  {
    /**
     * A matrix of ascii characters
     * 
     * @type {String[][]}
     */
    characters:
    {
      writable: true,
      value: charMatrix
    },
    /**
     * The hexcode depicting the color of this component
     * 
     * @type {Hex Code}
     */
    color:
    {
      writable: true,
      value: null
    },
    /**
     * The hexcode depicting the background color of this component
     * 
     * @type {Hex Code}
     */
    backgroundColor:
    {
      writable: true,
      value: null
    },
    /**
     * List of the styles such as italics or bold.
     * 
     * @type {String[]}
     */
    styles:
    {
      writable: true,
      value: []
    }
  });
};

Object.defineProperty(Component, "prototype", Item.prototype);
Object.defineProperties(Component.prototype,
{
  render:
  {
    value: function() {}
  }
});

module.exports = Component;
