import {
  observable,
  // action
} from 'mobx';

// import { message } from 'antd'
// import QINIU_DOMAIN from '../config/setting';

class Article {
  @observable
  data;

  constructor(type) {
    this.type = type;
    this.data = {
      loading: false,
      count: 0,
      list: [],
    };
  }

  // @action
  // initList({ pageNo = 1, itemsPerPage = 10 }) {
  //   const params = {
  //     type: this.type,
  //     pageNo,
  //     itemsPerPage,
  //   };
  //   this.data.loading = true;
  //   G.api
  //     .getCcnuArticleList({ params })
  //     .then((data) => {
  //       const { count } = data;
  //       data.items.map((item) => {
  //         const info = Object.assign({}, ...item);
  //         info.subTitle = item.publishAt;
  //         if (this.type >= 6) {
  //           info.logo = item.cover.indexOf(QINIU_DOMAIN) < 0 ? QINIU_DOMAIN
  // + item.cover : item.cover;
  //         }
  //         info.brief = item.content;
  //         return info;
  //       });
  //       this.data = {
  //         loading: false,
  //         count,
  //         list: data.items,
  //       };
  //     })
  //     .catch(() => {
  //       console.error('获取列表失败');
  //     });
  // }
}

export default Article;
