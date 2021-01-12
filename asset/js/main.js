//----------------------
//OUVERTURE JQUERY
//----------------------

$(document).ready(function () {



    //---------------------------------
    //UPDATE DONNEE DES TRAMES
    //---------------------------------



    $.ajax({
        type: 'post',
        url: 'ajax/ajax-getDataTrame.php',
        //data: ,
        dataType: 'json',

        success: function (trames) {
            console.log(trames)
            isTimeoutOk(trames);
            showBarProtocol(trames);
            showBarTTLProtcol(trames);
            showLineTrendDay(trames);
            showTimesGraph(trames);
            getLog(trames);
        },
    })


    //-----------------
    //TAB Button 
    //-----------------

    $('.tabButton').on('click', (button) => {
        const tabButtonId = button.target.id.split('-')
        const tabIdButton = $('section#client-area-graph-onglet-' + tabButtonId[1])
        const tabs = tabIdButton.parent()
        const countIdTabs = tabs.children().length
        
        for (let i = 1; i <= countIdTabs; i++) {
            if(i == tabButtonId[1]) {
                $('section#client-area-graph-onglet-' + i).fadeIn()
                $('#buttonOnglet-' + i).addClass('active')
            } else {
                $('section#client-area-graph-onglet-' + i).fadeOut()
                $('#buttonOnglet-' + i).removeClass('active')
            }
            
        }
    })



    //-----------------
    //PLUGIN MICROMODAL
    //-----------------




    MicroModal.init({
        onShow: modal => console.info(`${modal.id} is shown`),
        onClose: modal => console.info(`${modal.id} is hidden`),
        openTrigger: 'data-custom-open',
        closeTrigger: 'data-custom-close',
        openClass: 'is-open',
        disableScroll: true,
        disableFocus: false,
        awaitOpenAnimation: false,
        awaitCloseAnimation: false,
        debugMode: true
    });

    //----------------------
    //PLUGIN MENU NAVIGATION
    //----------------------

    (function () {

        $.fatNav();

    }());


    //-------------------------
    //FORMULAIRE D'INSCRIPTION
    //-------------------------

    //Verification formulaire en JS (Pas sécurisé)
    $('#nom-signin').on('keyup', function () {
        verifText('nom-signin', 2, 50);
    })

    $('#prenom-signin').on('keyup', function () {
        verifText('prenom-signin', 2, 50);
    })

    $('#email-signin').on('keyup', function () {
        verifEmail('email-signin');
    })

    $('#password-signin').on('keyup', function () {
        checkLengthPassword('password-signin');
    })

    $('#confirm-password-signin').on('keyup', function () {
        checkConfirmPassword('confirm-password-signin', 'password-signin');
    })


    //Requete AJAX pour l'inscription
    $('#formSignin').on('submit', function (e) {
        e.preventDefault();
        let form = $('#formSignin');
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form.serialize(),
            dataType: 'json',

            beforeSend: function () {
                $('#btn-submit-signin').css('display', 'none');
                //console.log(form);
            },

            success: function (response) {
                $('#btn-submit-signin').fadeIn('200');
                console.log(response)
                //console.log(response.errors)
                if (response.success) {
                    connexionSuccess();
                } else if (!response.success) {
                    $.each(response.errors, function (index, value) {
                        $('span.error-' + index + '-signin').css('color', '#ff6b6b')
                        $('span.error-' + index + '-signin').html(value)
                    })

                }
            }
        })
    })



    //-------------------------
    //FORMULAIRE DE CONNEXION
    //-------------------------

    $('#formLogin').on('submit', function (e) {
        e.preventDefault();
        let formLogin = $('#formLogin');
        $.ajax({
            type: 'POST',
            url: formLogin.attr('action'),
            data: formLogin.serialize(),
            dataType: 'json',

            beforeSend: function () {
                $('#btn-submit-login').css('display', 'none');
            },

            success: function (response) {
                $('#btn-submit-login').fadeIn('200');
                //console.log(response)
                if (response.success) {
                    connexionSuccess();
                } else if (!response.success) {
                    $('span.error-password-login').html('Email ou mot de passe incorrect');
                }
            },
        })
    })




    //----------------------
    //Scroll reveal About us
    //----------------------

    const sr = ScrollReveal();

    sr.reveal('#about-picture1', {
        origin: 'left',
        distance: '200px',
        duration: 800,
    });

    sr.reveal('#about-picture2', {
        origin: 'bottom',
        distance: '100px',
        duration: 500,
        delay: 600,
    });

    sr.reveal('#about-picture3', {
        origin: 'right',
        distance: '100px',
        duration: 500,
        delay: 1000,
    });

    sr.reveal('#about-picture4', {
        origin: 'left',
        distance: '100px',
        duration: 500,
        delay: 1200,
    });

    sr.reveal('#about-section0 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('#about-section1 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('#about-section1 p', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 800,
    });

    sr.reveal('#about-section2 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('.single-profil1', {
        origin: 'bottom',
        distance: '100px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.single-profil2', {
        origin: 'bottom',
        distance: '100px',
        duration: 500,
        delay: 800,
    });

    sr.reveal('.single-profil3', {
        origin: 'bottom',
        distance: '100px',
        duration: 500,
        delay: 1200,
    });

    sr.reveal('.single-profil4', {
        origin: 'bottom',
        distance: '100px',
        duration: 500,
        delay: 1600,
    });

    sr.reveal('#about-section3 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('.about-section3number1', {
        origin: 'left',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('.about-section3number2', {
        origin: 'left',
        distance: '500px',
        duration: 600,
        delay: 600,
    });

    sr.reveal('.about-section3number3', {
        origin: 'left',
        distance: '800px',
        duration: 700,
        delay: 1000,
    });

    sr.reveal('.about-section3number4', {
        origin: 'left',
        distance: '1000px',
        duration: 800,
        delay: 1400,
    });

    sr.reveal('#about-section4 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('#about-section4 .picture', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });


    sr.reveal('#about-section4 .Stick', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 600,
    });


    sr.reveal('#about-section4 .textarg', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 800,
    });

    sr.reveal('#about-section5 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('#imagepubliciteaboutsection1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('#imagepubliciteaboutsection2', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 600,
    });

    sr.reveal('#imagepubliciteaboutsection3', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 800,
    });

    sr.reveal('#about-section6 h1', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 200,
    });

    sr.reveal('#about-section6 #aboutusbutton', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });
    // SCROLL REVEAL HOME PAGE

    sr.reveal('.wrap-banner', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });


    sr.reveal('.banner-btn', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.content', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });


    sr.reveal('.text', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.text2', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.text3', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.text4', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('.boximg4', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });

    sr.reveal('#imgmiddle4', {
        origin: 'bottom',
        distance: '200px',
        duration: 500,
        delay: 400,
    });


    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 210,
            itemMargin: 5
        });
    });

    //const parallax = document.querySelector('#about-picture2');


    //window.addEventListener('scroll', () =>{
    //    parallax.style.backgroundPositionY = window.scrollY / 4 + "px";
    //});

    //Client area

    $("#btn-ca-main").on("click", function () {
        $('#client-area-main').show();
        $('#client-area-graph').hide();
        $('#client-area-logs').hide();
        console.log("main");
    });

    $("#btn-ca-graph").on("click", function () {
        $('#client-area-main').hide();
        $('#client-area-graph').show();
        $('#client-area-logs').hide();
    });

    $("#btn-ca-logs").on("click", function () {
        $('#client-area-main').hide();
        $('#client-area-graph').hide();
        $('#client-area-logs').show();
        // getLog(trames);
    });



    //----------------------
    //FERMETURE JQUERY
    //----------------------
})


