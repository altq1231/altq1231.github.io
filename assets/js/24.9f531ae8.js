(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{590:function(t,i,e){"use strict";e.r(i);var d=e(10),v=Object(d.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("device-width 和 width 的区别")])]),t._v(" "),e("h2",{attrs:{id:"device-width-和-width-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#device-width-和-width-的区别"}},[t._v("#")]),t._v(" device-width 和 width 的区别")]),t._v(" "),e("p",[t._v("device-width 指的是设备本身的宽度，也就是屏幕的分辨率，比如说你手机的分辨率是 1440"),e("em",[t._v("900，这表示你的屏幕宽是 1440px， 所以 device-width 是 1440px。大部分的手机宽度不到 480px，（当然今后的趋势是越来越大)。iphone 4 的 device-width 就只有 320px，即便对外宣称有 640")]),t._v("960.这要归功于 iphone 的 retina 显示方式，也就是用两个像素来表示屏幕上一个 CSS 像素，IPAD3 也是这样的。官方说 IPAD3 跟前几代一样采用的 device-width 是 768px，它的实际分辨率达到了 1536*2048，就是这个原因。")]),t._v(" "),e("p",[t._v("尽管 device-width 在指定特定的设备更有用，相比之下 width 在创建响应式页面时用途更加广泛。下面的表格是一个例子，")]),t._v(" "),e("h2",{attrs:{id:"css-media-dimensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-media-dimensions"}},[t._v("#")]),t._v(" CSS Media Dimensions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Device")]),t._v(" "),e("th",[t._v("resolution (px)")]),t._v(" "),e("th",[t._v("device-width/ device-height (px)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("iPhone")]),t._v(" "),e("td",[t._v("320 x 480")]),t._v(" "),e("td",[t._v("320 x 480, in both portrait and landscape mode")])]),t._v(" "),e("tr",[e("td",[t._v("iPhone 4")]),t._v(" "),e("td",[t._v("640 x 960")]),t._v(" "),e("td",[t._v("320 x 480, in both portrait and landscape mode. device-pixel-ratio is 2")])]),t._v(" "),e("tr",[e("td",[t._v("iPhone 5, 5s")]),t._v(" "),e("td",[t._v("640 x 1136")]),t._v(" "),e("td",[t._v("320 x 568, in both portrait and landscape mode. device-pixel-ratio is 2")])]),t._v(" "),e("tr",[e("td",[t._v("iPhone 6")]),t._v(" "),e("td",[t._v("750 x 1334")]),t._v(" "),e("td",[t._v("375 x 667, in both portrait and landscape mode. device-pixel-ratio is 2")])]),t._v(" "),e("tr",[e("td",[t._v("iPhone 6")]),t._v(" "),e("td",[t._v("plus 1242 x 2208")]),t._v(" "),e("td",[t._v("414 x 736, in both portrait and landscape mode. device-pixel-ratio is 3")])]),t._v(" "),e("tr",[e("td",[t._v("iPad 1 and 2")]),t._v(" "),e("td",[t._v("768 x 1024")]),t._v(" "),e("td",[t._v("768 x 1024, in both portrait and landscape mode")])]),t._v(" "),e("tr",[e("td",[t._v("iPad 3")]),t._v(" "),e("td",[t._v("1536 x 2048")]),t._v(" "),e("td",[t._v("768 x 1024, in both portrait and landscape modeCSS pixel density is 2")])]),t._v(" "),e("tr",[e("td",[t._v("Samsung Galaxy S I and II")]),t._v(" "),e("td",[t._v("480 x 800")]),t._v(" "),e("td",[t._v("320 x 533, in portrait modeCSS pixel density is 1.5")])]),t._v(" "),e("tr",[e("td",[t._v("Samsung Galaxy S III")]),t._v(" "),e("td",[t._v("720 x 1280")]),t._v(" "),e("td",[t._v("360? x 640?, in portrait mode")])]),t._v(" "),e("tr",[e("td",[t._v("HTC Evo 3D")]),t._v(" "),e("td",[t._v("540 x 960")]),t._v(" "),e("td",[t._v("360 x 640, portrait modeCSS pixel density is 1.5")])]),t._v(" "),e("tr",[e("td",[t._v("Amazon Kindle Fire")]),t._v(" "),e("td",[t._v("1024 x 600")]),t._v(" "),e("td",[t._v("1024 x 600, landscape mode")])])])]),t._v(" "),e("p",[t._v("需要注意的是，在苹果设备上，device-width 指的总是设备处于肖像模式时的宽，"),e("strong",[t._v("不会随设备横竖屏转换变化")]),t._v("，就是说不管怎么换，宽都是不会变的，高也一样。")]),t._v(" "),e("h2",{attrs:{id:"max-width-指的是显示区域的宽度-比如浏览器的显示区域宽度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-width-指的是显示区域的宽度-比如浏览器的显示区域宽度"}},[t._v("#")]),t._v(" max-width 指的是显示区域的宽度，比如浏览器的显示区域宽度")]),t._v(" "),e("blockquote",[e("p",[t._v("（max-width is the width of the target display area, e.g. the browser）")])]),t._v(" "),e("h2",{attrs:{id:"max-device-width-指的是设备整个渲染-显示-区域的宽度-比如设备的实际屏幕大小-也就是设备分辨率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-device-width-指的是设备整个渲染-显示-区域的宽度-比如设备的实际屏幕大小-也就是设备分辨率"}},[t._v("#")]),t._v(" max-device-width 指的是设备整个渲染（显示）区域的宽度，比如设备的实际屏幕大小，也就是设备分辨率")]),t._v(" "),e("blockquote",[e("p",[t._v("（max-device-width is the width of the device’s entire rendering area, i.e. the actual device screen）")])]),t._v(" "),e("h2",{attrs:{id:"max-height-与-max-device-height-也是同理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-height-与-max-device-height-也是同理"}},[t._v("#")]),t._v(" max-height 与 max-device-height 也是同理")]),t._v(" "),e("p",[t._v("更进一步说，"),e("strong",[t._v("max-width 在窗口大小改变或横竖屏转换时会发生变化")])]),t._v(" "),e("p",[e("strong",[t._v("max-device-width 只与设备相关，横竖屏转换或改变尺寸，缩放都不会发生变化（部分 android 的宽高会互换而 IOS 不会）")])]),t._v(" "),e("h2",{attrs:{id:"max-device-width-和-max-width-的区别-表现在如下几个方面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-device-width-和-max-width-的区别-表现在如下几个方面"}},[t._v("#")]),t._v(" max-device-width 和 max-width 的区别，表现在如下几个方面：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("max-device-width 是设备整个显示区域的宽度，例如，真实的设备屏幕宽度。")])]),t._v(" "),e("li",[e("p",[t._v("max-width 是目标显示区域的宽度，例如，浏览器宽度。")])]),t._v(" "),e("li",[e("p",[t._v("如果使用 max-device-width，那么在 PC 浏览器上浏览网页时，缩小或放大浏览器时是不执行 CSS 的，因为“PC 设备”没有变化。但如果使用 max-width，缩小或放大浏览器时是执行 CSS 的，因为“显示区域”即浏览器大小发生了变化。")])]),t._v(" "),e("li",[e("p",[t._v("如果使用 max-device-width，那么当手机由竖变横时，CSS 是不执行的，因为“手机宽度”并没有变化。如果使用 max-width，那么当手机由竖变横时，CSS 是执行的，因为“显示区域”发生了变化。")])]),t._v(" "),e("li",[e("p",[t._v("通常，面向“移动设备”用户使用 max-device-width；面向“PC 设备”用户使用 max-width。")])])])])}),[],!1,null,null,null);i.default=v.exports}}]);