import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testsContext = require.context('.', true, /Spec$/);
testsContext.keys().forEach(testsContext);
