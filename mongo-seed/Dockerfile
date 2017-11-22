#Seed Data
FROM mongo

COPY mazips.json /mazips.json
CMD mongoimport --host mongodb --db reach-engine --collection mazips --type json --file /mazips.json --jsonArray