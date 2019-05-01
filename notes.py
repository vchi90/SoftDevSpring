import random

def make_html_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

#eqiuv to greet = makeHTMlheading(greet)
@make_html_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
    return random.choice(greetings)

#greet_heading = make_html_heading(greet)
#print(greet_heading)

print(greet())

def memoize(f):
    memo = {}
    def helper(x):
        return 
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(40))
