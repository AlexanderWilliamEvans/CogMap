import overviewMapControl from './Overview/Overview';
import NorthArrowControl from './Northarrow/Northarrow';
import MagnifyControl from './Magnify/Magnify';



export default ({
    overview: overviewMapControl,
    northarrow: new NorthArrowControl(),
    magnifier: new MagnifyControl()
});