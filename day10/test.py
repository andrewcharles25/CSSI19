for i in range (1,11):
    print i

for i in range(1, 21):
    print i 

for i in range(2,21,2):
    print i 

for i in range(1,21):
    if i % 2 == 0:
        print i

for i in range(1,21):
    if i % 2 == 1:
        print i

for i in "This is a string":
    print i

h = []

for i in range(20):
    h.append(0)

print h, len(h)

h[1] = 1

for i in range(2,20):
    h[i] = h[i-1] + h[i-2]
        
print h