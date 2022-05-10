(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{597:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("CSS")]),s._v(" 动画已经出现好久了，但是至今对它掌握的很熟练的朋友并不多，可能是工作用不到，也肯能是兼容性等原因，但是作为一个前端程序员，个人认为动画这方面的东西还是要掌握的，因为随着老旧浏览器的逐渐淘汰兼容性的问题，我们已经可以慢慢忽略，所以这时，让我们的网页‘动起来’似乎变成一个异常有意思的事情了。")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[a("code",[s._v("CSS")]),s._v("动画，也称"),a("strong",[s._v("关键帧动画")]),s._v("。通过 "),a("code",[s._v("@keyframes")]),s._v(" 来定义关键帧。\n在视频领域，电影、电视、数字视频等可视为随时间连续变换的许多张画面，其中"),a("strong",[s._v("帧")]),s._v("是指每一张画面。\n在 "),a("code",[s._v("CSS")]),s._v(" 动画中，我们不需要定义每一帧的动画，只需要定义关键帧的动画，这也是为什么称之为关键帧动画的原因。")]),s._v(" "),a("h2",{attrs:{id:"定义关键帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义关键帧"}},[s._v("#")]),s._v(" 定义关键帧")]),s._v(" "),a("p",[s._v("上面说过，我们通过 "),a("code",[s._v("@keyframes")]),s._v(" 来定义关键帧，它的基本结构如下：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" 关键帧名称")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*或者*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" 关键帧名称")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("0%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("100%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v("from")]),s._v(" 表示最开始的那一帧，"),a("code",[s._v("to")]),s._v(" 表示结束时的那一帧。\n"),a("code",[s._v("CSS")]),s._v(" 动画用百分比来刻画一个动画周期，"),a("code",[s._v("from")]),s._v(" 其实是 0% 的别称，"),a("code",[s._v("to")]),s._v(" 是 100% 的别称")]),s._v(" "),a("p",[s._v("比如下面这个简单的动画：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" move")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们定义了一个名为 "),a("code",[s._v("move")]),s._v(" 的动画，这个动画的效果就是将某个元素从横轴 0px 移动到横轴 100px 的位置。")]),s._v(" "),a("h2",{attrs:{id:"使用动画-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用动画-animation"}},[s._v("#")]),s._v(" 使用动画 "),a("code",[s._v("animation")])]),s._v(" "),a("p",[s._v("我们已经定义好了关键帧动画，那么我们如何使用它呢，我们如何将它作用在某个具体的元素上呢？那就要使用到 "),a("code",[s._v("animation")]),s._v(" 这个属性了，在使用它之前，我们先简单定义一个 "),a("code",[s._v("DOM")]),s._v(" 结构：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("ball"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后定义如下 "),a("code",[s._v("CSS")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" move")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("上面我们定义了一个 300*300 的圆球，并定义了一个 "),a("code",[s._v("move")]),s._v(" 动画，要想使用这个动画，我们只需要在 "),a("code",[s._v("ball")]),s._v(" 里加上 "),a("code",[s._v("animation")]),s._v(" 属性即可")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("最终效果如下图所示：\n"),a("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move.gif",alt:"animation-move"}})]),s._v(" "),a("p",[s._v("而上面的代码是和下面这段代码等效的")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("通过 "),a("code",[s._v("animation-name")]),s._v(" 来指定动画使用的关键帧，这个是必须的,通过"),a("code",[s._v("animation-duration")]),s._v(" 指定了动画运行的时间为 2"),a("code",[s._v("s")])]),s._v(" "),a("p",[s._v("仔细观察的话，我们会发现，小球的运动并不是匀速的，这就引出了第三个属性 "),a("code",[s._v("animation-timing-function")]),s._v(", 默认值是 "),a("code",[s._v("ease")]),s._v("，即先快后慢。它有许多预设值："),a("code",[s._v("linear")]),s._v("、"),a("code",[s._v("ease")]),s._v("、"),a("code",[s._v("ease-in")]),s._v("、"),a("code",[s._v("ease-out")]),s._v("、"),a("code",[s._v("ease-in-out")]),s._v("。这些值其实都是 "),a("code",[s._v("cubic-bezier(n,n,n,n)")]),s._v(" 的特例。它们被称为贝塞尔曲线,所以我们可以通过贝塞尔曲线自定义我们的运动方式。如果我们想要小球匀速运动，那么只需要使用 "),a("code",[s._v("linear")]),s._v(" 这个值即可，代码如下所示：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("通过上面的设置，我们就可以发现，小球此时就是匀速运动了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move-linear.gif",alt:"animation-move-linear"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这里就不放 "),a("code",[s._v("gif")]),s._v(" 图了，因为 "),a("code",[s._v("gif")]),s._v(" 会重复播放，导致和上面的图片没啥区别,大家明白原理就好。")])]),s._v(" "),a("p",[s._v("说外上面的属性，我们接着来引出下一个属性，如果我们想要动画延迟加载，就需要用到这个属性了： "),a("code",[s._v("animation-delay")]),s._v(",它的值就是我们要延迟的时间，")]),s._v(" "),a("blockquote",[a("p",[s._v("延迟时间可以是负值，如果设置延迟为 -1s。动画会从 50% 加载到 100%。")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s linear 3s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("上面定义了动画延迟 3"),a("code",[s._v("s")]),s._v(" 执行：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-delay.gif",alt:"animation-delay"}})]),s._v(" "),a("p",[s._v("接下来我们来看下一个属性 "),a("code",[s._v("animation-iteration-count")]),s._v(", 这个属性是控制动画的执行次数的，他有两个取值：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("n")]),s._v(": 一个数字，定义应该播放多少次动画")]),s._v(" "),a("li",[a("code",[s._v("infinite")]),s._v(": 指定动画应该播放无限次（永远）")])]),s._v(" "),a("p",[s._v("这个很好理解，代码如下：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s linear 3s infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("上面的代码会使动画无限次的播放")])]),s._v(" "),a("p",[s._v("接下来，我们来看下一个属性 "),a("code",[s._v("animation-direction")]),s._v(", 这个属性定义了是否循环交替反向播放动画，它有如下属性值：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("normal")]),s._v(":默认值。动画按正常播放")]),s._v(" "),a("li",[a("code",[s._v("reverse")]),s._v(": 动画反向播放")]),s._v(" "),a("li",[a("code",[s._v("alternate")]),s._v(": 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。")]),s._v(" "),a("li",[a("code",[s._v("alternate-reverse")]),s._v(": 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。")])]),s._v(" "),a("p",[s._v("所以如果我们想要动画反向播放，加入如下代码即可：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s linear 3s infinite reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("效果如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-reverse.gif",alt:"animation-direction"}})]),s._v(" "),a("p",[s._v("然后我们再观察，小球从开始运动到结束位置之后，又立刻回到了初始位置，那么有没有办法让小球停止在结束位置或者别的其他的状态呢？")]),s._v(" "),a("p",[s._v("这就引出了我们的下一个属性 "),a("code",[s._v("animation-fill-mode")]),s._v(",它用于定义动画开始前或者动画结束后的元素所处的状态。它有四个取值：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("none")]),s._v(": 默认值。")]),s._v(" "),a("li",[a("code",[s._v("forwards")]),s._v("：表示动画完成后，元素状态保持为最后一帧的状态。")]),s._v(" "),a("li",[a("code",[s._v("backwards")]),s._v("：表示有动画延迟时，动画开始前，元素状态保持为第一帧的状态。")]),s._v(" "),a("li",[a("code",[s._v("both")]),s._v("：表示上述二者效果都有。")])]),s._v(" "),a("p",[s._v("所以如果想让小球停止在结束位置，我们只需要将这个属性设置为 "),a("code",[s._v("forwards")]),s._v(" 即可：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 2s linear 3s infinite reverse forwards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*等效于*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ball")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ... "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-fill-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" forwards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("接下来我们来看最后一个属性 "),a("code",[s._v("animation-play-state")]),s._v(", 这个属性的作用是控制动画的播放和暂停的，所以它有两个值：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("paused")]),s._v(": 指定暂停动画")]),s._v(" "),a("li",[a("code",[s._v("running")]),s._v(": 指定正在运行的动画（默认值）")])]),s._v(" "),a("p",[s._v("至此，"),a("code",[s._v("animation")]),s._v("的所有属性就介绍完成了，另外值得一提的是，这些属性是支持多个值的，只需要通过逗号进行隔开即可完成多段动画。")])])}),[],!1,null,null,null);t.default=e.exports}}]);