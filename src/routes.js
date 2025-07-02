import { MAIN_ROUTE, WEATHER_ROUTE, SB_ROUTE, BMW_ROUTE } from "./utils/utils";
import MainPage from "./pages/MainPage.js";
import WeatherPage from "./pages/WeatherPage.js";
import SBPage from "./pages/SBPage.js";
import BMWPage from "./pages/BMWPage.js";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: WEATHER_ROUTE,
        Component: WeatherPage
    },
    {
        path: SB_ROUTE,
        Component: SBPage
    },
    {
        path: BMW_ROUTE,
        Component: BMWPage
    }
]