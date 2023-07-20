<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="Dharmik Somani-1.png">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
   
    <title>Dharmik somani</title>
    
</head>
<body>
    <header>
    <nav>
        <div class="logo">Dharmik<b>.</b></div>
        <ul class="navItems" >
            <li><a href="#Hero"><i class="fa fa-home"></i> Home</a></li> 
            <li><a href="#About"><i class="fas fa-book-reader"></i> About me</a></li>
            <li><a href="#Skills"> <i class="fa-solid fa-code"></i>Skills</a></li>
            <li><a href="#Contact"><i class="fas fa-comment"></i> Contact</a></li>
        </ul>
        <div class="manuu">
            <i class="fa-solid fa-bars" id="manu-icon"></i>
        </div>
    </nav>
</header>

<section id="Hero">
    <div class="wrapper">
        <div class="cols cols0">
            <span class="topline">Hello!!</span>
            <h1>I'm <span class="multiText">Dharmik somani</span></h1>
            <div class="btns">
                <button>My projects</button> 
                <button> Download My CV</button>
            </div>
        </div>
        <div class="cols cols1">
            <div class="imgbox">
                <img src="1.png">
            </div>
        </div>
    </div>
</section>
<section id="About">
    <div class="A-containe">
        <div class="contant-section">
            <h2>About me</h2>
            <div class="row">
                <div class="column">
                    <div class="ing2">
                        <img id="img2" src="2.png" alt="">
                    </div>
                </div>
                <div class="column">
                    <p class="dis"align="justify"> As a student of computer engineering, I am deeply interested in the technical side of computing and software development. My focus as a backend developer is on creating efficient and effective server-side systems that power the applications we use every day.Through my coursework and personal projects, I have gained a strong foundation in programming languages such as PHP, HTML, and CSS.</p>
                </div>
            </div>
        </div>
    </div>
    
</section>
<section id="Skills">
    <h2>Skills</h2>
    <div class="skill">
        <div class="set">
            <span class="fas fa-globe"></span>
            <h3>Web Development</h3>
            <div class="list">
                <label>Html</label>
                <i class="fab fa-html5"></i>
            </div>
            <div class="list">
                <label>Css</label>
                <i class="fab fa-css3-alt"></i>
            </div>
            <div class="list">
                <label>JavaScript</label>
                <i class="fab fa-js"></i>
            </div>
            <div class="list">
                <label>php</label>
                <i class="fab fa-php"></i>
            </div>
        </div>
        <div class="set">
            <span class="fas fa-tools "></span>
            <h3>Framework</h3>
            <div class="list">
                <label>laravel</label>
                <i class="fab fa-laravel"></i>
            </div>
            <div class="list">
                <label>Bootstrap</label>
                <i class="fab fa-bootstrap"></i>
            </div>
            
        </div>
        <div class="set">
            <span class="fa fa-laptop"></span>
            <h3>Other</h3>
            <div class="list">
                <label>blender</label>
                <i class="fas fa-dice-d6"></i>
            </div>
            <div class="list">
                <label>Unity</label>
                <i class="fab fa-unity"></i>
            </div>
            
        </div>
    </div>
    
</section>
<section id="Contact">
    <h2>Contact me</h2>
    <div class="bodyC">
    <div class="container">
        <div class="content">
           <div class="left-side">
                <div class="address Detail">
                    <i class="fa-solid fa-location-dot fa-beat"></i>
                    <div class="topic">Address</div>
                    <div class="text">luhar seri,aveda gate</div>
                    <div class="text2">Botad</div>
                </div>
                <div class=" Phone Detail">
                    <i class="fa-solid fa-phone fa-beat"></i>
                    <div class="topic">Phone</div>
                    <div class="text">6359726017</div>
                </div>
                <div class="Email Detail">
                    <i class="fa-solid fa-envelope fa-beat"></i>
                    <div class="topic">Email</div>
                    <div class="text">dharmiksomani51@gmail.com</div>
                </div>
           </div>
           <div class="right-side">
                <div class="topic-text">Send me a massage</div>
                <p>If you have any work from me or any type of quaries related to to my work, you can send me massage from here. It's my pleasure to help you.</p>
                <form action="contact.php" method="post">
                    <div class="input-box">
                        <input type="text" name="name" placeholder="Enter your Name" required>
                    </div>
                    <div class="input-box">
                        <input type="email" name="email" placeholder="Enter your Email" required>
                    </div> 
                    <div class="input-box massage-box">
                        <textarea  name="massage" placeholder="Your massage " required></textarea>
                    </div>
                    <div class="button">
                        <input type="submit" value="Send Now">
                    </div>                   
                </form>
            </div>
        </div>
    </div>
</div>
</section id="Footer">
<footer>
    <div class="fcontainer">
        <div class="fcontant">
            <div class="links">
                <a href="https://www.linkedin.com/in/dharmik-somani-022407220"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/DSSomani"><i class="fab fa-github"></i></a>
                <a href="https://instagram.com/d_s_somani?igshid=ZDdkNTZiNTM="><i class="fab fa-instagram"></i></a>
           </div>
           <br>
            &copy  2023 | Dharmik Somani.
        </div>
    </div>
</footer>
<script type="text/JavaScript" src="script.js"></script>
</body>
</html>