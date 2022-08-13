import ArizaPage from "../components/Arizalar";
import DashboardPage from '../pages/DashboardPage'
import TakliflarPage from '../pages/TakliflarPage'
import YoqlamaPage from '../pages/YoqlamaPage'
import ChopEtishPage from '../pages/ChopEtishPage'
import SinflarPage from '../pages/SinflarPage'
import UstozlarPage from '../pages/UstozlarPage'
import SozlamalarPage from '../pages/SozlamalarPage'

export const saytbar = [
    {
        id:1,
        title:'Dashboard',
        path:'/dashboard',
        element:<DashboardPage/>,
        search: '?',
        hidden: false,
        private:true,
    },
    {
        id:2,
        title:'Arizalar',
        path:'/arizalar',
        element:<ArizaPage/>,
        search: '?',
        hidden: false,
        private:true,
    },
    {
        id:3,
        title:'Takliflar',
        path:'/takliflar',
        element:<TakliflarPage/>,
        search: '?',
        hidden: false,
        private:true,
    },
    {
        id:4,
        title:'Yoqlama',
        path:'/yoqlama',
        element:<YoqlamaPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    {
        id:5,
        title:'ChopEtish',
        path:'/chopEtish',
        element:<ChopEtishPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    {
        id:6,
        title:'Sinflar',
        path:'/sinflar',
        element:<SinflarPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    {
        id:7,
        title:'Ustozlar',
        path:'/ustozlar',
        element:<UstozlarPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    {
        id:8,
        title:'Sozlamalar',
        path:'/sozlamalar',
        element:<SozlamalarPage/>,
        search: '?',
        hidden: false,
        private:true,

    },
    
]