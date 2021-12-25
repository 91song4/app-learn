from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# insert / find / update / delete

#insert
# doc = {'name':'jane','age':21}
# db.users.insert_one(doc)

#find
# same_ages = list(db.users.find({'age':21},{'_id':False}))
# same_ages = list(db.users.find({'age':21},{'_id':True}))
# same_ages = list(db.users.find({'age':21}))
# same_ages = list(db.users.find({},{'_id':False}))
# user = db.users.find_one({'name':'bobby'},{'_id':False})

# print(user['age'])
# for person in same_ages:
#     print(person)

#updatte
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
# db.users.update_many({'name':'bobby'},{'$set':{'age':19}})



#delete
db.users.delete_one({'name':'bobby'})
# db.users.delete_many({'name':'bobby'})