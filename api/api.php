<?php  
$test = array();

        $response4 = array();
        $response4["id"] = "1";
        $response4["image"] = "http://sq.fm1032.net/music_test/images/11.jpg";

        
        $response5 = array();
        $response5["id"] = "2";
        $response5["image"] = "http://sq.fm1032.net/music_test/images/22.jpg";


        $response6 = array();
        $response6["id"] = "3";
        $response6["image"] = "http://sq.fm1032.net/music_test/images/test.jpg";

        
        $data3=array();
        array_push($data3,$response4,$response5,$response6);

        echo json_encode($data3);
  
?>  