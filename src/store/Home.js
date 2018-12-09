import { observable, action } from 'mobx';

import api from '../api/axios';
import DOMAIN from '../config/setting';

// import { message } from 'antd'

const hxe = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/fbbd6da4e22f3c89c44f9fc342dbee5a.png';
const wf = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/910ba181f6681882cad3391e58506b4e.png';
const mzj = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/40c5652ff97f8134179177e234508685.png';
const wwj = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/311b5ae7a1b79732655b5f9e43c8244b.png';
const Ryan = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/29c349f6d9bc5eb45946457721bf1ec2.png';
const hff = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/716fa440c46991383b7da2b7f04716df.png';
const zzk = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/1ba165834556fa0b3198abd46e8a7c6c.png';

class Home {
  @observable
  listBanner;

  @observable
  listSubBanner;

  @observable
  listResearch;

  @observable
  listLeader;

  constructor() {
    this.listBanner = [];
    this.listSubBanner = {
      loading: false,
      list: [],
    };
    this.listResearch = {
      loading: false,
      list: [],
    };
    this.listLeader = [
      {
        title: '胡祥恩',
        subTitle: '研究中心学术委员会主任',
        brief:
          '华中师范大学心理学院院长，美国孟菲斯大学(University of Memphis)心理系、计算机科学系、计算机工程系终身教授。',
        logo: hxe,
      },
      {
        title: '王枫',
        subTitle: '研究中心执行主任',
        brief:
          '论答公司创始人兼CEO，美国佐治亚大学(University of Georgia)教育技术学博士， 宾夕法尼亚大学(University of Pennsylvania)、弗吉尼亚大学(University of Virginia)博士后。',
        logo: wf,
      },
      {
        title: '王伟军',
        subTitle: '研究中心副主任',
        brief:
          '华中师范大学信息管理系教授，博士生导师，华中师范大学青少年网络心理与行为教育部重点实验室常务副主任。',
        logo: wwj,
      },
      {
        title: '马镇筠',
        subTitle: '研究中心副主任',
        brief:
          '论答公司联合创始人兼首席数据科学家，美国弗吉尼亚大学(University of Virginia)统计学博士。',
        logo: mzj,
      },
    ];
    this.listExpert = [
      {
        title: '瑞安.贝克教授（Ryan Baker, Ph.D.）',
        subTitle: '',
        brief:
          '美国宾夕法尼亚大学(University of Pennsylvania)终身教授，宾夕法尼亚大学学习数据分析研究中心(Penn Center for Learning Analytics)主任。',
        logo: Ryan,
      },
      {
        title: '胡飞芳教授',
        subTitle: '',
        brief:
          '美国乔治华盛顿大学(George Washington University)统计学教授，中国人民大学统计与大数据研究院教授。',
        logo: hff,
      },
      {
        title: '周宗奎教授',
        subTitle: '',
        brief: '华中师范大学心理学院教授，华中师范大学青少年网络心理与行为教育部重点实验室主任。',
        logo: zzk,
      },
    ];
  }

  @action
  initListBanner() {
    api
      .initListBanner()
      .then((data) => {
        data.map((item) => {
          const info = Object.assign({}, ...item);
          info.imgUrl = item.imgUrl.indexOf(DOMAIN) < 0 ? DOMAIN + item.imgUrl : item.imgUrl;
          return info;
        });
        this.listBanner = data;
      })
      .catch(() => {
        console.error('获取Banner失败');
      });
  }

  @action
  initRecentList({ error = '获取数据失败', type }) {
    if (type === 1) {
      this.listSubBanner.loading = true;
    } else if (type === 2) {
      this.listResearch.loading = true;
    }
    api
      .getRecentList({ params: { type } })
      .then((data) => {
        if (type === 1) {
          const list = data.map((item) => {
            const info = Object.assign({}, ...item);
            info.cover = item.cover.indexOf(DOMAIN) < 0 ? DOMAIN + item.cover : item.cover;
            return info;
          });
          this.listSubBanner = {
            loading: false,
            list,
          };
        } else if (type === 2) {
          const list = data.map((item) => {
            const info = Object.assign({}, ...item);
            info.publishAt = item.publishAt.substring(0, 10);
            return info;
          });
          this.listResearch = {
            loading: false,
            list,
          };
        }
      })
      .catch(() => {
        console.error(error);
      });
  }
}

export default Home;
