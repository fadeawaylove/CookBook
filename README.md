# 📈 交易课程思维导图

基于 [Docusaurus](https://docusaurus.io/) 构建的 Brooks Price Action 交易课程学习笔记站点。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm start
```

这会在 `http://localhost:3000` 启动开发服务器。

### 构建

```bash
npm run build
```

构建结果会输出到 `build/` 目录。

## 📦 部署到 GitHub Pages

### 1. 配置 GitHub 仓库

1. 在 GitHub 上创建新仓库，命名为 `trading-docs`
2. 将本地代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trading-docs.git
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 打开仓库的 **Settings** → **Pages**
2. **Source** 选择 "Deploy from a branch"
3. **Branch** 选择 "gh-pages" 和 "/ (root)"
4. 点击 Save

### 3. 配置部署

编辑 `docusaurus.config.ts`，修改以下配置：

```typescript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/trading-docs/',
organizationName: 'YOUR_USERNAME',
projectName: 'trading-docs',
```

### 4. 部署

```bash
npm run deploy
```

这会自动构建并部署到 GitHub Pages。

## 📁 项目结构

```
trading-docs/
├── docs/               # 文档内容
│   ├── intro.md       # 首页
│   ├── 08-candles-setups/
│   ├── 09-pullbacks/
│   ├── 10-pressure/
│   ├── 11-gaps/
│   ├── 12-cycle/
│   ├── 13-always-in/
│   └── 14-trends/
├── src/
│   ├── css/
│   │   └── custom.css # 自定义样式
│   └── pages/         # 自定义页面
├── static/            # 静态资源
├── docusaurus.config.ts  # 站点配置
├── sidebars.ts        # 侧边栏配置
└── package.json
```

## 📝 添加新内容

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在文件顶部添加 frontmatter：

```yaml
---
sidebar_position: 1
title: 页面标题
---
```

3. 使用 Markdown 编写内容
4. 在 `sidebars.ts` 中添加导航（如果使用自动生成则不需要）

## 🎨 自定义主题

编辑 `src/css/custom.css` 来修改样式。

当前主题特点：
- 深色模式为主
- 蓝色主题色（代表交易的专业性）
- 高对比度确保可读性
- 针对长文阅读优化

## 🔍 搜索

当前使用浏览器内置搜索（Ctrl+F）。如需添加全文搜索，可以申请 [Algolia DocSearch](https://docsearch.algolia.com/)。

## 📄 许可证

Copyright © 2024 Trading Course Notes.
