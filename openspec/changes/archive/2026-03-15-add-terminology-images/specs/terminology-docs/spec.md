## ADDED Requirements

### Requirement: Documentation contains all 27 images
The documentation SHALL include all 27 images from `docs/images/01 Terminology/` folder.

#### Scenario: All images are embedded
- **WHEN** a reader views `docs/01起步/01-terminology.md`
- **THEN** all 27 images (slide01_image1.png through slide27_image1.png) SHALL be visible

### Requirement: Each image has a descriptive summary
Each image SHALL be accompanied by a descriptive summary explaining its educational content.

#### Scenario: Image has summary
- **WHEN** a reader views an image in the document
- **THEN** there SHALL be a text summary explaining the image's content and educational value

### Requirement: Images follow logical learning progression
Images SHALL be organized in the original slide order to maintain the intended learning progression.

#### Scenario: Logical order maintained
- **WHEN** a reader reads the document from start to finish
- **THEN** the images SHALL appear in slide01 to slide27 order

### Requirement: MkDocs compatible image paths
All image paths SHALL use relative paths compatible with MkDocs static site generation.

#### Scenario: Images render correctly
- **WHEN** MkDocs builds the site
- **THEN** all images SHALL render correctly without broken links
