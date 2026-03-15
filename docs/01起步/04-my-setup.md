# 04 My Setup

## My Setup: My Home Office (1)

![My Setup: My Home Office (1)](../images/04%20My%20Setup/slide01_image1.png)

这张图片展示了 Al Brooks 的家庭办公室交易环境设置。他使用笔记本电脑进行主要交易操作，同时配备第二台电脑专门用于聊天室交流。为了保持专注，他采取了一系列措施：关闭百叶窗以隔绝外界干扰、不接听电话、不看电视。这种环境设置的核心目的是创造一个完全专注于交易决策的空间，避免任何可能分散注意力的因素。

## My Setup: My Home Office (2)

![My Setup: My Home Office (2)](../images/04%20My%20Setup/slide01_image2.png)

这张图片进一步强调了 Al Brooks 交易环境设置的核心理念：完全屏蔽外部干扰。特别值得注意的是他强调要"忽略新闻和专家意见"（红色标注），因为他不想有任何干扰或他人观点影响自己的判断。他认为保持极度专注是交易成功的关键因素之一。这种严格的交易纪律帮助他在交易时完全基于价格行为做出决策，而不是被市场噪音或他人意见所左右。

## My Job: Make Money Doing Something I Love

![My Job: Make Money Doing Something I Love](../images/04%20My%20Setup/slide02_image1.png)

这张图片阐述了 Al Brooks 对交易本质的深刻理解。他用直接甚至有些尖锐的语言描述了交易的零和博弈特性："从你的账户拿钱放入我的账户，你的工作就是从我的账户拿钱！" 这种表述虽然听起来冷酷，但准确地反映了金融市场的真实本质——一个人的盈利必然来自另一个人的亏损（扣除交易成本后）。理解这一点对于交易者建立正确的心态至关重要：市场是一场严肃的游戏，每个参与者都在试图从其他人那里获利。

## My Setup: 5 Minute S&P500 ES Emini

![My Setup: 5 Minute S\&P500 ES Emini](../images/04%20My%20Setup/slide03_image1.png)

这张图片展示了 Al Brooks 的核心图表设置：5 分钟 S&P500 ES Emini 图表。这个设置的关键特征是多时间框架的 20 周期指数移动平均线（EMA）叠加：15 分钟 20 周期 EMA（用蓝色虚线表示）、60 分钟 20 周期 EMA（用蓝色实线表示）以及当前 5 分钟的 20 周期 EMA。这种多时间框架 EMA 设置帮助交易者从更高的时间框架获取趋势方向信息，同时利用当前时间框架进行精确的入场和出场决策。

## Emini: Why Are Your Charts Different from Mine?

![Emini: Why Are Your Charts Different from Mine?](../images/04%20My%20Setup/slide04_image1.png)

这张图片解释了为什么不同交易者的图表可能看起来完全不同，即使他们都在看同一个市场。关键差异来自两个设置：交易时间和合约类型。左侧图表使用 24 小时数据（ETH - 延长交易时间）和季度合约，这会导致价格数据包含盘前和盘后时段的波动；右侧图表使用日间时段数据（RTH - 常规交易时间，美东时间 9:30-16:00）和连续合约，这种设置排除了盘前盘后数据，通常会产生更清晰的图表形态。Al Brooks 明确推荐使用 RTH 数据和连续合约。

## My Setup: My Trading Room

![My Setup: My Trading Room](../images/04%20My%20Setup/slide05_image1.png)

这张图片展示了 Al Brooks 交易室的屏幕布局，这是一个多时间框架的交易监控设置。主要包含以下图表：左侧是 5 分钟主要交易图表，显示实时价格行为和 EMA 线；右上角是 60 分钟图表，用于判断中期趋势方向，标记了月度高低点；右中位置是周线图，用于识别长期趋势和关键支撑阻力位；右下角是 15 分钟和日线图组合。这种多时间框架布局让交易者能够同时监控不同时间尺度的市场行为，确保交易决策与更大时间框架的趋势保持一致。

