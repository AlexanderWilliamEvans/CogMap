import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import {getRenderPixel} from 'ol/render';
import {Control } from 'ol/control';

const MagnifyControl = () => (function (Control) {
  function MagnifyControl(opt_options) {
    var options = opt_options || {};

    var button = document.createElement('button');
    button.innerHTML = 'M';

    var element = document.createElement('div');
    element.className = 'magnify-control ol-unselectable ol-control';
    element.appendChild(button);

    Control.call(this, {
      element: element,
      target: options.target,
    });

    button.addEventListener('click', this.handleMagnifyControl.bind(this), false);
  }



  MagnifyControl.prototype.handleMagnifyControl = function handleMagnifyControl () {
    this.getMap().getView().setRotation(0);
  };

  return MagnifyControl;
}(Control));

export default MagnifyControl;