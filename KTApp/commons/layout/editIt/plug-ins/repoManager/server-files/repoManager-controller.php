<?php
////////////////////////////////////////////////////////////////////////////////
// jquery.mb.components
//
// file: repoManager-controller.php
// last modified: 12/24/18 5:59 PM
// Version:  0.1.28
// Build:  4009
//
// Open Lab s.r.l., Florence - Italy
// email:  matbicoc@gmail.com
// blog: 	http://pupunzi.open-lab.com
// site: 	http://pupunzi.com
// 	      http://open-lab.com
//
// Licences: MIT, GPL
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
//
// Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
////////////////////////////////////////////////////////////////////////////////
$docRoot = "../../public/";
$fileRepo =  $docRoot . $_POST["fileRepo"];
$CMD = $_POST["cmd"];

if (!file_exists($fileRepo)) {
  mkdir($fileRepo, 0777, true);
}

switch ($CMD) {
  case "SAVE_FILE":
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");

    $response = array();
    if (0 < $_FILES['file']['error']) {
      $response = array('result' => $_FILES['file']['error']);
    } else {
      $upload = move_uploaded_file($_FILES['file']['tmp_name'], $fileRepo . "/" . $_FILES['file']['name']);
      $response = array('result' => $upload ? "OK" : "KO");
    }
    echo json_encode($response);
    break;

  case "LIST_FILES":
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");
    $fileList = array();
    foreach (new DirectoryIterator($fileRepo) as $file) {
      if ($file->isDot()) continue;
      $fileList[] = [
          'name' => $file->getFilename(),
          'path' => $fileRepo . "/" . $file->getFilename(),
          'extention' => $file->getExtension(),
          'size' => $file->getSize()
      ];
    }
    echo json_encode($fileList);
    break;

  case "DELETE_FILE":
    break;

}
