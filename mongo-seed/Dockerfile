#Seed Data
FROM mongo

COPY mazips.json /mazips.json
CMD mongoimport --host mongodb --db mean-dev --collection mazips --type json --file /mazips.json --jsonArray
