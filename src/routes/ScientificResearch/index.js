import { createRoute } from '../../util/core';

import Container from '../../layouts/Container';
import Direction from './Direction';
import Report from './Report';
import Activity from './Activity';
import Meeting from './Meeting';
import ReportReport from './ReportReport';
import ActivityReport from './ActivityReport';
import MeetingReport from './MeetingReport';
import NotFound from '../ErrorPage/404';

import navConfig from '../../config/navConfig';
import subNavConfig from '../../config/subNavConfig';

const data = {
  navConfig,
  subNav: subNavConfig.ScientificResearch,
};

const config = subNavConfig.ScientificResearch;

const routesConfig = () => ({
  path: '/scientificResearch',
  component: Container,
  subNav: config,
  PERMISSIONS: true,
  childRoutes: [
    Direction(),
    Report(),
    Activity(),
    Meeting(),
    ReportReport(data),
    ActivityReport(data),
    MeetingReport(data),
    NotFound(),
  ],
});

export default () => createRoute(routesConfig);
