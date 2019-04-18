# team <redacted> (Vincent Chi, Ray Onishi, Raymond Wu)
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-17

from functools import reduce

# *** USE 'book_sample.txt' TO TEST ON SMALLER SAMPLE!! ***
with open('book.txt','r') as f:
    content = f.read().split()


# print(content[:100]) #got the right stuffs

def frequency(word):
    matches = [1 for x in content if x == word] #... list comp
    return reduce((lambda x, y: x+y), matches) #... reduce

# def freq_group(wordlist):
#     frequencies = [ frequency(word) for word in wordlist ] #... list comp
#     return reduce( (lambda x, y: x+y), frequencies ) #... reduce

def freq_group(string):
    phrase = string.split() #['he', 'said']
    frequencies = [ 1 for x in range( len(content) - len(phrase) ) if phrase == content[x:x+len(phrase)] ] #...sliding window
    return reduce( (lambda x,y : x+y), frequencies )


def most_frequent():
    frequencies = {}
    for word in content:
        if word in frequencies.keys(): continue
        frequencies[word] = frequency(word) #... which uses reduce
    maxfreq = max(frequencies.values())
    return [x for x in frequencies.keys() if frequencies[x] == maxfreq] #... list comp... in case tie!


print( "FREQUENCY OF 'the':", frequency("the") ) #... 3452
print( "FREQUENCY OF 'Gutenberg':", frequency("Gutenberg") ) #... 20

print( "=========================" )

# print( "FREQUENCY OF ['the', 'Gutenberg']:", freq_group(['the', 'Gutenberg']) ) #... should be 3472
print( "FREQUENCY OF 'he said':", freq_group("he said") )
print( "FREQUENCY OF 'he said.':", freq_group("he said.") )
print( "FREQUENCY OF 'she said.':", freq_group("she said.") )

print( "=========================" )

print( "MOST FREQUENT WORD(S):", most_frequent() ) #... ['the']
