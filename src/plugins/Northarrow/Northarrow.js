import 'ol/ol.css';
import {Control } from 'ol/control';

//
// Define rotate to north control.
//

const NorthArrowControl = /*@__PURE__*/(function (Control) {
  function NorthArrowControl(opt_options) {
    var options = opt_options || {};

    var button = document.createElement('button');
    button.innerHTML = 'N';

    var element = document.createElement('div');
    element.className = 'rotate-north ol-unselectable ol-control';
    element.appendChild(button);

    Control.call(this, {
      element: element,
      target: options.target,
    });

    button.addEventListener('click', this.handleRotateNorth.bind(this), false);
  }

  if ( Control ) NorthArrowControl.__proto__ = Control;
  NorthArrowControl.prototype = Object.create( Control && Control.prototype );
  NorthArrowControl.prototype.constructor = NorthArrowControl;

  NorthArrowControl.prototype.handleRotateNorth = function handleRotateNorth () {
    this.getMap().getView().setRotation(0);
  };

  return NorthArrowControl;
}(Control));

export default NorthArrowControl