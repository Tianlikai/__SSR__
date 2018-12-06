import React from 'react';

// import { Carousel } from 'antd'
import PropTypes from 'prop-types';
import ModuleLine from '../../../../components/ModuleLine';

import MyLoader from './MyLoader';

import './style.scss';

export default class Dynamic extends React.Component {
  static propTypes = {
    listSubBanner: PropTypes.object,
    handleMove: PropTypes.func.isRequired,
    handleRedirectToDynamic: PropTypes.func,
  };

  handleMove = (subBanner) => {
    const { handleMove } = this.props;
    handleMove(subBanner);
  };

  render() {
    const { listSubBanner, handleRedirectToDynamic } = this.props;
    const { loading } = listSubBanner;
    return (
      <div className="Section-item-col">
        <ModuleLine className="add-more" title="最新动态">
          <span className="moreBtn" onClick={handleRedirectToDynamic}>
            {'更多 >>'}
          </span>
        </ModuleLine>
        {loading && <MyLoader />}
        {/* <Carousel autoplay>
                    {list
                        && list.map(subBanner => (
                            <div
                                className='carousel-s-card'
                                onClick={this.handleMove.bind(null, subBanner)}
                            >
                                <img
                                    src={subBanner.cover}
                                    alt={subBanner.cover}
                                    title={subBanner.title}
                                />
                                <div className='subBanner-title'>
                                    <div className='T-ellipse'>
                                        {subBanner.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                </Carousel> */}
      </div>
    );
  }
}
