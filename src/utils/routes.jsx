import React from 'react';
import Display from "../components/Display";
import Home from "../views/Home";

const routes = [
    {
        path: '/',
        name: '主页',
        element: <Home/>
    }
    ,{
        path:'/display/kobe',
        name: "Kobe",
        element: <Display url='http://175.178.73.171/kobe' effect='Sliding' intro='一个简单的滑动效果'/>
    }
    ,{
        path:'/display/hit',
        name: "暴打土子哥",
        element: <Display url='http://175.178.73.171/hit_it' effect='小游戏' intro='一个打地鼠游戏，想暴打土子哥的人来'/>
    }
]

export default routes;