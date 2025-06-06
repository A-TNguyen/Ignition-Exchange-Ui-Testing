import math


# print("hello world")

#string
test =  "tester"
#integer
testnum = 1
#floats
testfloat = 1.25
#boolean

##triple line


v3= '''
1 2 3
2 2 3
3 3 3
'''

v4= " hello, world "

#print(v3)
print(v4[2])
print("this is length: " + str(len(v4)))
print("Uppercase: " + v4.upper())
print("Lowercase: " + v4.lower())
print("strip: " + v4.strip())
print(v4.split(","))
# name = input("whats your name?")
# print("your name " + name)

#convertoint
int(12.5)
#convertofloat
float(13)
#convertostring
int("123")
#gettype
var =123
print(type(var))

a=1
b=1
c=2
if a+b ==2:
    print("hello 2")

banana = True
if banana:
    print("Hello Banana")
    
#and
if(a==1) and (b==1):
    print("a and b is equal")
#or
#not

#elif or else if
if (a!=1):
    print("not one")
elif(b==2):
    print("B is 1")
else:
    print("not correct for this elif statement")


#list example
list1 = ["h1","b2","b2"]

print(list1[0])

#tuple
tuple = ("TUP1", "TUP2", "tup3")
#set examples 
set1 =  {1,2,3,4,5}
set2 =  {3,4,5,6,7}

print(set1.intersection(set2))


#whileloops
b = 0
while b < 5:
    print(b)
    b += 1
   
#forloops

for i in range(5):
    print("bananana")

# with open("beemovie.txt",r) as f:
#         for lines in f:
#             print(lines)
print(math.e)

