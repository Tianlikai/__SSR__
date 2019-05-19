import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './style.scss';

@withRouter
export default class Item extends React.Component {
  static propTypes = {
    type: PropTypes.number,
    articleId: PropTypes.number,
    logo: PropTypes.any,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    brief: PropTypes.string,
    ARTICLE_TYPE: PropTypes.object,
    history: PropTypes.object,
  };

  handleMoveTo = () => {
    const {
      type, articleId, ARTICLE_TYPE, history,
    } = this.props;
    if (!type) return null;
    const path = ARTICLE_TYPE[type];
    history.push(`${path}${articleId}`);
    return null;
  };

  render() {
    const {
      logo, title, subTitle, brief,
    } = this.props;
    const text = brief.replace(/<[^>]*>/g, '').replace(/你的浏览器不支持/g, '');
    const __html = { __html: text || title }; // eslint-disable-line
    return (
      <div className="T-item">
        {logo && (
          <div className="T-item-logo" onClick={this.handleMoveTo}>
            <img src={logo} alt="logo" />
          </div>
        )}
        <div className="T-item-info">
          <h3 className="T-item-info-title T-ellipse" title={title} onClick={this.handleMoveTo}>
            {title}
          </h3>
          <h4 className="T-item-info-subTitle T-ellipse">{subTitle}</h4>
          <p className="T-item-info-Brief T-mul-ellipse" dangerouslySetInnerHTML={__html} />
        </div>
      </div>
    );
  }
}
