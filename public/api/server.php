<?php
$user = "zenithadii";
$password = "zenithadii@4321";
$host = "localhost";
$db = "test";

$conn = mysqli_connect($host, $user, $password, $db);

    if($_POST[1] == "fetch"){
        fetchData($conn);
    }elseif($_POST[1] == 'insert'){
        $Name = $_POST[2];
        $Designation = $_POST[3];
        $Address = $_POST[4];
        insertData($Name,$Designation, $Address,$conn);
        fetchData($conn);
    } else if($_POST[1] == "update"){
        $obj = json_decode($_POST[2]);
        updateData($obj->eid,$obj->designation, $obj->address,$obj->ename, $conn);
        fetchData($conn);
    }elseif($_POST[1] == "delete") {
        $Sno = $_POST[2];
        deleteData($Sno, $conn);
        fetchData($conn);
    }

    mysqli_close($conn);

function fetchData($conn){
    $sql = "SELECT 1 FROM LoginCheck WHERE UserName = 'admin' LIMIT 1;";
    $result = mysqli_query($conn, $sql);
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
    echo json_encode($data);
}

// function insertData($Name, $Designation, $Address, $conn){
//     $sql = "INSERT INTO employee (Eid, EName, EDesignation, EAddress) 
//     select (select max(Eid) +1 from employee) as srno, '".$Name."', '".$Designation."', '".$Address."'";
//     $result = mysqli_query($conn, $sql);
// }

// function updateData($Sno , $Designation, $Address,$Name, $conn)  {
    
//     $UpdateQuerry = "UPDATE employee SET Edesignation = '".$Designation."', Eaddress = '".$Address."', Ename = '".$Name."' WHERE Eid = ".$Sno." ";
//     $result = mysqli_query($conn, $UpdateQuerry);
// }

// function deleteData($Sno, $conn)  {
    
//     $UpdateQuerry = "DELETE FROM employee  WHERE Eid = ".$Sno." ";
//     $result = mysqli_query($conn, $UpdateQuerry);
// }

?>