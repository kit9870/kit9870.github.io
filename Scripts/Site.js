function DisplayClock() {
    var momentNow = moment();
    $("#clock").html(momentNow.format("DD MMMM YYYY (ddd), h:mm:ss a"));
}

$(document).ready(function () {
    var interval = setInterval(function () {
        DisplayClock();
    }, 1000)

    $(".datefield").datepicker({
        dateFormat: "yy/mm/dd",
        onSelect: function () {
            $("#markSixRecordTable").DataTable().draw();
        }
    });
});