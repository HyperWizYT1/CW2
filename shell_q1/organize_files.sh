text_extensions=(
    .txt
    .docx
    .md
    .rtf
    .csv
    .css
)


image_extensions=(
    .png
    .gif
    .jpg
    .heif
    .raw
)

for file in *; do 
    if [ -f "$file" ]; then 
        echo "$file" 
    fi 
done
