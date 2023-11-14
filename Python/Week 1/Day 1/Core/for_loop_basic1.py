# // challenge 1: Print all integers from 0 to 150.

for x in range(0, 150):
  print(x)

# // challenge 2: Print all the multiples of 5 from 5 to 1,000


for i in range(5, 1001):
    if i % 5 == 0:
        print(i)

# // challenge 3:  Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo"

for x in range(0,101):
  if(x%10==0): print("Coding Dojo")
  elif(x%5==0): print("Coding")
  else : print(x)
    
# //challenge 4: Add odd integers from 0 to 500,000, and print the final sum.

sum =0
for i in range(500000):
    if(i%2==1): sum +=i 
print(sum)

# //challenge 5: Print positive numbers starting at 2018, counting down by fours.

for i in range(2018,0,-4):
    print(i)

# //challenge 6 : Flexible Counter
   
lowNum=5
highNum=25
mult=7
for i in range(lowNum,highNum+1):
    if (i%7==0) :print(i)