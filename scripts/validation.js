$(contactForm).ready(function () {
    // Contact form rules
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },

            email: {
                required: true,
                email: true,
            },

            subject: {
                required: true,
                minlength: 2,
            },

            message: {
                required: true,
                minlength: 10,
            },
        },
        // jQuery messages if invalid
        messages: {
            name: {
                required: "Please provide a name.",
                minlength: "Name cannot just be a letter."
            },

            email: {
                required: "Please provide an email.",
                email: "Email needs to be a valid email address.",
            },

            subject: {
                required: "Please provide the subject of your query.",
                minlength: "Subject too short."
            },

            message: {
                required: "Please give details about your query here.",
                minlength: "Please add detail to message"
            },
        },
    })

    $('#submitForm').bind('keyup blur click', function () {
        if ($('#contactForm').validate().checkForm()) { // Checks form for validity
            // Enables button
            $('#submit').removeClass('button_disabled').attr('disabled', false);
        } else {
            // Disables button
            $('#submit').addClass('button_disabled').attr('disabled', true);
        }
    })
});

$(calcForm).ready(function () {
    // Calculator form rules
    $('#calcForm').validate({
        rules: {
            amount: {
                required: True,
                minlength: 2,
            },

            years: {
                required: True,
                minlength: 2,
            },

            income: {
                required: True,
                minlength: 2,
            },
        },
        // Disables jQuery messages
        messages: {
            amount: "",
            years: "",
            income: "",
        },
    });
});