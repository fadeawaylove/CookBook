## Why

需要为"Always In"（始终在场）课程章节创建一个完整的文档，将现有图片文件逐张分析并整合到Markdown文档中。这将完善Brooks Price Action交易课程的学习笔记体系。

## What Changes

- 创建完整的 `docs/03市场周期/13-always-in.md` 文档
- 分析图片文件夹中所有图片内容
- 在Markdown中插入所有图片（使用 `../images/` 路径格式）
- 为每张图片提供内容解读和总结
- 在 `mkdocs.yml` 导航中添加此文档
- 文档标题带上顺序数字"13"

## Capabilities

### New Capabilities
- `always-in-doc`: 创建完整的Always In章节文档，包含所有图片的内容分析和解读

### Modified Capabilities
- 无

## Impact

- 新增文档文件：`docs/03市场周期/13-always-in.md`
- 修改配置文件：`mkdocs.yml`（添加导航项）
- 依赖：需要使用 `look_at` 工具分析图片内容