//----------------------
//FONCTIONS JS
//----------------------

//fonction pour verifier la longueur du texte
function verifText(id, min, max) {
    var error = $('span.error-' + id);
    var champ = $('input#' + id);
    var isGood = champ.val().length;

    if (isGood == 0) {
        error.html('Veuillez remplir le champ');
    } else if (isGood < min) {
        error.html('Veuillez utiliser au minimum ' + min + ' caractères');
    } else if (isGood > max) {
        error.html('Veuillez utiliser au maximum ' + max + ' caractères');
    } else {
        error.html('<i class="fas fa-check" style="color: #51cf66;"></i>');
    }
}

//Fonction pour verifier qu'un email est valide
function verifEmail(id) {
    var error = $('span.error-' + id);
    var champ = $('input#' + id);
    var checkEmail = champ.val()

    var testEmail = /.+@.+\..+/;

    if (champ.val().length == 0) {
        error.html('Veuillez remplir le champ');
    } else if (!testEmail.test(checkEmail)) {
        error.html('Email non valide');
    } else {
        error.html('<i class="fas fa-check" style="color: #51cf66;"></i>');
    }
}

//fonction pour verifier la longueur du mot de passe
function checkLengthPassword(id) {
    var error = $('span.error-' + id);
    var champ = $('input#' + id);
    var checkPassword = champ.val();

    if (checkPassword.length == 0) {
        error.css('color', '#e74c3c');
        error.html('Veuillez remplir le champ');
    } else if (checkPassword.length >= 50) {
        error.css('color', '#e74c3c');
        error.html('Maximum 50 caractères');
    } else if (checkPassword.length >= 1 && checkPassword.length <= 4) {
        error.css('color', '#e74c3c');
        error.html('Mot de passe faible');
    } else if (checkPassword.length >= 5 && checkPassword.length <= 8) {
        error.css('color', '#f39c12');
        error.html('Mot de passe moyen');
    } else if (checkPassword.length >= 9 && checkPassword.length <= 49) {
        error.css('color', '#27ae60');
        error.html('Mot de passe fort');
    }
}

