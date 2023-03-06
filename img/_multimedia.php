<?php

$dir = "/home/appworldtour/public_html/images/"; // path to the folder containing images

$files = scandir($dir); // scan the directory for files and folders

$image_files = array(); // initialize an empty array to hold image file names

foreach($files as $file) {
    $file_type = strtolower(pathinfo($file, PATHINFO_EXTENSION)); // get the file extension
    
    if($file_type == "jpg" || $file_type == "jpeg" || $file_type == "png" || $file_type == "gif") {
        $image_files[] = $file; // if file extension is an image type, add it to the array
    }
}

echo json_encode($image_files); // return the array as JSON
?>
