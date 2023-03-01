# python practe question 

# every first characters ko bada kaise kare 
# a='my name is aniket tiwari'
# b=a.title()
# print(b)


# how  to find max ,min ,and sun  
# numbers = [50, 40, 23, 70, 56, 12, 5, 10, 7]
# print(min(numbers))

# how to print simpal pattern
# i=5;
# while i>=1:
#     print('5'*i)
#     i-=1

# how to printfebonaci serise
# num=int(input('Enter your number => '))
# a=0
# b=1
# c=0
# while num>=c:
#     print(c)
#     a=b
#     b=c
#     c=a+b

# how to print snake pattern
# rang=int(input('enter your range => '))
# v=""
# num=1
# for i in range(1,rang+1):
#     if i%2!=0:
#         for j in range(rang):
#             v=v+" "+str(num)
#             num+=1
#     else:
#         for j in range(rang):
#             v=str(num)+" "+v
#             num+=1
#     print(v.strip())
#     v=''
              
              
# how to print prime number 
# for i in range(1,22):
#     if i>1:
#         for j in range(2,i):
#             if(i%j)==0:
#                 break
#         else:
#             print(i)


# how to cheak  palindrom number 
# num=int(input('enter yuoir number => '))
# rev=0
# n=num
# while num>0:
#     rev=(rev*10)+num%10
#     num=num//10
# if n==rev:
#     print('this is p')
# else:
#     print('this is not p')
    
# how to print pelindrom pattern          
# num=int(input('ente your number '))
# for i in range(1,num+1):
#     print((10**i//9)**2)

# how to sort array without using any method          
# list = [4, 2, 3, -1, -2, 0, 1]
# for i in range(len (list)):
#     for j in range(i+1,len(list)):
#         if list[i]>list[j]:
#             list[i],list[j]=list[j],list[i]
# print(list)
# print(list[-2]);


# how to remove dublicate values without using second list 
# lis=[1,1,2,2,3,3,4,4]
# res=list(set(lis))
# print(res)


# // how to count deublicate value and remove dublicate value;
# // let str='aniket tiwari'
# // let array=str.split('')
# // let array=[1, 2, 2,-2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6,];
# // let object={};
# // for(let item of array){
# //     if(!object[item]){
# //         object[item]=0
# //     }
# //     object[item]+=1
# // }
# // console.log(object);

# how to count duclicate values 
# from collections import Counter
# array=[1, 2, 2,-2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6,];
# c=Counter(array)
# print(c)

# how to count duclicate values 
# array=[1,1,1,2,2,3,3,4];
# ob={}
# for i in array:
#     if i not in ob:
#         ob[i]=1
#     else:
#         ob[i]+=1
# print(ob)
            


# how to count dublicate list  
# re=[[5,7],[1,3],[1,3],[12,13,17],[5,7],[9,11]]
# res={}
# for i in re:
#     a=re.count(i)
#     res[a]=i
# print(res);


# lis=[[2],[0],[1,3],[0,7],[9,11],[13,15,17]]
# for i in range(len(lis)):
#     for j in range(i+1,len(lis)):
#         if lis[i]>lis[j]:
#             lis[i],lis[j]=lis[j],lis[i]
# print(lis)


# how to sort nested array
# lis=sorted(lis,key=min)
# lis=sorted(lis,key=len)
# print(lis)


# how to multipalay
# lis=[1,2,3,4,5]
# t=1
# for i in lis:
#     t*=i
# print(t)


# how to sort this array 
# t = [(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]
# for i in range(len(t)):
#     for j in range(i,len(t)):
#         if t[i][1]>t[j][1]:
#             temp=t[i]
#             t[i]=t[j]
#             t[j]=temp
# print(t)


# lis=['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
# ls=[0,4,5]
# res=[]
# for i in lis:
#     if lis.index(i) not in ls:
#         res.append(i)
# print(res)


# how remove 0 last index 
# lis=[1,2,0,30,4,0,55,9,0,6]
# res=[]
# for i in lis:
#     if i==0:
#         res.append(i)
#         lis.remove(i)
# lis.extend(res)
# print(lis)

# how to suffel array 
# from random import shuffle
# color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
# shuffle(color)
# print(color)
    


# how to convert nested list to singel list 
# nested=[1,2,[3,[6,3,[4,5,[6,7],[8,9],[10,[11]]]]]];
# result=[]
# def f(lis):
#     for i in lis:
#         if type(i)==list:
#             f(i)
#         else:
#             result.append(i)  
# f(nested)
# print(result)


# list1 = [1, 3, 5, 7, 9]
# list2=[1, 2, 4, 6, 7, 8]
# list3=[]
# for i in list1:
#     if i not in list2:
#         list3.append(i)
# for i in list2:
#     if i not in list1:
#         list3.append(i)
# print(list3)


# lis=['p','q']
# res=[]
# for i in lis:
#     for j in range (1,6):
#         res.append(i+str(j))
# print(res)
# for i in range(len(res)):
#     for j in range(i,len(res)):
#         if res[i][1]>res[j][1]:
#             t=res[i]
#             res[i]=res[j]
#             res[j]=t
# print('this is output',res)


# how to swap elemtent
# lis=[0,1,2,3,4,5];
# Expected Output: [1, 0, 3, 2, 5, 4]
# for i in range(0,len(lis),2):
#     lis[i],lis[i+1]=lis[i+1],lis[i]
# print(lis)



