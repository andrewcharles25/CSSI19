def echo():
    response = raw_input('Enter a string: ')
    print response + '\n' + response
echo() 




def fizzbuzz(num):
    if num % 3 == 0 or num % 5 == 0:
        print "FrizzBuzz"
    elif num % 3 == 0:
        print "Frizz"
    elif num % 5 == 0:
        print "Buzz"
    
    else: 
        print num
fizzbuzz(9) # multiple of 3
fizzbuzz(10) # multiple of 5
fizzbuzz(30) 
fizzbuzz(9) # Prime