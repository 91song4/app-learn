from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta


#문제(1) 영화제목 '매트릭스'의 평점을 가져오기
#풀이
movie_name = db.movies.find_one({'title':'매트릭스'},{'_id':False})
# print(movie_name['star'])
#정답
# target_movie = db.movies.find_one({'title':'매트릭스'})
# print (target_movie['star'])
#평점만 불러올거라 아이디값을 안 불러온다는 명령자체가 불필요.

#문제(2) '매트릭스'의 평점과 같은 평점의 영화 제목들을 가져오기
for same_star in list(db.movies.find({'star':movie_name['star']})):
    print(same_star['title'])
db.movies.update_one({'title':'매트릭스'},{'$set':{'star':0}})