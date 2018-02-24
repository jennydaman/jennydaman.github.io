#!/bin/bash -x

xelatex -interaction nonstopmode full > /dev/null 2> /dev/null
mv full.pdf full/jzhang_resume.pdf


xelatex -interaction nonstopmode brief > /dev/null 2> /dev/null
mv brief.pdf brief/jzhang_resume.pdf


for f in $(cat .gitignore) ; do 
  rm "$f"
done
exit 0
