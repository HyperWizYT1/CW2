#!/bin/bash

disk_usage=94
threshold=80

if [$disk_usage -gt $threshold]; then
    echo "Disk usage is high."
else
    echo "Disk usage is normal"
fi
