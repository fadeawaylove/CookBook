## Context

需要为"Market Cycle"（市场周期）课程章节创建一个完整的文档。这个章节是Brooks Price Action交易课程的重要组成部分，重点讲解市场周期的识别和交易策略。

当前状态：
- 图片文件夹 `docs/images/12 Market Cycle` 包含75张图片
- 目标MD文档 `docs/03市场周期/12-cycle.md` 当前为空文件
- `mkdocs.yml` 需要添加此文档到导航

项目类型：Python MkDocs项目，使用Material主题，用于展示交易课程学习笔记。

## Goals / Non-Goals

**Goals：**
1. 逐张分析所有75张图片的内容
2. 将图片和对应的解读按顺序添加到Markdown文档中
3. 使用正确的图片路径格式（`../images/`开头）
4. 在 `mkdocs.yml` 导航中添加此文档
5. 文档标题带上顺序数字"12"

**Non-Goals：**
- 不改变现有文档结构
- 不修改现有其他章节内容
- 不添加重复图片

## Decisions

### 图片分析策略
- 使用 `look_at` 工具逐张分析图片
- 图片内容与市场周期相关
- 每张图片的解读需要专业准确

### 文档结构
- 图片按顺序排列，每张图片后跟解读
- 使用标准Markdown图片语法
- 图片路径格式：`../images/12 Market Cycle/slideXX_image1.png`

### 导航集成
- 在 `mkdocs.yml` 的 `nav:` 部分添加
- 使用与其他章节一致的命名格式

## Risks / Trade-offs

**风险：图片解读准确性**
- **缓解**：基于Brooks Price Action课程的核心概念进行解读

**风险：图片路径格式错误**
- **缓解**：使用实际文件夹名称验证路径格式

## Migration Plan

无需迁移计划 - 这是向现有文档添加新内容。

步骤：
1. 分析所有75张图片
2. 创建/更新 `12-cycle.md`
3. 更新 `mkdocs.yml` 添加导航
4. 验证图片路径正确

## Open Questions

无 - 任务范围清晰明确。
