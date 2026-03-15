## Context

This is a documentation task to populate `docs/01起步/01-terminology.md` with comprehensive trading terminology content derived from 27 educational slides.

**Source Material**: 27 PNG images in `docs/images/01 Terminology/` from Al Brooks' Price Action Fundamentals course
**Target File**: `docs/01起步/01-terminology.md`
**Documentation System**: MkDocs with Material theme

## Goals / Non-Goals

**Goals:**
- Read and analyze all 27 images
- Create well-structured markdown content with embedded images
- Organize content in logical learning progression
- Ensure all image paths are compatible with MkDocs
- Include descriptive summaries for each image

**Non-Goals:**
- No new code or APIs
- No database changes
- No external dependencies beyond existing MkDocs setup

## Decisions

**Content Organization**: Organize slides in original numerical order (slide01 through slide27) to maintain the author's intended learning progression.

**Image Embedding**: Use standard markdown image syntax `![alt text](path)` with relative paths from the docs root.

**Section Structure**: Each image will have:
1. A level-2 or level-3 heading with the slide topic
2. The embedded image
3. A descriptive summary paragraph

**Language**: Content will be in Chinese as the target document is in the `01起步` (Getting Started) folder which uses Chinese.

## Risks / Trade-offs

**Risk**: Image file sizes may impact page load times
→ Mitigation: Images are already optimized PNGs, no additional action needed

**Risk**: 27 images may create a very long document
→ Mitigation: This is acceptable for a comprehensive reference document

## Migration Plan

1. Create the markdown content with all images and summaries
2. Write to `docs/01起步/01-terminology.md`
3. Verify with `mkdocs serve` if needed

## Open Questions

None - requirements are clear from the provided images and target document structure.
