import React from 'react';
import PropTypes from 'prop-types';

import ModuleLine from '../../../../components/ModuleLine';

import './style.scss';

const Leader = (props) => {
  const { listLeader, handleRedirectToLeader } = props;
  return (
    <div className="leader-container">
      <ModuleLine className="add-more" title="中心领导">
        <span className="moreBtn" onClick={handleRedirectToLeader}>
          {'更多 >>'}
        </span>
      </ModuleLine>
      <div className="section-container justify-content">
        {listLeader.map(leader => (
          <div className="leader-item">
            <div className="leader-imgWrapper">
              <img src={leader.logo} alt={leader.title} />
            </div>
            <h3 className="leader-name">{leader.title}</h3>
            <h4 className="leader-title">{leader.subTitle}</h4>
            <p className="leader-p">{leader.brief}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Leader.propTypes = {
  listLeader: PropTypes.object,
  handleRedirectToLeader: PropTypes.func,
};

export default Leader;
