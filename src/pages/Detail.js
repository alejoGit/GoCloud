import React from 'react';
import { DetailHeader } from '../components/detail/DetailHeader';
import { DetailSubHeader } from '../components/detail/DetailSubHeader';
import { CampaignInfoList } from '../components/campaign/CampaignInfoList';
import { Table } from '../components/table/Table';
export default () => (
    <React.Fragment>
    	<DetailHeader />
    	<DetailSubHeader />
    	<CampaignInfoList />
    	<Table />
    </React.Fragment>
);