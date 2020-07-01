/*
 * @Author: Mello
 * @Date: 2020-07-01 14:52:51
 * @LastEditTime: 2020-07-01 17:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bangumiData/AnimeList.js
 */ 

// 引入模块
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const userNmae = 'yukiniya'
// 获取自己已看过的动画列表, name为自己的用户名

getUserAnimeCollect (()=> {
  https.get('https://bangumi.tv/anime/list/' + userNmae + '/collect',function(res){
      // 分段返回的 自己拼接
      let html = '';
      // 有数据产生的时候 拼接
      res.on('data',function(chunk){
          html += chunk;
      })
      // 拼接完成
      res.on('end',function(){
          // console.log(html);
          const $ = cheerio.load(html);
          let allFilms = [];
          $('ul.browserFull li.item').each(function(){
              const name = $('.inner h3 a', this).text();
              const orgin_name = $('.inner h3 small', this).text();
              const img_src = 'https:' + $('.image .cover',this).attr('src').replace('/cover\/s', '/cover\/l');
              const link = $('a.li',this).attr('href')
              // 存 数据库
              // 没有数据库存成一个json文件 fs
              allFilms.push({
                  name,orgin_name,rateInfo,pic
              })
          })
          fs.writeFile('./films.json', JSON.stringify(allFilms),function(err){
              if(!err){
                  console.log('文件写入完毕');
              }
          })
      })

  })
})

