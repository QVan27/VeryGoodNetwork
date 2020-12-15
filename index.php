<?php
include('inc/pdo.php');
include('inc/function.php');
$title = 'Home';



include('inc/header.php');
?>


<section id="banner">
        <img src="asset/img/logo-light.svg" class="logo">
        <div class="banner-text">
                <h1>Very<span class="red">Good</span>Network</h1>
                <p>Responsive Network Website available now 24h/24h</p>
        </div>
        <div class="banner-btn">
                <?php if (empty($_SESSION)) : ?>
                        <button data-custom-open="modal-signin" id="openModalSignin">Insciption</button>
                        <button data-custom-open="modal-login" id="openModalLogin">Connexion</button>
                <?php endif; ?>
        </div>
</section>


<div class="wrap">
        <div class="content">
                <h2>Lorem ipsum dolor s<br />Lorem ipsum dolor sit amet consectetur, .<br />Lorem ipsum dolor sit amet consectetur, adipisicing .</h2>
        </div>
</div>
<div class="content2">
        <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
        <div class="middle">
                <div class="text">John Doe</div>
        </div>

</div>

<?php
include('inc/footer.php');
