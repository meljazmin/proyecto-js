$(function () {


    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: false
        });
    }
    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: "Diferentes tipos de flores",
                date: 'Publicado  ' + moment().format("MMMM dddd YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam saepe facere."
            },
            {
                title: "Flores aromáticas",
                date: 'Publicado  ' + moment().format("MMMM dddd YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam saepe facere."
            }, {
                title: "Margaritas",
                date: 'Publicado  ' + moment().format("MMMM dddd YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam saepe facere."
            }, {
                title: "Jazmines",
                date: 'Publicado  ' + moment().format("MMMM dddd YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam saepe facere."
            }, {
                title: "Rosas",
                date: 'Publicado  ' + moment().format("MMMM dddd YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam saepe facere."
            },
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">

                    <h2>${item.title}</h2>
                    <span class="fecha">${item.date}</span>
                    <p>${item.contenido}</p>
                    <a href="#" class="button">Leer más</a>
                </article>
        `;
            $("#articulos").append(post);

        });
    }

    //Selector de temas

    var theme = $("#theme");
    $("#green").on("click", function () {
        theme.attr("href", "css/green.css");
    })


    $("#blue").on("click", function () {
        theme.attr("href", "css/blue.css");
    })

    $("#red").on("click", function () {
        theme.attr("href", "css/red.css");
    })

    //Scroll arriba de la web
    $(".subir").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0 //subir hacia lo más alto de la página

        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function () {
        var formName = $("#formName").val();
        localStorage.setItem("formName", formName);
    });
    var formName = localStorage.getItem("formName");

    if (formName != null && formName != undefined) {
        var aboutP = $("#about p");

        $("#about p").html("Bienvenido" + formName);

        aboutP.append("<a href='#' id='logout'>Cerrar sesión</a>");


        $("#login").hide();
        $("#logout").on("click", function () {
            localStorage.clear();
            location.reload();
        });

    }

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000)
    }

    //Validación
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name = 'date']").datepicker();


        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true

        });
    }


});
