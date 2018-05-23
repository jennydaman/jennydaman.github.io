CC = xelatex
SHARED_SRC = awesome-cv.cls fontawesome.sty $(shell find sections -name "*.tex") $(shell find fonts -name "*.ttf")
BUILD_DIR = build

brief: jzhang_resume.tex $(SHARED_SRC) $(shell find jzhang_resume -name "*.tex") before
	$(CC) -interaction nonstopmode -output-directory=$(BUILD_DIR) $< ; echo "what are font errors?"

before:
	mkdir -p $(BUILD_DIR)

clean:
	$(RM) -r $(BUILD_DIR)
