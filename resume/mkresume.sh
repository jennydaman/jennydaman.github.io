#!/bin/bash -x

xelatex -interaction nonstopmode resume > /dev/null 2> /dev/null
mv resume.pdf jzhang_resume.pdf

for f in $(cat .gitignore) ; do 
  rm "$f"
done