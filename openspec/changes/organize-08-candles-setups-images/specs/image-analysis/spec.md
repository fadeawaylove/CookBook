## ADDED Requirements

### Requirement: 遍历并分析图片
系统 SHALL 遍历 `docs/images/08 Candles, Setups, and Signal Bars/` 文件夹中的所有图片文件，逐张分析图片内容。

#### Scenario: 成功遍历所有图片
- **WHEN** 系统扫描 `docs/images/08 Candles, Setups, and Signal Bars/` 目录
- **THEN** 系统识别所有图片文件（.png, .jpg, .jpeg 等格式）
- **AND** 系统按文件名顺序排列图片列表
- **AND** 系统检查并确保没有重复的图片

### Requirement: 撰写图片内容总结
系统 SHALL 为每张图片撰写内容解读总结，描述图片展示的关键信息。

#### Scenario: 生成图片内容总结
- **WHEN** 系统分析单张图片内容
- **THEN** 系统提取图片中的关键信息（标题、图表、文字说明等）
- **AND** 系统生成简洁的中文内容总结

### Requirement: 创建 markdown 文档
系统 SHALL 创建或更新 `docs/02图表分析/08-candles-setups.md` 文档，包含所有图片及其内容总结。

#### Scenario: 成功创建文档
- **WHEN** 系统生成文档内容
- **THEN** 文档包含所有图片（使用 `../images/08 Candles, Setups, and Signal Bars/图片名` 格式的相对路径）
- **AND** 每张图片配有内容解读总结
- **AND** 文档保存到 `docs/02图表分析/08-candles-setups.md` 路径
- **AND** 确保没有重复的图片

### Requirement: 更新 mkdocs 导航配置
系统 SHALL 更新 `mkdocs.yml` 文件，将 `08-candles-setups.md` 添加到导航配置中。

#### Scenario: 成功更新导航配置
- **WHEN** 系统读取 `mkdocs.yml` 文件
- **THEN** 系统在 `nav` 部分的适当位置添加 `02图表分析/08-candles-setups.md`
- **AND** 保持现有的导航结构不变
