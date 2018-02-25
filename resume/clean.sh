#!/bin/bash -x

# latex toolchain for vscode things doesnt do this

mv full.pdf full/jzhang_resume.pdf

mv brief.pdf brief/jzhang_resume.pdf


for f in $(cat .gitignore) ; do 
  rm "$f"
done
exit 0
