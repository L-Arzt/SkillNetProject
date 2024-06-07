import Link from "next/link";
import logo from '@/app/components/img/image44.png'
import Image from "next/image";
import BurgerMenu from "./Burger";
import icon from './img/icon.png'
import icon1 from './img/icon1.png'




function Header() {
    const menuIcon =
        <Image
            src={icon}
            alt="icon"
            height={35}
        />;


    const menuTextItems = [
        { text: 'Курсы', href: '/hotel' },
        { text: 'Добавить курсы', href: '/admin/course' },];

    const menuIcon2 =
        <Image
            src={icon1}
            alt="icon"
            height={35}
        />;

    const menuTextItems2 = [
        { text: 'Войти', href: '/login' },
        { text: 'Зарегистрироваться', href: '/register' },
        { text: 'Выйти', href: '/logout' },
    ];





    return (
        <header className="flex absolute items-center justify-around w-[90%] h-[80px] p-6  mt-5 mx-[5%] bg-[#7C80E6] mb-10  rounded-xl z-50 drop-shadow-lg">


            <BurgerMenu icon={menuIcon} textItems={menuTextItems} />



            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/'>
                <Image
                    src={logo}
                    alt="logo"
                    height={60}
                />

            </Link>

            <BurgerMenu icon={menuIcon2} textItems={menuTextItems2} />

        </header>
    );
}

export default Header;

