#!/bin/bash -x

xelatex -interaction nonstopmode full > /dev/null 2> /dev/null
mv full.pdf ../src/assets/resume/jzhang_resume.pdf


xelatex -interaction nonstopmode brief > /dev/null 2> /dev/null
mv brief.pdf ../src/assets/resume/jzhang_brief.pdf


for f in $(cat .gitignore) ; do 
  rm "$f"
done
exit 0