# lis= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
# # Output=[['a', 'd', 'g', 'j', 'm'], ['b', 'e', 'h', 'k', 'n'], ['c', 'f', 'i', 'l']]
# l=[]
# num=3
# for i in range(num):
#     l.append(lis[i::num])
# print(l)
   
 
# how ro count integer and string 
# lis=[1,2,'as','er',{}]
# n=0
# s=0
# for i in lis:
#     if type(i)==str:
#         s+=1
#     else:
#         n+=1
# print('string is ',s)
# print('number is ',n)


# how to cheak anagram 
# str1=input('enter your string => ')
# str2=input('enter your second  string => ')
# def ana(str1,str2):
#     if sorted(str1)==sorted(str2):
#         print('this is anagram ')
#     else:
#         print('this is not angram ')
# ana(str1,str2)


# how to make pascal trengal 
# def solve(n):
#     for i in range(n+1):
#         for j in range(n-i):
#             print(' ', end='')
#         C = 1
#         for j in range(1, i+1):
#             print(C, ' ', sep='', end='')
#         C = C * (i - j) // j
#     print()
# n = 5
# solve(n)

# how to sort dictionry 
# d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
# x= sorted(d.items())
# print(x)
# y = x[::-1]
# print(y)


# dic1={1:10, 2:20}
# dic2={3:30, 4:40}
# dic3={5:50,6:60}
# dic4={}
# for i in (dic1,dic2,dic3):
#     dic4.update(i)
# print(dic4)


# d1 = {'a': 100, 'b': 200, 'c':300}
# d2 = {'a': 300, 'b': 200, 'd':400}
# result = d1.copy()

# for key,values in d2.items():
#     if key in result.keys():
#         result[key] += values

# print(result)


# l= [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
# d=[]
# for i in l:
#     for j in i.values():
#         if j not in d:
#             d.append(j)
# print(set(d))


# d={'1':['a','b'], '2':['c','d']}
# output=ac ad bc bd
# l1=d['1']
# l2=d['2']
# for i in l1:
#     for j in l2:
#         print(i+j)


# lis=[1,2,3,4,5,6,7,8,9]
# l=[]
# for i in lis:
#     s=0
#     for j in range(2):
#         s+=i
#         l.append(s)
# print(l)


# how to sum element of list  snd find max number 
# lis=[340,111,444,9,101,555,666]
# def sum(lis):
# result=[]
# for i in lis:
#     elem=0
#     stri=str(i)
#     for k in stri:
#         elem+=int(k)
#     result.append(elem)
# maxnum=max(result)
# indexnum=result.index(maxnum)
# ans=lis[indexnum]
# print(ans)          
# sum(lis)


# how to make pair of 30 
# arr = [10, 11, 12, 13, 14, 17, 18, 19];
# pair=30
# result=[]
# for i in range(len(arr)):
#     for j in range(i+1,len(arr)):
#         if arr[i]+arr[j]==30:
#             result.append([arr[i],arr[j]])
# print(result)


# how to every element 
# count={"M":0,"I":0,"S":0,"P":0}
# word="MISSISSIPPI"
# for i in word:
#     if i=="M":
#         count["M"]=count["M"]+1
#     elif i=="I":
#         count["I"]=count["I"]+1
#     elif i=="S":
#         count["S"]+=1
#     elif i=="P":
#         count["P"]+=1
# print(count)




# print("roman nmber")
# num_map = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'),
#            (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]

# def roman(num):
#     roman = ''
#     while num > 0:
#         for i, r in num_map:
#             while num >= i:
#                 roman += r
#                 num -= i

#     return roman
# n=int(input("enter your romen number"))
# print(roman(n))


# print("roman number")
# def roman (number):
#     num=[1,2,3,4,5,9,10,40,50,90,100,400,500,900,1000]
#     sym=["I","II","III","IV","V","IX","X","XL","L","XC","C","CD","D","CM","m"]
#     r=""
#     a=0
#     while numbers>0:
#         div=numbers//num[a]
#         numbers=numbers%num[a]
#         while div:
#             r=r+sym[a]
#             div-=1
#         a+=1
#     return roman
# n=input("enter your roman nmuber")
# print(roman(n))


# print("integer to roman")
# n=int(input("enter your entger number"))
# d= {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC',50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'}
# a=""
# for i in d:
#     b=n//i
#     c=b*d[i]
#     a+=c
#     n%=i
# print(a)

# print("entger to roman")
# list=[(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'),
#         (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]
# roman = ''
# num=int(input("entr your entger number => "))
# while num > 0:
#     for i,r in list:
#             while num >= i:
#              roman += r
#              num -= i
# print(roman)


# how to make three list to dictionry 
# a = [1,2,3,4,5]
# b = ["Name","Age","Class","Roll-No"]
# c = [
#       ["Aarav",14,"9th",32],
#       ["Amit",12,"7th",7],
#       ["Saniya",12,"7th",34],
#       ["Kiran",10,"5th",23],
#       ["Prince",14,"8th",15]]
# d={}
# d1=[]
# for i in range(len(c)):
#     for j in range(len(b)):
#         d[b[j]]=c[i][j]
#     if d not in d1:
#         d1.append(str(d))
        
# d3={}
# for k in range(len(a)):
#     d3[a[k]]=d1[int(k)]
# print(d3)

# how to print pattern 
# num=5
# for i in range(1,num+1):
#     for j in range(1,i+1):
#         print(j,end="")
#     print('')


# how to print febonaci pattern 
# rang= int(input("Enter the number of rows: "))
# a = 0
# b = 1
# c = a+b
# for i in range(1, rang+1):
#     for j in range(1, i+1):
#         print(c, end=" ")
#         c = a+b
#         a = b
#         b = c
#     print("")

