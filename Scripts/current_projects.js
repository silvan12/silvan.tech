$(document).ready(function () {
    $.getJSON("Projects/current_projects.json", function (result) {
        if (jQuery.isEmptyObject(result)) {
            $(".home__list").append([
                `<li>Nothing &#128564;</li>`
            ]);
        } else {
            $.each(result, function (i, data) {
                $(".home__list").append([
                    `<li><a href="` + data.github + `">` + data.name + `</a></li>`
                ]);
            });
        }
    });
})


/*
<li><a href="https://github.com/silvan12/fps_project">fps_project</a></li>
<li><a href="https://github.com/silvan12/silvan.tech">silvan.tech</a></li>*/
