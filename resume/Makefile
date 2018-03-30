CC = xelatex
SHARED_SRC = awesome-cv.cls fontawesome.sty $(shell find sections -name "*.tex") $(shell find fonts -name "*.ttf")
BUILD_DIR = build

all: full brief
	cd $(BUILD_DIR) && ls && \
	mv full.pdf jzhang_resume.pdf && \
	mv brief.pdf jzhang_brief.pdf

before:
	mkdir -p $(BUILD_DIR)

full: full.tex $(SHARED_SRC) $(shell find full -name "*.tex") before
	$(CC) -interaction nonstopmode -output-directory=$(BUILD_DIR) $<

brief: brief.tex $(SHARED_SRC) $(shell find brief -name "*.tex") before
	$(CC) -interaction nonstopmode -output-directory=$(BUILD_DIR) $<

clean:
	$(RM) -r $(BUILD_DIR)