//Fonction check mdp

function checkConfirmPassword(idBis, id) {
    var error = $('span.error-' + idBis);
    var champ1 = $('input#' + idBis);
    var champ2 = $('input#' + id);
    var checkPassword = champ2.val();
    var password = champ1.val();

    if (checkPassword != password) {
        error.html('<i class="fas fa-times" style="color: #ff6b6b;"></i>')
    } else if (checkPassword === password) {
        error.html('<i class="fas fa-check" style="color: #51cf66;"></i>');
    }
}


//Fonction pour mettre ajours la base de donnée des trames
function connexionSuccess() {
    $.ajax({
        type: 'POST',
        url: 'https://floriandoyen.fr/resources/frames.php',
        data: '',
        dataType: 'json',

        beforeSend: function () {
        },

        success: function (response) {
            //console.log(response)
            $.ajax({
                type: 'POST',
                url: 'ajax/ajax-updateTrame.php',
                data: { trames: response },
                //dataType: 'json',

                success: function (response2) {
                    //console.log(response2)
                }
            })
        },
    })
    MicroModal.close('modal-login');
    window.location.replace("client-area.php");
}



function getLog(trames) {
    var html = '<div class="logTrame">'
    $.each(trames, function (i) {
        html += '<p>' + trames[i].log + '</p>'
    })
    html += '</div>';
    console.log(html)
    $('.box-log').append(html)
}

function isTimeoutOk(trames){

    const countTrameStatusOK = trames.filter(trame => trame.status === "OK").length
    const countTrameStatusTimeOut = trames.filter(trame => trame.status === "TIMEOUT").length


    //Début graphique camenbert circulaire rotatif qui ressembleu au soleil r=pi Trame OK TIMEOUT

    var ctxlined = document.getElementById('graphcamenbert').getContext('2d');

    var myDoughnutChart = new Chart(ctxlined, {
        type: 'pie',
        data: {
            labels: ['Ok', 'Timeout'],
            datasets: [{
                label: '',
                data: [countTrameStatusOK,countTrameStatusTimeOut],
                backgroundColor: [
                    '#ABDA56',
                    '#DA5669',
                ],
                borderWidth: 1,
                pointRadius: 9,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Graphique',
                fontSize: 32,
                fontColor: '#000',

            },
            legend:{
                position: 'bottom',
            },
            scales: {
                display: false,
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    display:false,
                    }],
                yAxes: [{
                    display:false,
                }]
            }
        }
    });
}

function showBarProtocol(trames){

    const countUDP = trames.filter(trame => trame.protocol_name === "UDP").length;
    const countTLS = trames.filter(trame => trame.protocol_name === "TLSv1.2").length;
    const countICMP = trames.filter(trame => trame.protocol_name === "ICMP").length;
    const countTCP = trames.filter(trame => trame.protocol_name === "TCP").length;
    //const total = countUPD + countTLS + countICMP + countTCP;


    var barlined = document.getElementById('graphbarprotocol').getContext('2d');

    var myBarChart = new Chart(barlined, {
        type: 'doughnut',
        data: {
            labels: ['UDP', 'TLS','ICMP','TCP'],
            datasets: [{
                label: '',
                data: [countUDP,countTLS,countICMP,countTCP],
                backgroundColor: [
                    '#DA5669',
                    '#ABDA56',
                    '#56DAC7',
                    '#8556DA'
                ],
                borderWidth: 1,
                pointRadius: 9,
            }]
        },
        options:{
            legend:{
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Graphique 2',
                fontSize: 32,
                fontColor: '#000',

            },
        }
    });
}

