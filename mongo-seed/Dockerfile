#Seed Data
FROM mongo

COPY MAZips.csv /MAZips.csv
mongoimport --host --db reach-engine --collection MAZips --type csv --file MAZips.csv --fields Zip.string(),Score.double() --columnsHaveTypes