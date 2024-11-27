#!/bin/bash

files=(
    "image1.png"
    "image2.png"
    "image3.png"
    "text1.txt"
    "text2.txt"
    "text3.txt"
)

text=(
    "txt"
)

image=(
    "png"
)

for file in "${files[@]}"
do
    extension="${file##*.}" #define extension

    if [[ " ${text[@]} " =~ " $extension " ]]; then
        echo “Moving $file to Text folder”
    elif [[ " ${images[@]} " =~ " $extension " ]]; then
        echo “Moving $file to Images folder”
    else
        continue
    fi
done


