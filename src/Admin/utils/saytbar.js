import ArizaPage from "../components/Arizalar";
import DashboardPage from '../pages/DashboardPage'
import TakliflarPage from '../pages/TakliflarPage'
import YoqlamaPage from '../pages/YoqlamaPage'
import ChopEtishPage from '../pages/ChopEtishPage'
import SinflarPage from '../pages/SinflarPage'
import UstozlarPage from '../pages/UstozlarPage'
import SozlamalarPage from '../pages/SozlamalarPage'
import dash from "../../assets/icons/dash.svg";
import ariza from "../../assets/icons/dash_arizalar.svg";
import taklif from "../../assets/icons/dash_takliflar.svg";
import yoqlama from "../../assets/icons/dash_yoqlama.svg";
import chopetish from "../../assets/icons/dash_chopetish.svg";
import sinflar from "../../assets/icons/dash_sinflar.svg";
import ustozlar from "../../assets/icons/dash_ustozlar.svg";
import settings from "../../assets/icons/dash_settings.svg";
import Yuklash from '../components/ChopEtish/Yuklash'
import Yuklanganlar from '../components/ChopEtish/Yuklanganlar'

export const saytbar = [
    {
        id:1,
        title:'Dashboard',
        path:'/dashboard',
        element:<DashboardPage/>,
        search: '?',
        hidden: false,
        private:true,
        icon: dash,
    },
    {
        id:2,
        title:'Arizalar',
        path:'/arizalar',
        element:<ArizaPage/>,
        search: '?',
        hidden: false,
        private:true,
        icon: ariza,

    },
    {
        id:3,
        title:'Takliflar',
        path:'/takliflar',
        element:<TakliflarPage/>,
        search: '?',
        hidden: false,
        private:true,
        icon:taklif,

    },
    // {
    //     id:4,
    //     title:'Yoqlama',
    //     path:'/yoqlama',
    //     element:<YoqlamaPage/>,
    //     search: '?',
    //     hidden: false,
    //     private:true,
    //     icon: yoqlama,
    // },
    {
        id:5,
        title:'Chop Etish',
        path:'/chopEtish',
        element:<ChopEtishPage/>,
        search: '?',
        hidden: false,
        private:true,
        icon: chopetish,
    },
    // {
    //     id:6,
    //     title:'Sinflar',
    //     path:'/sinflar',
    //     element:<SinflarPage/>,
    //     search: '?',
    //     hidden: false,
    //     private:true,
    //     icon: sinflar,
    // },
    // {
    //     id:7,
    //     title:'Ustozlar',
    //     path:'/ustozlar',
    //     element:<UstozlarPage/>,
    //     search: '?',
    //     hidden: false,
    //     private:true,
    //     icon: ustozlar,
    // },
    {
        id:8,
        title:'Sozlamalar',
        path:'/sozlamalar',
        element:<SozlamalarPage/>,
        search: '?',
        hidden: false,
        private:true,
        icon: settings,
    },
    {
        id:9,
        title:'Yuklash',
        path:'/chopEtish/yuklash',
        element:<Yuklash/>,
        search: '?',
        hidden: true,
        private:true,
    },
    {
        id:10,
        title:'Yuklanganlar',
        path:'/chopEtish/yuklanganlar',
        element:<Yuklanganlar/>,
        search: '?',
        hidden: true,
        private:true,
    },
];