## Indicator: 60 Min 20 Bar EMA (TradeStation)

![Indicator: 60 Min 20 Bar EMA (TradeStation)](../images/04%20My%20Setup/slide06_image1.png)

这张图片展示了在 TradeStation 平台上实现 60 分钟 20 周期 EMA 指标的 EasyLanguage 代码。代码的主要逻辑包括：设置 EMA 长度为 20，定义会话结束时间为 1315（太平洋标准时间 PST）。当当前 K 线大于 240 时，计算当前值，在特定时间条件满足时计算 EMA 值。代码使用了 TradeStation 内置的 `XAverage` 函数来计算指数移动平均值。图片底部特别注明：需要根据时区调整 1315 这个会话结束时间值（1315 对应太平洋标准时间）。这段代码展示了如何将高时间框架的指标精确地实现在特定交易软件中。

## Indicators: 15 Min & 60 Min EMAs on 5 Min Chart

![Indicators: 15 Min \& 60 Min EMAs on 5 Min Chart](../images/04%20My%20Setup/slide07_image1.png)

这张图片详细解释了如何在 5 分钟图表上实现 15 分钟和 60 分钟 EMA 的技术原理和具体设置方法。核心原理是：要在较低时间框架图表上显示较高时间框架的 EMA，需要调整 EMA 的周期参数，使其时间跨度等效。具体计算方法如下：对于 15 分钟 EMA 在 5 分钟图表上，时间比为 15/5 = 3，因此需要将 EMA 周期设置为 3 × 20 = 60（实际使用 50 更准确）；对于 60 分钟 EMA 在 5 分钟图表上，时间比为 60/5 = 12，因此需要将 EMA 周期设置为 12 × 20 = 240（实际使用 220 更好）。这种方法可以在任何交易平台通过调整内置 EMA 指标的周期参数来实现，是一种近似但非常实用的多时间框架分析技术。

## My Setup: Daily, Weekly, Monthly (S&P500)

![My Setup: Daily, Weekly, Monthly (S\&P500)](../images/04%20My%20Setup/slide08_image1.png)

这张图片展示了 S&P500 现金指数的日线图设置，主要用于长期趋势分析。图表中叠加了四条简单移动平均线（SMA）：50 周期 SMA（绿色）、100 周期 SMA（蓝色）、150 周期 SMA（粉色）和 200 周期 SMA（灰色）。这些长期移动平均线帮助交易者识别市场的主要趋势方向和关键支撑/阻力位。从图表中可以看到，价格在 2014 年期间整体呈现上升趋势，各条移动平均线呈多头排列（短期均线在长期均线上方），这是典型的牛市特征。当价格回调到某条重要的移动平均线附近时，往往会获得支撑并继续上涨。这种多周期 SMA 设置是趋势跟踪交易者常用的技术分析工具。

## My Setup: Daily, Weekly, Monthly (EUR/USD)

![My Setup: Daily, Weekly, Monthly (EUR/USD)](../images/04%20My%20Setup/slide09_image1.png)

这张图片展示了 EUR/USD（欧元兑美元）的日线图设置，与 S&P500 图表使用相同的技术指标配置。图表中同样叠加了四条简单移动平均线：50 周期 SMA（绿色）、100 周期 SMA（蓝色）、150 周期 SMA（粉色）和 200 周期 SMA（灰色）。这展示了 Al Brooks 的交易方法具有跨市场的适用性——无论是股票市场（S&P500）还是外汇市场（EUR/USD），都使用相同的技术分析框架。从图表可以看到 2014 年期间 EUR/USD 也呈现上升趋势，价格多次在移动平均线处获得支撑后继续上涨。这种一致性的分析方法帮助交易者建立系统化的交易决策流程，而不是依赖主观判断或市场传闻。
