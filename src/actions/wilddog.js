import Wilddog from 'wilddog'

// 利用野狗传递数据
var ref = new Wilddog('https://eolgallery.wilddogio.com/');

// ref.push({
//   'fileName': '33s.jpg',
//   'title': 'Heaven of time',
//   'desc': 'Here he comes Here comes Speed Racer.'
// });

// ref.on('child_added', function(snapshot,error) {
//     if (error == null) {
//         var newPost = snapshot.val();
//         console.log('Author: ' + newPost.author);
//         console.log('Title: ' + newPost.title);
//     }
// });