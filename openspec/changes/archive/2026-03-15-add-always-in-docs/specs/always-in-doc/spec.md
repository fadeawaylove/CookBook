## ADDED Requirements

### Requirement: Image Analysis and Interpretation

The system SHALL analyze all images in the `docs/images/13 Always In` folder and generate accurate content interpretations for each image.

#### Scenario: Analyzing trading chart images
- **WHEN** the system processes an image file
- **THEN** it SHALL identify the key trading concepts shown
- **AND** generate a descriptive interpretation suitable for documentation

### Requirement: Markdown Document Creation

The system SHALL create a complete Markdown document at `docs/03市场周期/13-always-in.md` containing all images with their interpretations.

#### Scenario: Creating the documentation file
- **WHEN** all images have been analyzed
- **THEN** the system SHALL generate a Markdown file with:
  - Sequential image references using `../images/` path prefix
  - Descriptive interpretations following each image
  - No table of contents (TOC) in the document
  - Proper Markdown image syntax
  - Clear hierarchical structure using 1-2 level headings

### Requirement: MkDocs Navigation Integration

The system SHALL update the `mkdocs.yml` configuration file to include the new document in the site navigation.

#### Scenario: Adding navigation entry
- **WHEN** the Markdown document is created
- **THEN** the system SHALL add an entry in the `nav:` section
- **AND** the entry SHALL use the format with number "13": `- 03市场周期/13-always-in.md`
- **AND** the navigation structure SHALL be consistent with existing entries

### Requirement: Image Path Validation

The system SHALL ensure all image paths in the generated Markdown document are correct and valid.

#### Scenario: Validating image references
- **WHEN** the Markdown document is generated
- **THEN** all image paths SHALL follow the pattern: `../images/13 Always In/slideXX_image1.png`
- **AND** there SHALL be no duplicate image references
