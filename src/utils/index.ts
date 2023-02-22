export const getConfig = (serverUrl: string, wx: any) => {
  const url: { origin: string; search?: string } = {
    origin: location.origin + location.pathname,
  };
  location.search.length && (url["search"] = location.search.slice(1));
  return fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `url=${url.origin}&${url.search}`,
  })
    .then((ret) => ret.json())
    .then(({data}) => {
      console.log(1111)
      console.log(data)
      console.log(2222)
      wx.config({
        debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的 JS 接口列表
      });
      return data;
    });
};

export const qianBtn = (appid: string) => {
  //转码url decodeURIComponent encodeURIComponent
  const redirectUri = encodeURI(document.location.origin + document.location.pathname);
  document.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
  appid +
  "&redirect_uri=" +
  redirectUri +
  "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")
};
