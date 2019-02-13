import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

class CategoryProgress extends React.Component {
  calculatePercentage = () => {
    const { spend, budget } = this.props;
    return spend / budget * 100;
  }

  render() {
    return (
      <>
        <Progress percent={this.calculatePercentage()} />
      </>
    )
  }
}

export default CategoryProgress;
