
const languages=[{
    key:'zh',
    name:'China',
    icon:require('~/images/ic_flag_zh.svg')
},
{
    key:'en',
    name:'English',
    icon:require('~/images/ic_flag_en.svg')
}
]

export  function getLanuages() {
    return languages;
}


export function getLanguage(key){
    return languages.find(t=>t.key==key);
}