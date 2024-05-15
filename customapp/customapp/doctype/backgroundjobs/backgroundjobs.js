// frappe.ui.form.on('BackgroundJobs', {
//     refresh: function(frm) {
//         // Add a custom button to the form
//         frm.add_custom_button(__('Open Dialog'), function() {
//             // Define the function to handle the click event
//             openDialog(frm);
//         });
//     },
//     on_submit: function(frm) {
//         frappe.call(function(){
//             submit_form(frm.doc);
//         })
//         // frm.page.set_primary_action(
//         //     __('Save'),
//         //     function() {
//         //         submit_form(frm.doc);  // Pass frm.doc instead of just frm
//         //     },
//         //     'icon-save'
//         // );
//     }
// });
// function submit_form(doc) {
//     // Your logic to handle form submission
//     frappe.call({
//         method: 'customapp.customapp.doctype.backgroundjobs.backgroundjobs.submit_form',
//         args: {
//             data: doc
//         },
//         callback: function(response) {
//             // Handle the response if needed
//             if (response.message) {
//                 frappe.msgprint('Form submitted successfully');
//             } else {
//                 frappe.msgprint('Failed to submit form');
//             }
//         }
//     });
// }
// // Define the function to open the dialog box
// function openDialog(frm) {
//     frappe.prompt([
//         {
//             fieldname: 'item',
//             fieldtype: 'Data',
//             label: 'Dialog Field',
//             reqd: true
//         },
//         {
//             fieldname:'quantity',
//             fieldtype:'Int',
//             label:'Quantity',
//             reqd: true
//         }
//     ], function(values) {
//         // Callback function to handle the dialog input
//         var item = values.item;
//         var quantity = values.quantity;
//         // Do something with the dialog value
//         var child_table = frm.add_child('items', {
//             'item': item,
//             'quantity': quantity
//         });
        
//         // Refresh the form to reflect the changes
//         frm.refresh_field('items');
        
//     }, 'Enter Details', 'Submit');
// }
frappe.ui.form.on('BackgroundJobs', {
    refresh: function(frm) {
        // Add a custom button to the form
        frm.add_custom_button(__('Open Dialog'), function() {
            // Define the function to handle the click event
            openDialog(frm);
        });
    },
});

// Define the function to handle form submission
// function submit_form(doc) {
//     frappe.call({
//         method: 'customapp.customapp.doctype.backgroundjobs.backgroundjobs.submit_form',
//         args: {
//             email: doc.email
//         },
//         callback: function(response) {
//             // Handle the response if needed
//             if (response.message) {
//                 frappe.msgprint('Form submitted successfully');
//             } else {
//                 frappe.msgprint('Failed to submit form');
//             }
//         }
//     });
// }

// Define the function to open the dialog box
function openDialog(frm) {
    frappe.prompt([
        {
            fieldname: 'item',
            fieldtype: 'Data',
            label: 'Dialog Field',
            reqd: true
        },
        {
            fieldname: 'quantity',
            fieldtype: 'Int',
            label: 'Quantity',
            reqd: true
        }
    ], function(values) {
        // Callback function to handle the dialog input
        var item = values.item;
        var quantity = values.quantity;
        // Do something with the dialog value
        var child_table = frm.add_child('items', {
            'item': item,
            'quantity': quantity
        });
        
        // Refresh the form to reflect the changes
        frm.refresh_field('items');
        
    }, 'Enter Details', 'Submit');
}
