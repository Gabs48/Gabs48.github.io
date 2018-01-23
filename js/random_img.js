var urlstr = "https://cors-anywhere.herokuapp.com/http://irobotique.be:9087/"

$.ajax({
            url: urlstr,
            type: "GET",
            crossDomain: true,
            xhrFields: {
                withCredentials: false
            },
            success: function (response) {
              console.log("PhD comics img found on " + urlstr);
              $('#img_phd').html(response);
            },
            error: function (xhr, status) {
              console.log("Error: PhD comics img not found. Check the server..");
            }
        });
