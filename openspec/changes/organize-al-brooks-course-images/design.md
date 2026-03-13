# Design: Al Brooks Course Image Organization System

## Architecture Overview

The system will organize trading course screenshots into a hierarchical structure that mirrors the Al Brooks course curriculum. Images will be categorized by chapter and section, with summary pages providing context and descriptions.

## Directory Structure

```
docs/
├── .vitepress/
│   ├── config.mts          # Navigation configuration
│   └── theme/
├── images/                  # Original image storage (unchanged)
│   ├── 01 Terminology/
│   ├── 02 Chart basics and price action/
│   └── ...
└── course/                  # New course content pages
    ├── index.md            # Course overview
    ├── 01-getting-started/
    │   ├── index.md        # Chapter summary
    │   └── 01-terminology.md
    ├── 02-charting-analysis/
    │   ├── index.md
    │   └── 08-candles-setups.md
    ├── 03-market-cycle/
    │   └── ...
    ├── 04-support-resistance/
    ├── 05-trade-prerequisites/
    ├── 06-price-action-patterns/
    ├── 07-channels-ranges/
    ├── 08-time-of-day/
    ├── 09-swing-scalp/
    └── 10-managing-losses/
```

## Image Categorization Logic

### Mapping Image Folders to Course Chapters

| Image Folder | Course # | Chapter | Target Page |
|-------------|----------|---------|-------------|
| 01 Terminology | 01 | Getting Started | course/01-getting-started/ |
| 02 Chart basics... | 02 | Getting Started | course/01-getting-started/ |
| 04 My Setup | 04 | Getting Started | course/01-getting-started/ |
| 06 Personality Traits... | 06 | Getting Started | course/01-getting-started/ |
| 07 Starting Out | 07 | Getting Started | course/01-getting-started/ |
| 08 Candles... | 08 | Charting Analysis | course/02-charting-analysis/ |
| 09 Pullbacks... | 09 | Charting Analysis | course/02-charting-analysis/ |
| 10 Buying and selling... | 10 | Charting Analysis | course/02-charting-analysis/ |
| 11 Gaps | 11 | Charting Analysis | course/02-charting-analysis/ |
| 12 Market Cycle | 12 | Market Cycle | course/03-market-cycle/ |
| 13 Always In | 13 | Market Cycle | course/03-market-cycle/ |
| 14 Trends | 14 | Market Cycle | course/03-market-cycle/ |
| 15 Breakouts | 15 | Market Cycle | course/03-market-cycle/ |
| 16 Channels | 16-17 | Market Cycle | course/03-market-cycle/ |
| 18 Trading Ranges | 18 | Market Cycle | course/03-market-cycle/ |
| 19-20 Support/Resistance/Measured Moves | 19-20 | Support/Resistance | course/04-support-resistance/ |
| 21-29 Reversals, Wedges, etc. | 21-29 | Support/Resistance | course/04-support-resistance/ |
| 30-36 Trader's Equation... | 30-36 | Trade Prerequisites | course/05-trade-prerequisites/ |
| 37-42 MTR Tops/Bottoms... | 37-42 | Price Action Patterns | course/06-price-action-patterns/ |
| 43-47 Channel/Range Trading | 43-47 | Channels & Ranges | course/07-channels-ranges/ |
| 48 Trading Times of Day | 48 | Time of Day | course/08-time-of-day/ |
| 49-50 Swing/Scalp Trading | 49-50 | Swing & Scalp | course/09-swing-scalp/ |
| 51-52 Managing Losses | 51-52 | Managing Losses | course/10-managing-losses/ |

## Page Structure Template

Each chapter will follow this structure:

```markdown
# Chapter X: [Chapter Title]

## Overview
Brief description of what this chapter covers.

## Key Concepts
- Concept 1
- Concept 2
- Concept 3

## Visual Examples

### [Section Name]
[Image gallery or grid]
![Description](/images/[folder]/[image-name].png)

### [Another Section]
...

## Summary
Key takeaways from this chapter.
```

## Navigation Configuration

The VitePress config will be updated to include the new course navigation:

```typescript
// .vitepress/config.mts
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/course/': [
        {
          text: 'Al Brooks Trading Course',
          items: [
            { text: 'Course Overview', link: '/course/' },
            {
              text: 'Getting Started (01-07)',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/course/01-getting-started/' },
                { text: 'Terminology', link: '/course/01-getting-started/01-terminology' },
                // ...
              ]
            },
            // ... other chapters
          ]
        }
      ]
    }
  }
})
```

## Implementation Phases

### Phase 1: Infrastructure (Priority 1)
- Create directory structure
- Set up page templates
- Update VitePress navigation config

### Phase 2: Content Creation (Priority 2)
- Create chapter summary pages
- Map images to appropriate sections
- Write descriptive content for each chapter

### Phase 3: Integration (Priority 3)
- Link existing content to new structure
- Verify navigation works correctly
- Test all image paths

## Technical Considerations

1. **Image Handling**: Images will remain in their current location (`docs/images/`), referenced via relative paths in the markdown files.

2. **Build Performance**: The existing build process should handle the new content without modification.

3. **Search**: VitePress's built-in search will automatically index the new content.

4. **Mobile Responsiveness**: Image galleries should use responsive grid layouts that adapt to screen size.
