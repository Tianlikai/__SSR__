import React from 'react';
import PropTypes from 'prop-types';

const ContentText = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h4 className="self-h4">
        研究中心拥有中国和美国在学习技术与大数据研究领域顶尖的研究团队，专注于以下主要研究方向：
      </h4>
      <h4>自适应学习（Adaptive Learning）</h4>
      <ul>
        <li>智能诊断性测评（Intelligent Diagnostic Test）</li>
        <li>最优化学习路径推荐（Optimal Learning Path Recommendation）</li>
        <li>动态知识追踪（Dynamic Knowledge Tracing）</li>
        <li>贝叶斯网络（Bayesian Network）</li>
      </ul>
      <h4>教育大数据分析（Learning Analytics）</h4>
      <ul>
        <li>学习曲线（Learning Curve）</li>
        <li>提分可视化（Visualized Learning Improvement）</li>
        <li>学习偏好（Learning Style and Preference）</li>
        <li>专注度（Engagement）</li>
      </ul>
      <h4>教学设计（Instructional Design）</h4>
      <ul>
        <li>TAD教学模式（Teacher + AI + Data Model of Teaching）</li>
        <li>教学评价（Instructional Evaluation）</li>
        <li>基于设计的研究（Design-based Research）</li>
        <li>教师培训（Teacher Education）</li>
      </ul>
      <h4>认知科学（Cognitive Science）</h4>
    </div>
  );
};

ContentText.propTypes = {
  className: PropTypes.string,
};

export default ContentText;
