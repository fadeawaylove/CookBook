## Context

需要为"Buying and Selling Pressure"（买卖压力）课程章节创建一个完整的文档。这个章节是Brooks Price Action交易课程的重要组成部分，重点讲解如何通过K线形态识别买卖压力的变化。

当前状态：
- 图片文件夹 `docs/images/10 Buying and selling pressure` 包含35张图片（slide01_image1.png 到 slide35_image1.png，部分slide包含多张图片如slide01_image2.png）
- 目标MD文档 `docs/02图表分析/10-pressure.md` 当前为空文件
- `mkdocs.yml` 需要添加此文档到导航

项目类型：Python MkDocs项目，使用Material主题，用于展示交易课程学习笔记。

## Goals / Non-Goals

**Goals：**
1. 逐张分析所有35张图片的内容
2. 将图片和对应的解读按顺序添加到Markdown文档中
3. 使用正确的图片路径格式（`../images/`开头）
4. 在 `mkdocs.yml` 导航中添加此文档
5. 不添加目录，保持文档简洁

**Non-Goals：**
- 不改变现有文档结构
- 不修改现有其他章节内容
- 不添加重复图片
- 不需要对图片进行额外处理

## Decisions

### 图片分析策略
- 使用 `look_at` 工具逐张分析图片
- 图片内容与买卖压力识别相关（K线形态、实体大小、影线、缺口等）
- 每张图片的解读需要专业准确，符合交易技术分析术语

### 文档结构
- 图片按顺序排列，每张图片后跟解读
- 使用标准Markdown图片语法：`![alt text](path)`
- 图片路径格式：`../images/10 Buying and selling pressure/slideXX_image1.png`

### 导航集成
- 在 `mkdocs.yml` 的 `nav:` 部分 "图表分析:" 下添加
- 使用与其他章节一致的命名格式

## Risks / Trade-offs

**风险：图片解读准确性**
- 技术分析图片需要专业知识才能准确解读
- **缓解**：基于Brooks Price Action课程的核心概念进行解读，专注于已知的买卖压力识别模式

**风险：图片数量多（35张）**
- 处理时间长，可能存在遗漏
- **缓解**：使用系统化的批量处理方式，按顺序处理每张图片

**风险：图片路径格式错误**
- 图片路径需要精确匹配文件夹名（含空格）
- **缓解**：使用实际文件夹名称验证路径格式

## Migration Plan

无需迁移计划 - 这是向现有文档添加新内容，不影响现有功能或数据。

步骤：
1. 分析所有35张图片
2. 创建/更新 `10-pressure.md`
3. 更新 `mkdocs.yml` 添加导航
4. 验证图片路径正确

## Open Questions

无 - 任务范围清晰明确。
