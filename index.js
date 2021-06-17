import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction';
import { defaults as defaultControls} from 'ol/control';
import overviewMapControl from './src/plugins/Overview/Overview';
import NorthArrowControl from './src/plugins/Northarrow/Northarrow';
import MagnifyControl from './src/plugins/Magnify/Magnify';
import plugins from './src/plugins/index';


const layer = new OSM();

const cogs = [
  plugins.overview(layer),
  plugins.magnifier,
  plugins.northarrow
];

const map = new Map({
  controls: defaultControls().extend(cogs),
  interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
  layers: [
    new TileLayer({
      source: layer,
    }) ],
  target: 'map',
  view: new View({
    center: [500000, 6000000],
    zoom: 7,
  }),
});