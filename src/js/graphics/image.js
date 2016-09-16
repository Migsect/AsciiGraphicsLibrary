"use strict";

var Item = require("Item");

var Image = function()
{
  var self = this;
  Object.defineProperties(self,
  {
    /**
     * List of components that make up this image.
     * 
     * @type {Component[]}
     */
    components:
    {
      value: []
    }
  });
};

Object.defineProperty(Image, "prototype", Item.prototype);
Object.defineProperties(Image.prototype,
{
  render:
  {
    value: function() {}
  }
});

module.exports = Image;
