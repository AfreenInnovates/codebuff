import json
import csv
from creating_dataset import data

# Create a CLM dataset
clm_data = []
for item in data:
    if 'route no' in item and 'origin' in item and 'destination' in item:
        text = f"Route {item['route no']}: {item['origin']} to {item['destination']}"
        clm_data.append({"text": text})
    else:
        print(f"Skipping item: {item} (missing required keys)")

# Save to JSONL
jsonl_filename = 'bus_routes_clm.jsonl'
with open(jsonl_filename, 'w') as f:
    for item in clm_data:
        json.dump(item, f)
        f.write('\n')
print(f'CLM dataset saved to {jsonl_filename}')

# Save to CSV
csv_filename = 'bus_routes_clm.csv'
with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=['text'])
    writer.writeheader()
    for item in clm_data:
        writer.writerow(item)
print(f'CLM dataset also saved to {csv_filename}')

# Save to TXT (one line per entry)
txt_filename = 'bus_routes_clm.txt'
with open(txt_filename, 'w', encoding='utf-8') as txtfile:
    for item in clm_data:
        txtfile.write(item['text'] + '\n')
print(f'CLM dataset also saved to {txt_filename}')
