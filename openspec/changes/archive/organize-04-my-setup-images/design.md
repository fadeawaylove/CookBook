# Design: 整理 04 My Setup 图片到文档

## Context

`04 My Setup` 图片文件夹包含 12 张关于 Al Brooks 交易设置的幻灯片图片，内容涵盖他的交易环境、图表设置、技术指标配置等。这些图片需要整理到对应的 markdown 文档 `04-my-setup.md` 中，并为每张图片撰写内容解读。

## Goals / Non-Goals

**Goals:**
- 遍历 `docs/images/04 My Setup/` 文件夹中的所有图片
- 逐张分析图片内容并撰写内容总结
- 按顺序将图片路径和内容总结添加到 `docs/01起步/04-my-setup.md` 文档中
- 更新 `mkdocs.yml` 配置，将 `04-my-setup.md` 添加到导航中

**Non-Goals:**
- 不修改图片文件本身
- 不改变现有的文档结构（除了添加新内容）

## Decisions

### 图片路径格式
使用相对路径 `../images/04 My Setup/图片名`，因为文档位于 `docs/01起步/` 目录，需要向上退一级到 `docs/` 再进入 `images/` 目录。

### 文档内容格式
每张图片使用以下格式：
```markdown
## 图片标题

![图片描述](../images/04 My Setup/图片名)

图片内容解读总结...
```

### 图片内容总结方式
- 提取图片中的关键信息
- 用简洁的语言描述图片展示的内容
- 保持客观，不添加个人解读

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| 图片文件名或路径拼写错误 | 仔细核对文件路径，确保大小写一致 |
| 图片解读不够准确 | 仔细查看图片内容，提取关键信息 |

## Migration Plan

1. 读取并分析所有图片内容
2. 创建/更新 `04-my-setup.md` 文档
3. 更新 `mkdocs.yml` 导航配置
4. 验证文档渲染效果

## Open Questions

无
