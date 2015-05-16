#!/usr/bin/env python3


def deaccent(text):
    import re
    text = re.sub('[áàãâä]',    'a', text)
    text = re.sub('[éè¨ê]',     "e", text)
    text = re.sub('[íìïî]',     "i", text)
    text = re.sub('[óòöôõ]',    "o", text)
    text = re.sub('[úùüû]',     "u", text)
    text = re.sub('[ç]',        "c", text)
    text = re.sub('[ñ]',        "n", text)
    return text


def main():
    data = {}      # data information

    import csv
    with open('database.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            word = deaccent(row[0])
            if (word == "infinitive"):
                continue

            if (word not in data):
                data[word] = {}
                data[word]["conj"] = []

            data[word]["word"] = row[0]
            data[word]["meaning"] = row[1]
            data[word]["gerund"] = row[13]
            data[word]["past"] = row[15]

            conj = {}
            conj["mood"] = row[3]
            conj["tense"] = row[5]
            conj["1s"] = row[7]
            conj["2s"] = row[8]
            conj["3s"] = row[9]
            conj["1p"] = row[10]
            conj["2p"] = row[11]
            conj["3p"] = row[12]
            data[word]["conj"].append(conj)

    import json
    open('../site/data.json', 'w').write(json.dumps(data))
    print(data['acompanar'])

if __name__ == '__main__':
    main()
