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
      value: charMatrix
    },
    /**
     * The hexcode depicting the color of this component
     * 
     * @type {Hex Code}
     */
    color:
    {
      value: null
    },
    backgroundColor:
    {
      value: null
    },
    styles:
    {
      value: []
    }
  });
};

Object.defineProperty(Component, "prototype", Item.prototype);
Object.defineProperties(Component.prototype,
{});
