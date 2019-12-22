print('YourFocus v.0.0.1, Authors: Khokhlov Daniil, Nagibin Egor, Balyberdina Anastasia')

from bs4 import BeautifulSoup
import requests as req
import re
import time
start = time.monotonic()
#Получили ссылку на группу
grouplink = "https://vk.com/nimkanimka"

resp = req.get(str(grouplink))
 
soup = BeautifulSoup(resp.text, 'lxml')
 
html = soup.find('')
result = re.findall(r'post+[0-9]{1,10}|wall+[0-9]{1,10}|post-+[0-9]{1,10}|wall-+[0-9]{1,10}', str(html))[0]
groupid = re.findall(r'[0-9]{1,10}', str(result))[0]
#Получили id группы
print(groupid)

import vk

app_token = 'e6c765a6e6c765a6e6c765a677e6a9d0e5ee6c7e6c765a6bb397018feac8851e2661778'

session = vk.Session(access_token=app_token)
api = vk.API(session)
cogm = api.groups.getMembers(group_id=groupid, v=5.103)['count'] #count of group's members
cogm = int(cogm / 1000 + 1)
cogmList = []
for i in range(3):
    users = api.groups.getMembers(group_id = groupid, offset = 1000*i, v=5.103)
    for j in range(len(users['items'])):
        cogmList.append(users['items'][j])
#Получили всех пользователей группы        

males = 0
females = 0
age018 = 0
age1935 = 0
age3650 = 0
age51 = 0
cities = {}
users = []
for i in range(len(cogmList)):
    users.append(api.users.get(user_id = cogmList[i], fields='bdate, sex, city', v=5.103)[0])
    try:
        if int(users[i]['sex'])==1:
            females+=1
        elif int(users[i]['sex'])==2:
            males+=1
    except:
        pass
    try:
        birdate = re.findall(r'\d\d\.\d\d\.\d\d\d\d', users[i]['bdate'])
        if birdate:
            age = 2019-int(re.findall(r'\d\d\d\d',str(birdate[0]))[0])
            if age>=0 and age<=18:
                age018+=1
            elif age>=19 and age<=35:
                age1935+=1
            elif age>=36 and age<=50:
                age3650+=1
            elif age>=51:
                age51+=1
    except:
        pass
    try:
        if not(str(users[i]['city']['title']) in cities):
            cities[str(users[i]['city']['title'])] = 1
        else:
            cities[str(users[i]['city']['title'])] += 1
    except:
        pass
list_d = list(cities.items())
list_d.sort(key=lambda i: i[1])
list_d.reverse()

cooc = 5 #count of output cities
coolCities = []
for i in list_d:
    print(i[0], ':', i[1])
    coolCities.append(str(i[0]))
    cooc-=1
    if(cooc==0):
        break
ps = males+females
malesPer = 0
femalesPer = 0
if ps!=0:
    malesPer = males/(ps)*100
    femalesPer = females/(ps)*100
    print("% of Males: "+str(malesPer))  
    print("% of Females: "+str(femalesPer))  
bdc = age018+age1935+age3650+age51
if bdc != 0:
    print("Age between 0 and 18: "+str(age018/bdc*100)+" %")
    print("Age between 19 and 35: "+str(age1935/bdc*100)+" %")
    print("Age between 36 and 50: "+str(age3650/bdc*100)+" %")
    print("Age over 50: "+str(age51/bdc*100)+" %")
ageLeader = 0
if age018>age1935 and age018>age1950 and age018> age51:
    ageLeader = 1
if age1935>age018 and age1935>age3650 and age1935> age51:
    ageLeader = 2
if age3650>age018 and age3650>age1935 and age3650> age51:
    ageLeader = 3
if age51>age018 and age51>age1935 and age51> age3650:
    ageLeader = 4
coolUsers = []
for i in range(len(users)):
    try:
        cityFlag = 0
        ageFlag = 0
        sexFlag = 1
        for j in range(len(coolCities)):
            if str(users[i]['city']['title']) == str(coolCities[j]):
                cityFlag = 1
                break
        if abs(malesPer-femalesPer)>30:
            if malesPer>femalesPer and int(users[i]['sex'])==2 or malesPer<femalesPer and int(users[i]['sex'])==1:
                sexFlag = 1
            else:
                sexFlag = 0
        birdate = re.findall(r'\d\d\.\d\d\.\d\d\d\d', users[i]['bdate'])
        if birdate:
            age = 2019-int(re.findall(r'\d\d\d\d',str(birdate[0]))[0])
            if (age>=0 and age<=18 and ageLeader == 1) or (age>=19 and age<=35 and ageLeader == 2) or (age>=36 and age<=50 and ageLeader == 3) or (age>=51 and ageLeader == 4):
                ageFlag = 1
        if cityFlag == 1 and ageFlag == 1 and sexFlag==1:
             coolUsers.append(users[i]['id'])
    except:
        pass
print(coolUsers)
#получили id подопытных кроликов
#получаем массив групп кроликов
listOfGroups = []
for i in range(len(coolUsers)):
    try:
        userGroups = api.users.getSubscriptions(user_id = coolUsers[i], v=5.103)['groups']
        for j in range(len(userGroups['items'])):
            if not(userGroups['items'][j] in listOfGroups):
                listOfGroups.append(userGroups['items'][j])
    except:
        pass
#начинаем получать данные по группам
activities = {}
groupCollection = []
for i in range(len(listOfGroups)):
    try:
        currentGroup = api.groups.getById(group_id = int(listOfGroups[i]), fields='activity, status', v=5.103)[0]
        if not(str(currentGroup['activity']) in activities):
            activities[currentGroup['activity']]=1
        else:
            activities[currentGroup['activity']]+=1
        groupCollection.append(currentGroup)
    except:
        pass
if len(activities)>1:
    print('We advise you to look for the audience in the public with the following topics:\n')
    listOfActivity = list(activities.items())
    listOfActivity.sort(key=lambda i: i[1])
    listOfActivity.reverse()
    countOfFinalActivityAdvice = 7
    bestActivity = {}
    for i in listOfActivity:
        print(i[0])
        bestActivity[i[0]] = i[1]
        countOfFinalActivityAdvice-=1
        if(countOfFinalActivityAdvice==0):
            break
    print('\n')  
bestPublics = {}
publicMembers = {}
publicById = {}
for i in groupCollection:
    try:
        if i['activity'] in bestActivity:
            gc = api.groups.getMembers(group_id=i['id'], v=5.103)['count']
            bestPublics[i['id']] = i['activity']
            publicMembers[i['id']] = gc
            publicById[i['id']] = i['name']
    except:
        pass
print('We advise you to look for the audience in the next publics:\n')
if len(bestPublics)>0:   
    lopm = list(publicMembers.items())
    lopm.sort(key=lambda i: i[1])
    lopm.reverse()
    ppp = 21
    for i in bestActivity:
        ccp = 3
        for j in lopm:
            if bestPublics[j[0]] == i:
                publicLink = "https:\\vk.com\public"+str(j[0])
                print(publicById[j[0]]," - ",str(publicLink))
                ccp-=1
                if ccp==0:
                    break
        ppp-=1
        if ppp==0:
            break
end = time.monotonic()
print('span  : {:>9.2f}'.format(end - start))