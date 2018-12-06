import { LoadingArticle } from '../../components/Loading';
import factory from './factory';

import './CommonList.scss';

const CommonList = factory(LoadingArticle, 'T-breadcrumb', 'T-header', 'T-list');

export default CommonList;
