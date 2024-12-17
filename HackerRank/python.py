def camelcase(s):
     word_count =1
     for char in s:
          if char.isupper():
               word_count +=1
               
     return word_count
          
print(camelcase("oneTwoThree"))  