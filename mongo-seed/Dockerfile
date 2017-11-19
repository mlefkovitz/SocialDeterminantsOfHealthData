#Seed Data
FROM mongo

COPY MAZips.csv /MAZips.csv
-CMD mongoimport --host --db reach-engine db --collection MAZips --type csv --file /MAZips.csv --fields Zip.string(),Score.double() --columnsHaveTypes