.PHONY: build clean

build:
	pdflatex -interaction=nonstopmode -halt-on-error main.tex
	rm -f main.aux main.log main.out

clean:
	rm -f main.pdf main.aux main.log main.out main.fls main.fdb_latexmk

.DEFAULT_GOAL := build
