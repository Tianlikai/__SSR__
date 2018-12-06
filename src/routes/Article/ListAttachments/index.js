import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const initXMLhttp = () => {
  let xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP'); // eslint-disable-line
  }
  return xmlhttp;
};

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise}
 */
function getBlob(url) {
  return new Promise((resolve) => {
    // const xhr = new XMLHttpRequest()
    const xhr = initXMLhttp();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.send();
  });
}

/**
 * 保存
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement('a');
    const body = document.querySelector('body');
    if (filename.indexOf('.txt') >= 0) {
      link.href = window.URL.createObjectURL(
        new Blob(['\uFEFF', blob], { type: 'text/plain;charset=utf-8' }),
      );
    } else {
      link.href = window.URL.createObjectURL(blob);
    }
    link.download = filename;

    // fix Firefox
    link.style.display = 'none';
    body.appendChild(link);

    link.click();
    body.removeChild(link);

    window.URL.revokeObjectURL(link.href);
  }
}

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
function download(url, filename) {
  getBlob(url).then((blob) => {
    saveAs(blob, filename);
  });
}

export default class ListAttachments extends React.Component {
  static propTypes = {
    attachments: PropTypes.array,
  };

  handleDownLoad = (value) => {
    const target = `https://lcdns-pic.learnta.com/${value.hash}`;
    const ua = navigator.userAgent;
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const uaWeChare = window.navigator.userAgent.toLowerCase();
    const isWeChare = uaWeChare.match(/MicroMessenger/i) === 'micromessenger';
    const isMobile = isIphone || isAndroid;

    const { name } = value;
    if (isWeChare || isMobile) {
      if (name.indexOf('.txt') >= 0) {
        const url = `data:text/html;charset=utf-8,${target}`;
        window.open(url);
      } else {
        window.open(target);
      }
    } else {
      download(target, name);
    }
    // const target = `https://lcdns-pic.learnta.com/${value.hash}`
    // const downloadLink = document.createElement('a')
    // const name = value.name
    // downloadLink.setAttribute('href', target)
    // downloadLink.setAttribute('download', name)
    // downloadLink.click()
  };

  render() {
    const { attachments } = this.props;
    return (
      <div className="attachments-container">
        {attachments.map(item => (
          <div key={item.hash} onClick={this.handleDownLoad.bind(null, item)}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}
