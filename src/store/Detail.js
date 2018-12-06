import {
  observable,
  // action
} from 'mobx';

// import { message } from 'antd'

class Detail {
  @observable
  data;

  constructor() {
    this.data = {
      loading: false,
      info: {
        content: '',
        title: '',
        publishAt: '',
        enclosure: null,
      },
    };
  }

  //   @action
  //   getCcnuArticleDetail(id) {
  //     this.data.loading = true;
  //     G.api
  //       .getCcnuArticleDetail({ urlParams: { articleId: id } })
  //       .then((data) => {
  //         const info = data;
  //         this.data = {
  //           loading: false,
  //           info,
  //         };
  //       })
  //       .catch((data) => {
  //         console.error('获取详情失败');
  //       });
  //   }
}

export default Detail;
