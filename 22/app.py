def inc(x):
    return x + 1

f = inc

print(f(10))

def adder(a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print (contains_15([1,2,3,4,5]))
print (contains_15([13,14,15,16,17]))
print (contains_15([range(1,20)]))
#closure remembers the context in which it was created

del outer
#outer(42)

print (contains_15(range(14,18)))

#def outer():
#    x = "foo"
#    def inner():
#        x = "bar"
#    inner()
#    return x

#print(outer())

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())

ctr1 = make_counter()
ctr1()
ctr1()
ctr2 = make_counter()
ctr2()
ctr1()
ctr2()
