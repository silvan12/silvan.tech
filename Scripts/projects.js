$(document).ready(function () {
    $.getJSON("Projects/projects.json", function (result) {
        $.each(result, function (i, data) {
            $(".main").append([
                `<div class="game__card">
                    <a href="` + data.github + `">
                        <img class="game__image" src="` + data.image + `" alt="` + data.alt + `">
                    </a>
                    <div class="game__description">
                        <h2>` + data.title + `</h2>
                        <p>` + data.description + `</p>
                        <div class="game__footer">
                            <small><a href="` + data.github + `">View on Github</a> | <a href=` + data.demo + `>Play demo in browser</a></small>
                        </div>
                    </div>
                </div>
            `]);
        });
    });
})
