# Resume

This directory contains your resume in LaTeX format for easy version control and updates.

## Building the PDF

To build your resume from the LaTeX source:

```bash
cd resume
make build
```

This will generate `main.pdf` from `main.tex`.

## Cleaning up

To remove all generated files (.pdf, .aux, .log, etc.):

```bash
make clean
```

## Version Control

The `.gitignore` at the project root ensures that:
- `.pdf` files are not committed (generated artifacts)
- LaTeX build artifacts (`.aux`, `.log`, `.out`, etc.) are not committed
- Only `main.tex` is tracked (your source)

You can safely run `make build` locally to generate your PDF without worrying about committing it to git.

## Usage on Website

To use your resume on your website:
1. Generate the PDF locally: `make build`
2. Commit only `main.tex` to git
3. The PDF can be served from a deploy step if needed, or kept locally

This keeps your git history clean while allowing you to maintain a buildable, version-controlled resume source.
