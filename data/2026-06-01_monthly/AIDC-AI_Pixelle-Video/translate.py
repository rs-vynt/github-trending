import json

with open("meta.json", "r") as f:
    meta = json.load(f)

print(meta["description"])
