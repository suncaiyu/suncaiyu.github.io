(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{609:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("https://github.com/suncaiyu/LearnOpenGLCN")]),e._v(" "),a("h1",{attrs:{id:"纹理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纹理"}},[e._v("#")]),e._v(" 纹理")]),e._v(" "),a("h2",{attrs:{id:"纹理环绕方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纹理环绕方式"}},[e._v("#")]),e._v(" 纹理环绕方式")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("环绕方式")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("GL_REPEAT")]),e._v(" "),a("td",[e._v("对纹理的默认行为。重复纹理图像。")])]),e._v(" "),a("tr",[a("td",[e._v("GL_MIRRORED_REPEAT")]),e._v(" "),a("td",[e._v("和GL_REPEAT一样，但每次重复图片是镜像放置的。")])]),e._v(" "),a("tr",[a("td",[e._v("GL_CLAMP_TO_EDGE")]),e._v(" "),a("td",[e._v("纹理坐标会被约束在0到1之间，超出的部分会重复纹理坐标的边缘，产生一种边缘被拉伸的效果。")])]),e._v(" "),a("tr",[a("td",[e._v("GL_CLAMP_TO_BORDER")]),e._v(" "),a("td",[e._v("超出的坐标为用户指定的边缘颜色。")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://learnopengl-cn.github.io/img/01/06/texture_wrapping.png",alt:"avatar"}}),e._v("\n前面提到的每个选项都可以使用glTexParameter*函数对单独的一个坐标轴设置（s、t（如果是使用3D纹理那么还有一个r）它们和x、y、z是等价的）：")]),e._v(" "),a("p",[e._v("如果我们选择GL_CLAMP_TO_BORDER选项，我们还需要指定一个边缘的颜色。这需要使用glTexParameter函数的fv后缀形式，用GL_TEXTURE_BORDER_COLOR作为它的选项，并且传递一个float数组作为边缘的颜色值：")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("float borderColor[] = { 1.0f, 1.0f, 0.0f, 1.0f };\nglTexParameterfv(GL_TEXTURE_2D, GL_TEXTURE_BORDER_COLOR, borderColor);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"纹理过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纹理过滤"}},[e._v("#")]),e._v(" 纹理过滤")]),e._v(" "),a("p",[e._v("纹理坐标不依赖于分辨率(Resolution)，它可以是任意浮点值，所以OpenGL需要知道怎样将纹理像素(Texture Pixel，也叫Texel，译注1)映射到纹理坐标。当你有一个很大的物体但是纹理的分辨率很低的时候这就变得很重要了。你可能已经猜到了，OpenGL也有对于纹理过滤(Texture Filtering)的选项。纹理过滤有很多个选项，但是现在我们只讨论最重要的两种：GL_NEAREST和GL_LINEAR。")]),e._v(" "),a("p",[e._v("Texture Pixel也叫Texel，你可以想象你打开一张.jpg格式图片，不断放大你会发现它是由无数像素点组成的，这个点就是纹理像素；注意不要和纹理坐标搞混，纹理坐标是你给模型顶点设置的那个数组，OpenGL以这个顶点的纹理坐标数据去查找纹理图像上的像素，然后进行采样提取纹理像素的颜色。")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("GL_NEAREST")])]),e._v("（也叫邻近过滤，Nearest Neighbor Filtering）是OpenGL默认的纹理过滤方式。当设置为GL_NEAREST的时候，OpenGL会选择中心点最接近纹理坐标的那个像素。下图中你可以看到四个像素，加号代表纹理坐标。左上角那个纹理像素的中心距离纹理坐标最近，所以它会被选择为样本颜色：\n"),a("img",{attrs:{src:"https://learnopengl-cn.github.io/img/01/06/filter_nearest.png",div:"",align:"center"}})]),e._v(" "),a("p",[a("em",[a("strong",[e._v("GL_LINEAR")])]),e._v("（也叫线性过滤，(Bi)linear Filtering）它会基于纹理坐标附近的纹理像素，计算出一个插值，近似出这些纹理像素之间的颜色。一个纹理像素的中心距离纹理坐标越近，那么这个纹理像素的颜色对最终的样本颜色的贡献越大。下图中你可以看到返回的颜色是邻近像素的混合色：\n"),a("img",{attrs:{src:"https://learnopengl-cn.github.io/img/01/06/filter_linear.png",alt:"avatar"}})]),e._v(" "),a("p",[e._v("那么这两种纹理过滤方式有怎样的视觉效果呢？让我们看看在一个很大的物体上应用一张低分辨率的纹理会发生什么吧（纹理被放大了，每个纹理像素都能看到）：\n"),a("img",{attrs:{src:"https://learnopengl-cn.github.io/img/01/06/texture_filtering.png",alt:"avatar"}}),e._v("\nGL_NEAREST产生了颗粒状的图案，我们能够清晰看到组成纹理的像素，而GL_LINEAR能够产生更平滑的图案，很难看出单个的纹理像素。GL_LINEAR可以产生更真实的输出，但有些开发者更喜欢8-bit风格，所以他们会用GL_NEAREST选项。")]),e._v(" "),a("p",[e._v("当进行放大(Magnify)和缩小(Minify)操作的时候可以设置纹理过滤的选项，比如你可以在纹理被缩小的时候使用邻近过滤，被放大时使用线性过滤。我们需要使用glTexParameter*函数为放大和缩小指定过滤方式。这段代码看起来会和纹理环绕方式的设置很相似：")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"多级渐远纹理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多级渐远纹理"}},[e._v("#")]),e._v(" 多级渐远纹理")]),e._v(" "),a("p",[e._v("没太懂，记录一下")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("过滤方式")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("GL_NEAREST_MIPMAP_NEAREST")]),e._v(" "),a("td",[e._v("使用最邻近的多级渐远纹理来匹配像素大小，并使用邻近插值进行纹理采样")])]),e._v(" "),a("tr",[a("td",[e._v("GL_LINEAR_MIPMAP_NEAREST")]),e._v(" "),a("td",[e._v("使用最邻近的多级渐远纹理级别，并使用线性插值进行采样")])]),e._v(" "),a("tr",[a("td",[e._v("GL_NEAREST_MIPMAP_LINEAR")]),e._v(" "),a("td",[e._v("在两个最匹配像素大小的多级渐远纹理之间进行线性插值，使用邻近插值进行采样")])]),e._v(" "),a("tr",[a("td",[e._v("GL_LINEAR_MIPMAP_LINEAR")]),e._v(" "),a("td",[e._v("在两个邻近的多级渐远纹理之间使用线性插值，并使用线性插值进行采样")])])])]),e._v(" "),a("p",[e._v("就像纹理过滤一样，我们可以使用glTexParameteri将过滤方式设置为前面四种提到的方法之一：")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("一个常见的错误是，将放大过滤的选项设置为多级渐远纹理过滤选项之一。这样没有任何效果，因为多级渐远纹理主要是使用在纹理被缩小的情况下的：纹理放大不会使用多级渐远纹理，为放大过滤设置多级渐远纹理的选项会产生一个GL_INVALID_ENUM错误代码。")]),e._v(" "),a("h2",{attrs:{id:"加载与创建纹理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载与创建纹理"}},[e._v("#")]),e._v(" 加载与创建纹理")]),e._v(" "),a("p",[e._v("使用纹理之前要做的第一件事是把它们加载到我们的应用中。纹理图像可能被储存为各种各样的格式，每种都有自己的数据结构和排列，所以我们如何才能把这些图像加载到应用中呢？一个解决方案是选一个需要的文件格式，比如.PNG，然后自己写一个图像加载器，把图像转化为字节序列。写自己的图像加载器虽然不难，但仍然挺麻烦的，而且如果要支持更多文件格式呢？你就不得不为每种你希望支持的格式写加载器了。")]),e._v(" "),a("p",[e._v("另一个解决方案也许是一种更好的选择，使用一个支持多种流行格式的图像加载库来为我们解决这个问题。比如说我们要用的stb_image.h库。")]),e._v(" "),a("h3",{attrs:{id:"stb-image-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stb-image-h"}},[e._v("#")]),e._v(" stb_image.h")]),e._v(" "),a("p",[e._v("stb_image.h是Sean Barrett的一个非常流行的单头文件图像加载库，它能够加载大部分流行的文件格式，并且能够很简单得整合到你的工程之中。stb_image.h可以在这里下载。下载这一个头文件，将它以stb_image.h的名字加入你的工程，并另创建一个新的C++文件，输入以下代码：")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#define STB_IMAGE_IMPLEMENTATION\n#include "stb_image.h"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("通过定义STB_IMAGE_IMPLEMENTATION，预处理器会修改头文件，让其只包含相关的函数定义源码，等于是将这个头文件变为一个 .cpp 文件了。现在只需要在你的程序中包含stb_image.h并编译就可以了。")]),e._v(" "),a("p",[e._v("下面的教程中，我们会使用一张木箱的图片。要使用stb_image.h加载图片，我们需要使用它的stbi_load函数：")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('int width, height, nrChannels;\nunsigned char *data = stbi_load("container.jpg", &width, &height, &nrChannels, 0);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("这个函数首先接受一个图像文件的位置作为输入。接下来它需要三个int作为它的第二、第三和第四个参数，stb_image.h将会用图像的宽度、高度和颜色通道的个数填充这三个变量。我们之后生成纹理的时候会用到的图像的宽度和高度的。")]),e._v(" "),a("h3",{attrs:{id:"生成纹理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成纹理"}},[e._v("#")]),e._v(" 生成纹理")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    //生成 VAO， VBO ，EBO， Texture\n    unsigned int VBO, VAO, EBO, texture;\n    glGenBuffers(1, &EBO);\n    glGenVertexArrays(1, &VAO);\n    glGenBuffers(1, &VBO);\n    glGenTextures(1, &texture);\n    // bind the Vertex Array Object first, then bind and set vertex buffer(s), and then configure vertex attributes(s).\n    // 绑定VAO，开始记录顶点数组对象\n    glBindVertexArray(VAO);\n    // 绑定，并传出纹理对象数据到GPU\n    glBindTexture(GL_TEXTURE_2D, texture); // all upcoming GL_TEXTURE_2D operations now have effect on this texture object\n    // set the texture wrapping parameters\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\t// set texture wrapping to GL_REPEAT (default wrapping method)\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\n    // set texture filtering parameters\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n    // load image, create texture and generate mipmaps\n    int width, height, nrChannels;\n    // The FileSystem::getPath(...) is part of the GitHub repository so we can find files on any IDE/platform; replace it with your own image path.\n    unsigned char *data = stbi_load("container.jpg", &width, &height, &nrChannels, 0);\n    if (data) {\n        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);\n        glGenerateMipmap(GL_TEXTURE_2D);\n    } else {\n        std::cout << "Failed to load texture" << std::endl;\n    }\n    stbi_image_free(data);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("glTexImage2D 解释")]),e._v(" "),a("ol",[a("li",[e._v("第一个参数指定了纹理目标(Target)。设置为GL_TEXTURE_2D意味着会生成与当前绑定的纹理对象在同一个目标上的纹理（任何绑定到GL_TEXTURE_1D和GL_TEXTURE_3D的纹理不会受到影响）。")]),e._v(" "),a("li",[e._v("第二个参数为纹理指定多级渐远纹理的级别，如果你希望单独手动设置每个多级渐远纹理的级别的话。这里我们填0，也就是基本级别。")]),e._v(" "),a("li",[e._v("第三个参数告诉OpenGL我们希望把纹理储存为何种格式。我们的图像只有RGB值，因此我们也把纹理储存为RGB值。")]),e._v(" "),a("li",[e._v("第四个和第五个参数设置最终的纹理的宽度和高度。我们之前加载图像的时候储存了它们，所以我们使用对应的变量。")]),e._v(" "),a("li",[e._v("下个参数应该总是被设为0（历史遗留的问题）。")]),e._v(" "),a("li",[e._v("第七第八个参数定义了源图的格式和数据类型。我们使用RGB值加载这个图像，并把它们储存为char(byte)数组，我们将会传入对应值。")]),e._v(" "),a("li",[e._v("最后一个参数是真正的图像数据。")])]),e._v(" "),a("p",[e._v("当调用glTexImage2D时，当前绑定的纹理对象就会被附加上纹理图像。然而，目前只有基本级别(Base-level)的纹理图像被加载了，如果要使用多级渐远纹理，我们必须手动设置所有不同的图像（不断递增第二个参数）。或者，直接在生成纹理之后调用glGenerateMipmap。这会为当前绑定的纹理自动生成所有需要的多级渐远纹理。")]),e._v(" "),a("p",[e._v("生成了纹理和相应的多级渐远纹理后，释放图像的内存是一个很好的习惯。")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("stbi_image_free(data);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"glsl修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glsl修改"}},[e._v("#")]),e._v(" glsl修改")]),e._v(" "),a("p",[e._v("具体看两个着色器代码")]),e._v(" "),a("h2",{attrs:{id:"纹理单元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纹理单元"}},[e._v("#")]),e._v(" 纹理单元")]),e._v(" "),a("p",[e._v("一个着色器中最多可以使用16个纹理.\n用uniform 定义的纹理采样器sample2D,如果是一个，默认的location是0，所以虽然用了uniform，却没有用glUniformxxx设置值。\n一个纹理的位置(location)值通常称为一个纹理单元(Texture Unit)\n首先着色器代码中需要修改s使用多个纹理单元(这里是2个)")]),e._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("version")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("330")]),e._v(" core")])]),e._v("\nout vec4 FragColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nin vec3 myColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nin vec2 TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// texture sampler")]),e._v("\nuniform sampler2D texture1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nuniform sampler2D texture2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nuniform vec2 toumingdu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// FragColor =  min(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.3) * vec4(myColor.x, toumingdu.x, myColor.z, 1.0f);")]),e._v("\n   FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("texture1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("texture2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("myColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" toumingdu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" myColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("最终输出颜色现在是两个纹理的结合。GLSL内建的mix函数需要接受两个值作为参数，并对它们根据第三个参数进行线性插值。如果第三个值是0.0，它会返回第一个输入；如果是1.0，会返回第二个输入值。0.2会返回80%的第一个输入颜色和20%的第二个输入颜色，即返回两个纹理的混合色。")]),e._v(" "),a("p",[e._v("然后依次载入纹理")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('   unsigned int texture1, texture2;\n    glGenTextures(1, &texture1);\n    glBindTexture(GL_TEXTURE_2D, texture1); // all upcoming GL_TEXTURE_2D operations now have effect on this texture object\n    // set the texture wrapping parameters\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\t// set texture wrapping to GL_REPEAT (default wrapping method)\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\n    // set texture filtering parameters\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n    // load image, create texture and generate mipmaps\n    int width, height, nrChannels;\n    // The FileSystem::getPath(...) is part of the GitHub repository so we can find files on any IDE/platform; replace it with your own image path.\n    unsigned char *data = stbi_load("container.jpg", &width, &height, &nrChannels, 0);\n    if (data) {\n        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);\n        glGenerateMipmap(GL_TEXTURE_2D);\n    } else {\n        std::cout << "Failed to load texture container" << std::endl;\n    }\n    stbi_image_free(data);\n\n    glGenTextures(1, &texture2);\n    glBindTexture(GL_TEXTURE_2D, texture2);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n    data = stbi_load("awesomeface.png", &width, &height, &nrChannels, 0);\n    if (data) {\n        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, data);\n        glGenerateMipmap(GL_TEXTURE_2D);\n    } else {\n        std::cout << "Failed to load texture awesomeface" << std::endl;\n    }\n    stbi_image_free(data);\n    myshader.use();\n    glUniform1i(glGetUniformLocation(myshader.ID, "texture1"), 0);\n    myshader.setInt("texture2", 1);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br")])]),a("p",[e._v('glGetUniformLocation(myshader.ID, "texture1") 获取了在glsl中  texture1采样器的位置\nglUniform1i(glGetUniformLocation(myshader.ID, "texture1"), 0);后面这个0定义了纹理单元的位置\n因为我们定义了两个纹理单元，依次载入的纹理，有这样的顺序的。\n这样就绑定了那个纹理单元对应哪个采样器\n'),a("em",[a("strong",[e._v("设置之前需要glUseProgram一下")])])]),e._v(" "),a("p",[e._v("最后，在循环中启用")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    while (!glfwWindowShouldClose(window))\n    {\n        // input\n        // -----\n        processInput(window);\n        glClearColor(0.1f, 0.6f, 0.4f, 1.0f);\n        glClear(GL_COLOR_BUFFER_BIT);\n        glActiveTexture(GL_TEXTURE0);\n        glBindTexture(GL_TEXTURE_2D, texture1);\n        glActiveTexture(GL_TEXTURE1);\n        glBindTexture(GL_TEXTURE_2D, texture2);\n        myshader.use();\n\n        // 更新uniform颜色\n        float timeValue = glfwGetTime();\n        float greenValue = sin(timeValue) / 2.0f + 0.5f;\n        int vertexColorLocation = glGetUniformLocation(myshader.ID, \"toumingdu\");\n        glUniform2f(vertexColorLocation, greenValue, 0.0f);\n\n        glBindVertexArray(VAO); // seeing as we only have a single VAO there's no need to bind it every time, but we'll do so to keep things a bit more organized\n        // glDrawArrays(GL_TRIANGLES, 0, 6);\n        glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);\n        // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.)\n        // -------------------------------------------------------------------------------\n        glfwSwapBuffers(window);\n        glfwPollEvents();\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);