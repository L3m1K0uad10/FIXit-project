import requests 
import json


# Define the professional ID you want to update
professional_id = 2

endpoint = f"http://127.0.0.1:8000/professionals/update/{professional_id}/"

""" FOR POST REQUEST TESTING

 data = {
    'user': 5,
    'domain': 4,
    'photo': 'path/to/photo.jpg',
    'availability': False,
    'rating': 3,
}
 """

data = {
    'photo': 'path/to/photo.jpg',
    'availability': False,
    'rating': 2.5,
}

#get_response = requests.get(endpoint)
#get_response = requests.get(endpoint, json = {"id": 2})
#get_response = requests.post(endpoint, json = data)
#get_response = requests.post(endpoint, data=json.dumps(data), headers={"Content-Type": "application/json"})
get_response = requests.put(endpoint, data = json.dumps(data))

print(get_response.text)
#print(get_response.json())