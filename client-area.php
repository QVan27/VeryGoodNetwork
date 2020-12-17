<?php
session_start();
include('inc/pdo.php');
include('inc/function.php');
$title = 'Client area';

if (!isLogged()) {
    header('location: 403.php');
}


include('inc/header.php');
?>

<section id="banner-client">
    <div class="navBar">

        <div class="title">Votre Espace</div>
    </div>
    <div class="title-main">
        <h1>Mode de consultation</h1>
    </div>
    <div class="select">
        <div class="graph">
            <img src="asset/img/graphique.svg" alt="">
            <div class="btn">
                <a href="#" class="btn from-left">Graphiques</a>
            </div>
            <!-- <p>Graphiques</p> -->
        </div>
        <div class="split"></div>
        <div class="logs">
            <img src="asset/img/logs.svg" alt="">
            <div class="btn">
                <a href="#" class="btn from-right">Logs</a>
            </div>
            <!-- <p>Logs</p> -->
        </div>
    </div>
    <!-- <div class="footer-client"></div> -->
</section>

<?php
include('inc/footer.php');
