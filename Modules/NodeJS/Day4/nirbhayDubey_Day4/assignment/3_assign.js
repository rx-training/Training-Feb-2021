const http=require('http');
const querystring=require('querystring');

http.createServer((req,res)=>{
    let regex=/\/vowefind\?input=[a-zA-Z]/;
    if(regex.test(req.url)){
        let tmp=querystring.parse(req.url.replace('/vowefind?',''));
        let strname=tmp.input;
        let vowel='';
        for (let ch of strname) {
            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
                vowel=ch;
                break;
            }
        }
        res.write(`<h1> First vowel character from the string is '${vowel}' `);
        res.end();
    }
}).listen(3001,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started with port no 3001')
})