function moyenne(trames, method){

    const array = trames.filter(trame => {
        if(trame.protocol_name === method){
            return trame;
        }})
        .map((item) =>{
            return item.ttl;
        })

        const somme = array.reduce(( currentTotal, item ) => {
            return parseInt(item) + currentTotal;
        },0)

        const moyenne = somme / array.length
        return moyenne
}

function showBarTTLProtcol(trames){

    var udp = moyenne(trames, "UDP");
    var tls = moyenne(trames, "TLSv1.2");
    var icmp = moyenne(trames, "ICMP");
    var tcp = moyenne(trames, "TCP");

    var moy = (udp + tls + icmp + tcp) / 4;
    

    var ctx = document.getElementById('graphbarttl').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['UDP', 'TLS', 'ICMP', 'TCP', 'Moyenne'],
        datasets: [{
            label: '# of Votes',
            data: [udp, tls, icmp, tcp, moy, 100],
            backgroundColor: [
                '#DA5669',
                '#ABDA56',
                '#56DAC7',
                '#8556DA',
                '#7a8584'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Graphique 3',
            fontSize: 32,
            fontColor: '#000',

        },
        legend:{
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
}

function showLineTrendDay(trames){

    var h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let index = 0; index < trames.length; index++) {
        h[trames[index]['date-trame-hour']] = h[trames[index]['date-trame-hour']] + 1
    }

    var ctxmpo = document.getElementById('graphlineday').getContext('2d');
    var chart4 = new Chart(ctxmpo, {
        type: 'bar',
    data: {
        labels: ['0h','1h', '2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h'],
        datasets: [{
            label: '# of Votes',
            data: h,
            backgroundColor: [
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            display: false,
        },
        title: {
            display: true,
            text: 'Tendance journaliere',
            fontSize: 32,
            fontColor: '#000',

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });

}

function showTimesGraph(trames){
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [0,0,0,0,0,0,0,0,0,0,0,0];

    let chooseyearstime = "null"

    $('#btngraphtime').on('click',function(){

        console.log("------------");
        var chooseyearstime = $('#cars').children("option:selected").val();
        console.log(chooseyearstime)

        if(chooseyearstime === "null"){
            console.log("start")
        }else if(chooseyearstime === "mois"){
            console.log("tu as choisit le mois bg")
        }else if(chooseyearstime === "years"){

            let datetoday = new Date();
            datetoday = datetoday.getFullYear()
            console.log(datetoday);
            $('#formyearstime').empty();
            for (let index = datetoday - 5 ; index < datetoday + 1; index++) {
                $('#formyearstime').append('<option value="'+ index +'">'+ index +'</option>')
            }


            console.log("tu as choisit l année petit gros bg")
        }else{
            alert("Erreur");
            window.location.replace("403.php");
        }
    })

    $('#btngraphtimeyears').on('click',function(){
        let yearschoosenumber = $('#formyearstime').children("option:selected").val()
        databis = trames.map((trame) => [trame['date-trame-year'], trame['date-trame-month']]).filter((trame) => trame[0] === yearschoosenumber).map((trame) => trame[1])
        data = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(let index = 0; index < databis.length; index++) {
            data[[databis[index]] - 1] = data[[databis[index]] - 1] + 1;
            // 0[[ 12 - 1]](0) = 0[[ 12 - 1]] (0) + 1 = 1
        }
        console.log(data)


        showTimeGraphVisual(data, mL);
    })


function showTimeGraphVisual(data, mL){
    var ctxmpot = document.getElementById('graphlinetime').getContext('2d');
    var chart5 = new Chart(ctxmpot, {
        type: 'bar',
    data: {
        labels: mL,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',
                'rgba(196, 229, 56,1.0)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            display: false,
        },
        title: {
            display: true,
            text: 'Connexion',
            fontSize: 32,
            fontColor: '#000',

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
}



}