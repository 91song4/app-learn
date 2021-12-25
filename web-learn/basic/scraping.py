import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs =soup.select('#old_content > table > tbody > tr')
for tr in trs:
    a_tag = tr.select_one('td.title > div > a')
    b_tag = tr.select_one('td:nth-child(1) > img')
    c_tag = tr.select_one('td.point')
    if a_tag is not None:
        rank = b_tag['alt']
        title = a_tag.text
        star = c_tag.text
        print(rank, title, star)


# title = soup.select_one('#old_content > table > tbody > tr:nth-child(2) > td.title > div > a')
# print(title['href'])  #태그속성 가져오기
# print(title.text)   # =>그린북