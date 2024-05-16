// Copyright (c) 2024, me and contributors
// For license information, please see license.txt

frappe.ui.form.on("query", {
	refresh(frm) {
        // console.log(locals[cdt][cdn]);
        frm.add_custom_button(__("Add Items"),function(){
            let d = new frappe.ui.Dialog({
                title: 'Enter details',
                fields: [
                    {
                        label: 'Item',
                        fieldname: 'item',
                        fieldtype: 'Data'
                    },
                    {
                        label: 'Quantity',
                        fieldname: 'quantity',
                        fieldtype: 'Int'
                    },
                    {
                        label: 'Price',
                        fieldname: 'price',
                        fieldtype: 'Int'
                    },
                ],
                size: 'large', // small, large, extra-large 
                primary_action_label: 'Submit',
                primary_action(values) {
                    var child_table = frm.add_child('cart', {
                        'item': values.item,
                        'quantity': values.quantity,
                        'price':values.price,
                        'total':values.quantity*values.price
                        
                    });
                    frm.refresh_field('cart');
                    // console.log(frappe.db);
                    d.hide();
                }
            });
            d.show();
        });
        a=frappe.db.get_value("query",'k1n8h7cffo','first_name');
        b=JSON.stringify(a);
        console.log(frappe.db);
        // console.log(frappe.db)
	},
});
