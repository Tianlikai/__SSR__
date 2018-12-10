import { observable, action } from 'mobx';

import api from '../api/axios';

import DOMAIN from '../config/setting';

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

  @action
  initList({ pageNo = 1, itemsPerPage = 10 }) {
    const params = {
      type: this.type,
      pageNo,
      itemsPerPage,
    };
    this.data.loading = true;
    api
      .getCcnuArticleList({ params })
      .then((data) => {
        const { count } = data;
        const resp = data.items.map((item) => {
          const info = Object.assign({}, ...item);
          info.subTitle = item.publishAt;
          if (this.type >= 6) {
            info.logo = item.cover.indexOf(DOMAIN) < 0 ? DOMAIN + item.cover : item.cover;
          }
          info.brief = item.content;
          return info;
        });
        this.data = {
          loading: false,
          count,
          list: resp,
        };
      })
      .catch(() => {
        console.error('获取列表失败');
      });
  }
}

export default Article;
