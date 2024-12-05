
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MovementCalender from './movementCalender/MovementCalender';


function Movement() {
  return (
    <Tabs
      defaultActiveKey="Calender"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Calender" title="Calender">
        <MovementCalender />
      </Tab>
      <Tab eventKey="Cohort" title="Cohort">
      <MovementCalender />
      </Tab>
    </Tabs>
  );
}

export default Movement;








