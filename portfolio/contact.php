<?phP
$name=$_POST['name'];
$email=$_POST['email'];
$massage=$_POST['massage'];
if(isset($name) || isset($email) || isset($massage)){

    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
    die('Connection Failed : '.$conn->$connection_error);
    }else{
            $stmt = $conn->prepare("insert into contact(name,email,massage)
            values(?,?,?)");
            $stmt->bind_param("sss",$name,$email,$massage);
            $stmt->execute();
            echo "<script>alert(' massage sent. ')</script>";
            echo "<script type='text/javascript'> document.location = 'index.php'; </script>";
            $stmt->close();
            $conn->close();    
            
        }
    }

?>