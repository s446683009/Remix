const menus=[
    {
        menuId:'1',
        menuIcon:'',
        menuName:'首页',
        hasChildren:false,
        path:'/home/dashboard'
    },
    {
        menuId:'2',
        menuIcon:'',
        menuName:'用户',
        hasChildren:true,
        children:[
            {
                menuId:'3',
                menuIcon:'',
                menuName:'用户列表',
                hasChildren:false,
                path:'/home/user',
                children:[]
            },
            {
                menuId:'4',
                menuIcon:'',
                menuName:'个人设置',
                hasChildren:false,
                children:[]
            }

        ]
    },
    {
        menuId:'5',
        menuIcon:'',
        menuName:'部门',
        hasChildren:true,
        children:[
            {
                menuId:'6',
                menuIcon:'',
                menuName:'公司设置',
                hasChildren:false,
                children:[]
            },
            {
                menuId:'7',
                menuIcon:'',
                menuName:'部门设置',
                hasChildren:false,
                children:[]
            },
            {
                menuId:'8',
                menuIcon:'',
                menuName:'人员设置',
                hasChildren:false,
                children:[]
            },

        ]
    }
]

export default menus;