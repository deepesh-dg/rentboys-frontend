import {
    BulbIcon,
    DashboardIcon,
    HeartIcon,
    LogoutIcon,
    NotificationIcon,
    SettingIcon,
    UserSettingIcon,
} from "@/components/icons/solid";

export const navLinks = [
    {
        name: "Dashboard",
        icon: DashboardIcon,
        route: "/dashboard",
        subMenu: [],
    },
    {
        name: "Manage Profile",
        icon: UserSettingIcon,
        route: "/manage-profile",
        subMenu: ["About Me", "Current Location", "My Photos", "My Videos"],
        hasArrow: true,
    },
    {
        name: "My Favorite",
        icon: HeartIcon,
        route: "/my-favorites",
        subMenu: [],
    },
    {
        name: "Current Plan",
        icon: BulbIcon,
        route: "/current-plan",
        subMenu: [],
    },
    {
        name: "Notification Centre",
        icon: NotificationIcon,
        route: "/notifications",
        subMenu: [],
    },
    {
        name: "Account Settings",
        icon: SettingIcon,
        route: "/account-settings",
        subMenu: ["Contact Us", "Terms of Service", "Legal", "Privacy Policy"],
        hasArrow: true,
    },
    { name: "Logout", icon: LogoutIcon, route: "/logout", subMenu: [] },
];
