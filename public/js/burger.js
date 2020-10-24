$(function () {
  $('.add-burger').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurgerName").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })

  $('.devour-burger').on('click', function(event) {
    console.log('devoured');
    event.preventDefault();
    let id = $(this).data('id');

    var newState = {
      devoured: true
    };
  
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        console.log("changed state to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.delete-burger').on('click', function(event) {
    event.preventDefault();

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })
})
