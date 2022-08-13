import AsosiyPage from '../pages/AsosiyPage'
import TaklifPage from '../pages/TaklifPage'
import ArizaPage from '../pages/ArizaPage'
import AloqaPage from '../pages/AloqaPage'
import Signin from '../pages/Signin'
// import { ReactComponent as Icon } from '../assets/'

export const navbar = [
    {
        id:1,
        title:'Asosiy',
        path:'/asosiy',
        element:<AsosiyPage/>,
        search: '?',
        icon : '',
        hidden: false,
        private:true,
    },
    {
        id:2,
        title:'Taklif',
        path:'/taklif',
        element:<TaklifPage/>,
        search: '?',
        hidden: false,
        private:true,
    },
    {
        id:3,
        title:'Ariza',
        path:'/ariza',
        element:<ArizaPage/>,
        search: '?',
        hidden: false,
        private:true,
    },
    {
        id:4,
        title:'A`loqa',
        path:'/aloqa',
        element:<AloqaPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    {
        id:5,
        title:'Signin',
        path:'/signin',
        element:<Signin/>,
        search: '?',
        hidden: true,
        private:true,

    },
    
]