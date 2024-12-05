
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ButNow from './butNow/ButNow';
import HaveNot from './haveNot/HaveNot';
import DropOff from './dropOff/DropOff';
import Movement from './movement/Movement';

function BoostTabs() {
  return (
    <Tabs
      defaultActiveKey="But Now"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="But Now" title="But Now">
        <ButNow />
      </Tab>
      <Tab eventKey="Have Not" title="Have Not">
        <HaveNot />
      </Tab>
      <Tab eventKey="Drop Off" title="Drop Off">
        <DropOff />
      </Tab>
      <Tab eventKey="Movement" title="Movement">
        <Movement />
      </Tab>
    </Tabs>
  );
}

export default BoostTabs;








