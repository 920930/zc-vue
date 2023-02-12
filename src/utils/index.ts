export const getConfig = (wx: any) => {
  const url: { origin: string; search?: string } = {
    origin: location.origin + location.pathname,
  };
  location.search.length && (url["search"] = location.search.slice(1));
  return fetch(`http://192.168.1.3:7001/init`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `url=${url.origin}&${url.search}`,
  })
    .then((ret) => ret.json())
    .then((ret) => {
      wx.config({
        debug: false, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
        appId: ret.appId, // 必填，公众号的唯一标识
        timestamp: ret.timestamp, // 必填，生成签名的时间戳
        nonceStr: ret.noncestr, // 必填，生成签名的随机串
        signature: ret.signature, // 必填，签名
        jsApiList: ["chooseImage", "openLocation"], // 必填，需要使用的 JS 接口列表
      });
      return ret;
    });
};

export const qianBtn = (appid: string) => {
  console.log(appid);
  //转码url decodeURIComponent encodeURIComponent
  const redirectUri = encodeURIComponent(location.href);
  // if(userStore.user?.openid){
  //   return router.push('/show/' + id)
  // }
  location.href =
    "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
    appid +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
};
