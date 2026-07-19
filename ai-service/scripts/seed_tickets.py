from repositories.ticket_repository import insert_ticket



insert_ticket(
    "Laptop screen flickers after Windows update.",
    "Rollback the graphics driver and install the latest Intel graphics driver."
)

insert_ticket(
    "Unable to login after password reset.",
    "Clear browser cache and reset the password again."
)

insert_ticket(
    "VPN disconnects every few minutes.",
    "Restart the VPN service and reconnect using Cisco AnyConnect."
)

insert_ticket(
    "Salary not credited.",
    "Verify bank details and forward the issue to the Finance department."
)

insert_ticket(
    "Cannot access company email.",
    "Reset Outlook profile and synchronize with the Exchange server."
)

print("Past Solved tickets loaded!")