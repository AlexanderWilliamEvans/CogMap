import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction';
import {OverviewMap, defaults as defaultControls} from 'ol/control';

const rotateWithView = document.getElementById('rotateWithView');

const overviewMapControl = (layer) => new OverviewMap({
  // see in overviewmap-custom.html to see the custom CSS used
  className: 'ol-overviewmap ol-custom-overviewmap',
  layers: [
    new TileLayer({
      source: layer
    }) ],
  collapseLabel: '\u00BB',
  label: '\u00AB',
  collapsed: false,
});

// rotateWithView.addEventListener('change', function () {
//   overviewMapControl.setRotateWithView(this.checked);
// });

export default overviewMapControl;