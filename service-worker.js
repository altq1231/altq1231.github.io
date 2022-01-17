/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "360view/view6.gif",
    "revision": "7bea0a1354cbb76ae7c8d488c7e00170"
  },
  {
    "url": "404.html",
    "revision": "c970952f572956c7660f58a3d0494afa"
  },
  {
    "url": "assets/css/0.styles.08741073.css",
    "revision": "bd93049f6e14579560f2a28d23283687"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.616af478.js",
    "revision": "8c3b919ad447fbaa18260634d22f3c98"
  },
  {
    "url": "assets/js/10.9b71cf09.js",
    "revision": "31afcdd3aaf87c18e7a9527021c354f6"
  },
  {
    "url": "assets/js/11.900f9e94.js",
    "revision": "31b2ffef356bb7c67b9ac88a42dbe2e7"
  },
  {
    "url": "assets/js/12.e6a4ce3f.js",
    "revision": "6b3a51342acce1bb1c2e3f4172864232"
  },
  {
    "url": "assets/js/13.22d26aa0.js",
    "revision": "bb65a2340be336efe2d3ecd753068f89"
  },
  {
    "url": "assets/js/14.4f0151d4.js",
    "revision": "b5f9d46497b1c6d221939b2fb2e1e740"
  },
  {
    "url": "assets/js/15.ad8589a7.js",
    "revision": "428a2a51d6f82c6c2fc14f061995210d"
  },
  {
    "url": "assets/js/16.d1c1d1ca.js",
    "revision": "3784b3286df918ae756a1a6c998e2bef"
  },
  {
    "url": "assets/js/17.27b33146.js",
    "revision": "516b713a6ff771d6245fea6d228c1f27"
  },
  {
    "url": "assets/js/18.bf74fa3a.js",
    "revision": "0b0ccd2f912f9bad18b89479c72764c0"
  },
  {
    "url": "assets/js/19.c0b29f73.js",
    "revision": "822b6ce6ebeb1924ecbefde30717baad"
  },
  {
    "url": "assets/js/20.72548e17.js",
    "revision": "b09d606c9f7002df04ca5878f70aba5f"
  },
  {
    "url": "assets/js/21.f3818bc6.js",
    "revision": "1f551ff398afdac5f29a128b4f3bf9e5"
  },
  {
    "url": "assets/js/22.5e4cc456.js",
    "revision": "cbd9b549f2c2dcc63c6588e777f0364a"
  },
  {
    "url": "assets/js/23.0b06c2cc.js",
    "revision": "54131703480ab10c691fc9b8861926c9"
  },
  {
    "url": "assets/js/24.9f531ae8.js",
    "revision": "6cdb4cb43f3f481edc65040780afa40b"
  },
  {
    "url": "assets/js/25.70ab454b.js",
    "revision": "c503fb59ffb16c44195b6d8df9503614"
  },
  {
    "url": "assets/js/26.634896f5.js",
    "revision": "5115d33de187a50f9b620051754f2cb9"
  },
  {
    "url": "assets/js/27.bce4d4da.js",
    "revision": "732f1deb58f18eb1f63c40470ba0222c"
  },
  {
    "url": "assets/js/28.4cd68213.js",
    "revision": "8bc50d860628026249a5280d5c550057"
  },
  {
    "url": "assets/js/29.4588c891.js",
    "revision": "f804145ff174cc1a5cf850ad4f13eb0c"
  },
  {
    "url": "assets/js/3.04c37bef.js",
    "revision": "3d436accc291c41184af681362e0d1fd"
  },
  {
    "url": "assets/js/30.e38d9c1c.js",
    "revision": "adcd9ba875364481386fcc7f35692121"
  },
  {
    "url": "assets/js/31.3baf0bd8.js",
    "revision": "402451955bf5260d5366c2cf0eeac8c8"
  },
  {
    "url": "assets/js/32.575f65ec.js",
    "revision": "671005c80cca6fac501ca473d24db3a5"
  },
  {
    "url": "assets/js/33.7fb211e8.js",
    "revision": "887b9d7e8fda2afd2ddcc22cbb068409"
  },
  {
    "url": "assets/js/34.53c6ff38.js",
    "revision": "33fa548f9f5a04828c2fe5bbd606c063"
  },
  {
    "url": "assets/js/4.9bdb35e8.js",
    "revision": "a6a57263eacf4b7c3e7815633b9c4412"
  },
  {
    "url": "assets/js/5.bbd6b741.js",
    "revision": "87fedaacee57be4fb8c8dbd841175491"
  },
  {
    "url": "assets/js/6.dab8b438.js",
    "revision": "27fe5c939663eeffb041880a36da5a81"
  },
  {
    "url": "assets/js/7.cfd7f34c.js",
    "revision": "94c5f6f44f5774db104990c32c56b92f"
  },
  {
    "url": "assets/js/8.928ec7ac.js",
    "revision": "32b33cc277a6419400dd1e65930f16f7"
  },
  {
    "url": "assets/js/9.5563984d.js",
    "revision": "d59da2f3ea2ab4bd3c1c61645270b3db"
  },
  {
    "url": "assets/js/app.7ead4073.js",
    "revision": "9689088e569fb6598349543ce5b7cc33"
  },
  {
    "url": "avatar.jpg",
    "revision": "1788c8cc40477e2adf40f764619d5243"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "banner.jpeg",
    "revision": "7f6079a09e888daae89de456e9d4a874"
  },
  {
    "url": "categories/index.html",
    "revision": "c74e360aed00d59c296264f324bb4a5f"
  },
  {
    "url": "categories/note/index.html",
    "revision": "7182e03d245bc0a4c32b77df872851cd"
  },
  {
    "url": "categories/note/page/2/index.html",
    "revision": "c99d0d4a1c5da38ff8296af406894a36"
  },
  {
    "url": "categories/note/page/3/index.html",
    "revision": "74b8e07e557ceadafb9c9c66588e4737"
  },
  {
    "url": "css-container-query/1.jpg",
    "revision": "77a58f1f23c4ed4b6293f4858940f5bb"
  },
  {
    "url": "css-container-query/10.jpg",
    "revision": "cc1cffbd40f5d449cae5d0b1f78bbe5c"
  },
  {
    "url": "css-container-query/11.jpg",
    "revision": "6f29e6f25cb96bc93c4486af3515f218"
  },
  {
    "url": "css-container-query/12.jpg",
    "revision": "c56522952ae3cfbc7607669805305c12"
  },
  {
    "url": "css-container-query/13.jpg",
    "revision": "6e4379859f9fa316648ae20c6fd91e7b"
  },
  {
    "url": "css-container-query/14.jpg",
    "revision": "dbb7b9111e43d652bb734ca1b36cfa32"
  },
  {
    "url": "css-container-query/15.jpg",
    "revision": "b233450c4c61503b6572789f22b5f48d"
  },
  {
    "url": "css-container-query/16.jpg",
    "revision": "326d7dc851c5acc6dd0872d334c69a82"
  },
  {
    "url": "css-container-query/2.jpg",
    "revision": "bc487d58ea0a6dc48860af3dc36ad658"
  },
  {
    "url": "css-container-query/3.jpg",
    "revision": "bc487d58ea0a6dc48860af3dc36ad658"
  },
  {
    "url": "css-container-query/4.jpg",
    "revision": "eca5b4b9770027b32dd3dabe7decccf3"
  },
  {
    "url": "css-container-query/5.jpg",
    "revision": "e11a24d53259ff70a7a96fc380f28b15"
  },
  {
    "url": "css-container-query/6.jpg",
    "revision": "d052c1692db7b9feeec6d3a559e07872"
  },
  {
    "url": "css-container-query/7.jpg",
    "revision": "9820fbf9ca4f02527ec2f6b4b7b904d4"
  },
  {
    "url": "css-container-query/8.jpg",
    "revision": "a72749adb4fe3c2ea14d02bd97e490aa"
  },
  {
    "url": "css-container-query/9.jpg",
    "revision": "36d2da70698ca829e41f6f5303fd4c2c"
  },
  {
    "url": "digital-scrolling/case1.gif",
    "revision": "6aa73d978391813ec480094e3f476d60"
  },
  {
    "url": "digital-scrolling/case2.gif",
    "revision": "7a69840504e3c8ccc8d63acce6e02949"
  },
  {
    "url": "digital-scrolling/case3.gif",
    "revision": "94db6676d7666d08910e1805e6c0d78f"
  },
  {
    "url": "digital-scrolling/num.gif",
    "revision": "9a3f0cc28c3c057b460410e50050d71c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img-bg/163.png",
    "revision": "737c6e745c3cb5a564bf82177bb61945"
  },
  {
    "url": "img-bg/bg.png",
    "revision": "4c49da98fa67236ad328ae7fa37a2c3a"
  },
  {
    "url": "img-bg/code1.png",
    "revision": "a0b918fd0342f911d874e1b3d8d8b0fa"
  },
  {
    "url": "img-bg/code2.png",
    "revision": "d731b4165495b4a3d33ad56619c1a6d6"
  },
  {
    "url": "img-bg/code3.png",
    "revision": "4f775351b568e2fff9dcb26cc38399ef"
  },
  {
    "url": "img-bg/code4.png",
    "revision": "d02b34a602f3ffea4ae3cf49b67a89ac"
  },
  {
    "url": "img-bg/code5.png",
    "revision": "36e20df14e8803965aebea52d8313faa"
  },
  {
    "url": "img-bg/code6.png",
    "revision": "141efdb581c3298da279e76781678116"
  },
  {
    "url": "index.html",
    "revision": "3956ab8ad470e1fc7df960269ed6c935"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mongodb/home.png",
    "revision": "01880b6cc0fbba66756f7f5dafec546a"
  },
  {
    "url": "mongodb/objectid.jpeg",
    "revision": "c970d468dfac6f2cc7194e6c64413b37"
  },
  {
    "url": "mongodb/step1.png",
    "revision": "9645221d2a5eb4d8d406c6ac35c9b4c2"
  },
  {
    "url": "mongodb/step2.png",
    "revision": "e048a4a84cd1782d064f5f69508027c2"
  },
  {
    "url": "mongodb/step3.png",
    "revision": "b5bff5123f4397ffbbc6a787c3504f45"
  },
  {
    "url": "mongodb/step4.png",
    "revision": "e5b68e7a87a9413ee4262e791376a853"
  },
  {
    "url": "mongodb/step5.png",
    "revision": "4deaf6cdd99624d9be759bee2c76e732"
  },
  {
    "url": "mongodb/step6.png",
    "revision": "158e4b810c9a2dc764afa9d6e88f129c"
  },
  {
    "url": "mongodb/step7.png",
    "revision": "34768311b94b781dfb90e0e05c821306"
  },
  {
    "url": "mongodb/step8.png",
    "revision": "5fbfb006f9bb4f7aad2263f35a272620"
  },
  {
    "url": "mongodb/step9.png",
    "revision": "e723cef5740b541cad107f5135b9c09e"
  },
  {
    "url": "note/annotation-specification.html",
    "revision": "74ceff091fe6339a5d3dd2ae317e70c1"
  },
  {
    "url": "note/auto-guideline.html",
    "revision": "598a3d039225673a8e4bb74ea2cc7336"
  },
  {
    "url": "note/bootstrap-guideline.html",
    "revision": "a0d9b703bad14d9c0a1d461a75f63d8e"
  },
  {
    "url": "note/checked.html",
    "revision": "fb979e3380ccfa84448748d554181452"
  },
  {
    "url": "note/create-360-views.html",
    "revision": "94a712c5ee8c4a96f36855457134e616"
  },
  {
    "url": "note/CSS-code-specification.html",
    "revision": "87f840fc9bb221e140bb0081daa9d86d"
  },
  {
    "url": "note/CSS-container-query.html",
    "revision": "95e00de76aed5b600dc1382389a72217"
  },
  {
    "url": "note/device-width.html",
    "revision": "5509aff6c2eec388f96ad5ac5ac408be"
  },
  {
    "url": "note/digital-scrolling.html",
    "revision": "49c3bb7490eecceca6be88d5f9c998f5"
  },
  {
    "url": "note/directory-and-naming-conventions.html",
    "revision": "04a695e7702bda7167352b0c8d5f48a9"
  },
  {
    "url": "note/front-end-engineer-specification.html",
    "revision": "6fd87a908b1f58d8d002845bb362222b"
  },
  {
    "url": "note/git.html",
    "revision": "ec60e1a3b4b8da8bf815292016b18a07"
  },
  {
    "url": "note/HTML-code-specification.html",
    "revision": "603ae6e95a7edfce40ea2edad893e2b6"
  },
  {
    "url": "note/image-extraction-background-color.html",
    "revision": "3610bdc13a3ffc7d7f31140a39b8e228"
  },
  {
    "url": "note/index.html",
    "revision": "e54ded659ac5ee5f6407d3e3040543fa"
  },
  {
    "url": "note/JavaScript-code-specification.html",
    "revision": "cce35df017ff699ce2365d18974d6f78"
  },
  {
    "url": "note/markdown-extended-syntax.html",
    "revision": "4709e7f79db33b8513148681e262a34a"
  },
  {
    "url": "note/media-screen-all.html",
    "revision": "b01e2e60e568dbae12873993585bcde3"
  },
  {
    "url": "note/MongoDB-basic.html",
    "revision": "acefa719603c04ff005e4470a2b54b39"
  },
  {
    "url": "note/Nodejs-MongoDB.html",
    "revision": "ac268bdfdb3732fd4f5493cb5db00807"
  },
  {
    "url": "note/study-list.html",
    "revision": "9668eb21df07f263d325c922d656134e"
  },
  {
    "url": "note/test.html",
    "revision": "aa63ab0123c3f03b6bbf1cb58f5e48fc"
  },
  {
    "url": "tag/index.html",
    "revision": "a1687aa99d44c8949993f11d991745fb"
  },
  {
    "url": "tag/note/index.html",
    "revision": "eef1c7f786f5a3fea2b343d50b779039"
  },
  {
    "url": "tag/note/page/2/index.html",
    "revision": "7e0243f98c31eb2785b88be5184599c0"
  },
  {
    "url": "tag/note/page/3/index.html",
    "revision": "8983bf1e9f7d004ed3649e197bbadc7c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2dd76ea2df86bbf48c074a2c42178c31"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
