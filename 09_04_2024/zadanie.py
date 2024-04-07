def read_file():
    s = "slowa.txt"
    p = "przyklad.txt"
    words = []
    with open(s) as file:
        for line in file.read().split("\n"):
            if line:
                words.append(line)
    return words

WORDS = read_file()

def z1():
    with open("wyniki4_1.txt", "w") as file:
        for word in WORDS:
            if word.count("w") == word.count("k"):
                file.write(word + "\n")

def ile_wakacje (word):
    max_ilosc = None
    for letter in "wakcje":
        if max_ilosc is None:
            max_ilosc = word.count(letter)
            continue
        elif letter == "a":
            ilosc = word.count(letter) // 2
        else:
            ilosc = word.count(letter)

        if ilosc < max_ilosc:
            max_ilosc = ilosc
    return max_ilosc

def z2():
    with open("wyniki4_2.txt", "w") as file:
        for word in WORDS:
            file.write(str(ile_wakacje(word)) + " ")

def skresl(word):
    pelne_slowo = False
    wakacje = "wakacje"
    index = 0
    ile = 0
    for letter in word:
        if letter == wakacje[index]:
            index += 1
        else:
            ile += 1
        if index >= len(wakacje):
            pelne_slowo = True
            index = 0

    if pelne_slowo:
        return ile + index
    return len(word)

def z3():
    with open("wyniki4_3.txt", "w") as file:
        for word in WORDS:
            file.write(str(skresl(word)) + " ")

z1()
z2()
z3()