﻿$(document).ready(function () {
    debugger;
    $.ajaxSetup({ cache: false });

    $("#openDialog").on("click", function (e) {
        debugger;
        e.preventDefault();
        var url = ensureAppPath("User/Create");

        var mydialog = $("#dialog-edit").dialog({
            title: 'Add User',
            autoOpen: false,
            resizable: false,
            height: 400,
            width: 400,
            show: { effect: 'drop', direction: "up" },
            modal: true,
            draggable: false,
            open: function (event, ui) {
                $(this).load(url);
            },
            close: function (event, ui) {
                $(this).dialog('close');
            }
        });
        mydialog.dialog('open');
        //$("#dialog-edit").dialog('open');
        return false;
    });

    $(".editDialog").on("click", function (e) {
        e.preventDefault();
        var url = $(this).attr('href');

       var mydialog = $("#dialog-edit").dialog({
            title: 'Edit User',
            autoOpen: false,
            resizable: false,
            height: 400,
            width: 400,
            show: { effect: 'drop', direction: "up" },
            modal: true,
            draggable: false,
            open: function (event, ui) {
                $(this).load(url);

            },
            close: function (event, ui) {
                $(this).dialog('close');
            }
        });

        mydialog.dialog('open');
        return false;
    });

    $(".confirmDialog").on("click", function (e) {

        var url = $(this).attr('href');
        $("#dialog-confirm").dialog({
            autoOpen: false,
            resizable: false,
            height: 170,
            width: 350,
            show: { effect: 'drop', direction: "up" },
            modal: true,
            draggable: true,
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                    window.location = url;

                },
                "Cancel": function () {
                    $(this).dialog("close");

                }
            }
        });
        $("#dialog-confirm").dialog('open');
        return false;
    });

    $(".viewDialog").on("click", function (e) {
        var url = $(this).attr('href');
        $("#dialog-view").dialog({
            title: 'View User',
            autoOpen: false,
            resizable: false,
            height: 355,
            width: 400,
            show: { effect: 'drop', direction: "up" },
            modal: true,
            draggable: true,
            open: function (event, ui) {
                $(this).load(url);

            },
            buttons: {
                "Close": function () {
                    $(this).dialog("close");

                }
            },
            close: function (event, ui) {
                $(this).dialog('close');
            }
        });

        $("#dialog-view").dialog('open');
        return false;
    });

    $("#btncancel").on("click", function (e) {
        $("#dialog-edit").dialog('close');

    });
});



