import AsosiyPage from '../pages/AsosiyPage'
import TaklifPage from '../pages/TaklifPage'
import ArizaPage from '../pages/ArizaPage'
import AloqaPage from '../pages/AloqaPage'

export const navbar = [
    {
        id:1,
        title:'Asosiy',
        path:'/asosiy',
        element:<AsosiyPage/>,
        search:false,
        private:true,
    },
    {
        id:2,
        title:'Taklif',
        path:'/taklif',
        element:<TaklifPage/>,
        search:false,
        private:true,
    },
    {
        id:3,
        title:'Ariza',
        path:'/ariza',
        element:<ArizaPage/>,
        search:false,
        private:true,
    },
    {
        id:4,
        title:'A`loqa',
        path:'/aloqa',
        element:<AloqaPage/>,
        search:false,
        private:true,
    },
]