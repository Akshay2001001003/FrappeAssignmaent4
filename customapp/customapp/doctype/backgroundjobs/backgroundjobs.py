# Copyright (c) 2024, me and contributors
# For license information, please see license.txt
# import frappe

from frappe.model.document import Document
import frappe
import datetime
from datetime import datetime
@frappe.whitelist(allow_guest=True)
def DateTime():
# Retrieve records from the BackgroundJobs table where the name is "2nmokpkneh"
#   records = frappe.db.get_all("BackgroundJobs", filters={"name": "2nmokpkneh"}, fields=["date"])
#   records = frappe.db.get_all("BackgroundJobs", filters={"name": "2nmokpkneh"}, fields=["time"])
  frappe.db.set_value("BackgroundJobs","2nmokpkneh","time",datetime.now())
#   frappe.msgprint("hello")

# Format the dates in the desired format
#   formatted_dates = [record["date"].strftime("%Y-%m-%d %I:%M %p") for record in records]
  



frappe.enqueue(DateTime, queue='short', doc_name="2nmokpkneh")


class BackgroundJobs(Document):
	pass

# @frappe.whitelist(allow_guest=True)

# def submit_form(email):
#     try:
#         # Parse the submitted data
#         # Validate the input
#         # Create a new record in the custom doctype and its child table
        
#         # Trigger email upon creation
#         frappe.sendmail(
#             recipients=email,  # Set the recipient email address
#             subject='Form Submission Notification',  # Set the email subject
#             content='A form has been submitted successfully.',  # Set the email content
#             now=True
#         )

#         return "Form submitted successfully"
#     except Exception as e:
#         frappe.log_error(frappe.get_traceback(), "Form Submission Error")
#         return "An error occurred while submitting the form"



# def send_email(data):
#     # Define email content
#     subject = "New Form Submission"
#     message = "A new form submission has been received."

#     # Send email
#     frappe.sendmail(
#         recipients=["email@example.com"],
#         subject=subject,
#         message=message
#     )