CC = xelatex
SHARED_SRC = awesome-cv.cls fontawesome.sty $(shell find sections -name "*.tex") $(shell find fonts -name "*.ttf")
BUILD_DIR = build

all: before full brief clean
	cd $(BUILD_DIR) && \
	mv full.pdf jzhang_resume.pdf && \
	mv brief.pdf jzhang_brief.pdf

before:
	mkdir -p $(BUILD_DIR)

full: full.tex $(SHARED_SRC) $(shell find full -name "*.tex")
	$(CC) -interaction nonstopmode -output-directory=$(BUILD_DIR) $<

brief: brief.tex $(SHARED_SRC) $(shell find brief -name "*.tex")
	$(CC) -interaction nonstopmode -output-directory=$(BUILD_DIR) $<

clean:
	cd $(BUILD_DIR) && \
	$(RM) $(addprefix full.,aux out) $(addprefix brief.,aux out) *.log
