import React from 'react';
// import { Carousel } from 'antd'
import PropTypes from 'prop-types';

import './style.scss';

const Banner = () => (
  <div className="self-carousel">
    {/* <Carousel autoplay>
                {listBanner
                    && listBanner.map(banner => (
                        <div
                            className='carousel-card'
                            title={`点击前往: ${banner.hyperlink}`}
                        >
                            <a target='_blank' href={banner.hyperlink}>
                                <img
                                    src={banner.imgUrl}
                                    alt={banner.imgUrl}
                                />
                            </a>
                        </div>
                    ))}
        </Carousel> */}
  </div>
);

Banner.propType = {
  listBanner: PropTypes.object,
};

export default Banner;
