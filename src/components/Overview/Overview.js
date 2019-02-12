import React from 'react';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Overview = () => (
  <div>
    <p>This will show the overview for the budgets.</p>

    <p>Budget 1</p>
    <Progress percent={80} />

    <p>Budget 2</p>
    <Progress percent={30} status="active" />

    <p>Total Budget</p>
    <Progress type="circle" percent={70} />
  </div>



);

export default Overview;
