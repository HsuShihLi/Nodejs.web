
//引用 nodemailer
var nodemailer = require('nodemailer');

//宣告發信物件
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'password'
    }
});


var options = {
    //寄件者
    from: 'youremail@gmail.com',
    //收件者
    to: 'sendto@gmail.com', 
    //副本
    cc: 'sendto@gmail.com',
    //密件副本
    bcc: 'sendto@gmail.com',
    //主旨
    subject: '這是 node.js 發送的測試信件', // Subject line
    //純文字
    text: 'Hello world2', // plaintext body
    //嵌入 html 的內文
    html: '<h2>this is a testing message</h2> <p>The <a href="http://en.wikipedia.org/wiki/Lorem_ipsum" title="Lorem ipsum - Wikipedia, the free encyclopedia">Lorem ipsum</a> text is typically composed of pseudo-Latin words. It is commonly used as placeholder text to examine or demonstrate the visual effects of various graphic design. Since the text itself is meaningless, the viewers are therefore able to focus on the overall layout without being attracted to the text.</p>', 
    //附件檔案
    attachments: [ {
        filename: 'text01.txt',
        content: 'this is just a testing message, do not worry about it boi!'
    }, {
        filename: '111.tiff',
        path: '/Users/shihlihsu/Pictures/111.tiff'
    }]
};

//發送信件方法
transporter.sendMail(options, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('訊息發送: ' + info.response);
    }
});