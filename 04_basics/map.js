console.log("Understanding map in js ");

const map=new Map();
map.set('IN',"India");
map.set('AUS',"Austrelia");
map.set('PAK',"Pakisthan");
map.set('ENG',"Englad");
map.set('AFG',"Afganistan");

console.log(map);

for(const [m,n] of map){
    console.log(m, ':- ', n);
}   