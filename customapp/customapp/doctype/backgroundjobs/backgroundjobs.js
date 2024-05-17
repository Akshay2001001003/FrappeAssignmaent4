
frappe.ui.form.on('BackgroundJobs', {
    refresh: function(frm) {
        frm.add_custom_button(__('Open Dialog'), function() {
            openDialog(frm);
        });
    },
});



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
        var item = values.item;
        var quantity = values.quantity;
        var child_table = frm.add_child('items', {
            'item': item,
            'quantity': quantity
        });
        
        frm.refresh_field('items');
        
    }, 'Enter Details', 'Submit');
}
