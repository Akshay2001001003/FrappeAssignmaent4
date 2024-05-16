# Copyright (c) 2024, me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import now

class query(Document):
    def autoname(self):
        self.name = f'{self.first_name} {self.last_name}'

    def after_insert(self):
        frappe.msgprint("Inserted successfully")
@frappe.whitelist(allow_guest=True)
def fun():
	doc=frappe.get_doc("query","ltiu5ticih")
	doc.first_name="ak"
	doc.save()
  