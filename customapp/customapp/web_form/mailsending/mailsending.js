frappe.ready(function() {
    frappe.web_form.events.on("after_save", function() {
        var emailField = frappe.web_form.get_values().email; 
        if (emailField) {
            sendFormSubmissionNotification(emailField);
        }
    });
});

function sendFormSubmissionNotification(email) {
    frappe.call({
        method: 'customapp.customapp.web_form.mailsending.mailsending.send_form_submission_notification', 
        args: {
            email: email 
        },
        callback: function(response) {
            if (response.message) {
                console.log('Form submitted successfully');
            } else {
                console.error('Failed to submit form:', response.error);
            }
        }
    });
}
