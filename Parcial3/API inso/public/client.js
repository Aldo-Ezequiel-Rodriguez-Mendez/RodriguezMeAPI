$(document).ready(function () {
    $(".dropdown-menu a").on("click", function () {
      const selText = $(this).text();
      $("#display")
        .removeClass("none")
        .html("<p>" + selText + "</p>");
      if (selText == "Get todos los videojuegos") {
        $("#display").getTodo();
      }
      if (selText == "Get solo un videojuego") {
        $("#display").getUno();
      }
      if (selText == "Post comentarios a un videojuego") {
        $("#display").postCom();
      }
      if (selText == "Post un nuevo videojuego") {
        $("#display").postVid();
      }
      if (selText == "Delete todos los videojuegos") {
        $("#display").delTodos();
      }
      if (selText == "Delete solo un videojuego") {
        $("#display").delUno();
      }
    });
  });
  
  $.fn.getTodo = function () {
    $.getJSON("http://localhost:8080/videojuego", function (data) {
      $("#display").append("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
    });
  };
  
  $.fn.getUno = function () {
    $("#display").append(
      '<input type="text" id="getUno" name="name"  autocomplete="off" placeholder="id">\
          <button type="button" class="form-btn" id="unVideojuego">Obten mi videojuego!</button>'
    );
  
    $("#unVideojuego").on("click", function () {
      $.getJSON(
        "http://localhost:8080/videojuego/" + $("#getUno").val(),
        function (data) {
          $("#display").html(
            "<p>Aqui esta tu videojuego!</p><pre>" +
              JSON.stringify(data, null, 2) +
              "</pre>"
          );
        }
      );
    });
  };
  
  $.fn.postCom = function () {
    $("#display").append(
      '<input type="text" id="postCom" name="id" placeholder="id" autocomplete="off">\
      <input type="text" id="comentario" name="comentario" placeholder="comentario" autocomplete="off">\
      <button type="button" class="form-btn" id="unComentario">POST comentario!</button>'
    );
  
    $("#unComentario").on("click", function () {
      $.ajax({
        url: "http://localhost:8080/videojuego/" + $("#postCom").val(),
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({ comentario: $("#comentario").val() }),
        success: function (data) {
          $("#display").html(
            "<p>Gracias por tu comentario! Aqui estan todos los comentarios.</p><pre>" +
              JSON.stringify(data.comentarios, null, 2) +
              "</pre>"
          );
        },
        error: function (error) {
          $("#display").html("<p>Videojuego invalido :(</p>");
        },
      });
    });
  };
  
  $.fn.postVid = function () {
    $("#display").append(
      '<input type="text" id="id" name="id" placeholder="id" autocomplete="off">\
      <input type="text" id="nombre" name="nombre" placeholder="Nombre" autocomplete="off">\
      <input type="text" id="descripcion" name="descripcion" placeholder="Descripcion" autocomplete="off">\
      <button type="submit" class="form-btn" id="nuevoVideojuego">CREAR nuevo videojuego!</button>'
    );
  
    $("#nuevoVideojuego").on("click", function () {
      $.ajax({
        url: "http://localhost:8080/videojuego/",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({ id: $("#id").val(),
                              nombre: $("#nombre").val(),
                              descripcion: $("#descripcion").val()}),
        success: function (data) {
          $("#display").html(
            "<p>Un nuevo videojuego se a creado!</p><pre>" +
              JSON.stringify(data, null, 2) +
              "</pre>"
          );
        },
        error: function (error) {
          $("#display").html("<p>Ha ocurrido un error :(</p>");
        },
      });
    });
  };
  
  $.fn.delTodos = function () {
    $("#display").append(
      '<button type="click" class="form-btn" id="delTodos">BORRAR TODOS!</button>'
    );
  
    $("#delTodos").on("click", function () {
      $.ajax({
        url: "http://localhost:8080/videojuego/",
        type: "delete",
        success: function (data) {
          $("#display").html(
            "<p>Eliminación de Todos Completada!</p><pre>" +
              JSON.stringify(data, null, 2) +
              "</pre>"
          );
        },
        error: function (error) {
          $("#display").html("<p>Ha ocurrido un error :(</p>");
        },
      });
    });
  };
  
  $.fn.delUno = function () {
    $("#display").append(
      '<input type="text" id="delUno" name="id" placeholder="id" autocomplete="off">\
      <button type="click" class="form-btn" id="delUnoBtn">DELETE Videojuego!</button>'
    );
  
    $("#delUnoBtn").on("click", function () {
      $.ajax({
        url: "http://localhost:8080/videojuego/" + $("#delUno").val(),
        type: "delete",
        success: function (data) {
          $("#display").html(
            "<p>Videojuego Eliminado.</p><pre>" + JSON.stringify(data, null, 2) + "</pre>"
          );
        },
        error: function (error) {
          $("#display").html("<p>Ha ocurrido un error :(</p>");
        },
      });
    });
  };