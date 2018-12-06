import React from 'react';
import PropTypes from 'prop-types';

import ModuleLine from '../../../../components/ModuleLine';
import MyLoader from './MyLoader';

import './style.scss';

export default class Study extends React.Component {
  static propTypes = {
    listResearch: PropTypes.object,
    handleMove: PropTypes.func.isRequired,
    handleRedirectToResearch: PropTypes.func,
  };

  handleMove = (info) => {
    const { handleMove } = this.props;
    handleMove(info);
  };

  render() {
    const { listResearch, handleRedirectToResearch } = this.props;
    const { loading, list } = listResearch;
    return (
      <div className="Section-item-col">
        <ModuleLine className="add-more" title="最新成果">
          <span className="moreBtn" onClick={handleRedirectToResearch}>
            {'更多 >>'}
          </span>
        </ModuleLine>
        {loading && <MyLoader />}
        <ul className="list-container">
          {list
            && list.map((info) => {
              const { title, publishAt } = info;
              return (
                <li title={`${title}-${publishAt}`} onClick={this.handleMove.bind(null, info)}>
                  <div className="list-text">{title}</div>
                  <div className="list-time">{publishAt}</div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
