import { LoadingCard } from '../../components/Loading';
import factory from './factory';

import './CommonListCard.scss';

const CommonListCard = factory(LoadingCard, 'T-card-breadcrumb', 'T-card-header', 'T-card-list');

export default CommonListCard;
