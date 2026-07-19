def route_ticket(category):
    routing_map = {
         "IT Support": "IT Support Team",
        "Hardware": "Hardware Support Team",
        "Software": "Software Support Team",
        "HR": "HR Department",
        "Finance": "Finance Department",
        "Network": "Network Team",
        "Other": "General Help Desk"
    }
    return routing_map.get(category , "General Help Desk")