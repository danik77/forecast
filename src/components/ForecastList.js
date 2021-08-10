import { Tab, Tabs, AppBar  } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import { useState, useEffect, Fragment } from 'react';
import ForecastDay from './ForecastDay';
import ForecastDays from './ForecastDays';

const ForecastList = (props) => {

  const [tab, setTab] = useState(0);

  const changeTab = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <TabContext value={tab}>
      {props.forecast.daily.map((item, index) => (
        <TabPanel key={index} value={index}>
          <ForecastDay item={item} index={index} />
        </TabPanel>
      ))}

    <AppBar position="static">
      <TabList 
        orientation="vertical" 
        onChange={changeTab} 
        aria-label='tabs'
        indicatorColor="primary"
        variant="scrollable"
        className='tablist'
      >
        {props.forecast.daily.map((item, index) => (
          <Tab 
            label= {
              <Fragment> 
                <ForecastDays item={item} index={index} />
              </Fragment> 
            } 
            tab={index} 
            key={index}
          />
        ))}
      </TabList>
    </AppBar>
    </TabContext>
  );
}

export default ForecastList;