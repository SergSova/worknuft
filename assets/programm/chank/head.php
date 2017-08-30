<!doctype html>
<html lang="[[++cultureKey]]">
<head>
    <base href="[[++site_url]]">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    [[$seo]]
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/base.css">
    [[+vstup:is=`1`:then=`<link rel="stylesheet" href="assets/css/vstupnik.css">
    `]]
    <link rel="stylesheet" href="assets/css/slick.css">
    <link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="assets/css/menu.css">
    <link rel="stylesheet" href="assets/css/media.css">
</head>
<body [[+classex:ne=``:then=`class="[[+classex]]"`]]>

[[pdoMenu?
&parents=`0`
&level=`4`
&hideSubMenus=`0`
&outerClass=`start punkt`
&innerClass=`sub-menu punkt`
&parentClass=`parents`
&firstClass=``
&lastClass=``
&tplOuter=`menu.OuterTPL`
&tpl=`menu.TPL`
&tplParentRow=`menu.ParentRowTPL`
&tplInner=`menu.innerTPL`
&tplInnerRow=`menu.innerRowTPL`
]]

<div class="all-wrapper" data-left="0">
    <div class="white-lay"></div>
    <header>
        <div class="section-wrap">
            <div class="top">
                <div class="container">
                    <nav>
                        <ul>
                            <li><a href="#"><i class="icon-mapa"></i>Карта НУХТ</a>
                            </li>
                            <li><a href="#"><i class="icon-biblio"></i>Бібліотека</a>
                            </li>
                            <li><a href="#"><i class="icon-noun_25587_cc"></i>Розклад
                                    занять</a></li>
                            <li class="right">
                                <div class="lang">
                                    <a class="active" href="#"><i
                                                class="icon-ukr"></i>UK</a>
                                    <a href="#"><i class="icon-rus"></i>RU</a>
                                    <a href="#"><i class="icon-en"></i>EN</a>
                                    <div class="hidden-lang"></div>
                                </div>
                            </li>
                            <li class="right"><a href="#"><i
                                            class="icon-tel"></i>Контакти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="bottom">
                <div class="container">
                    <div class="logo-fixed"><img
                                src="assets/images/logo-small.png"
                                alt="Логотип"></div>
                    <div class="menu-toggle active">
                        <div class="sandwitch">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span>MENU</span>
                    </div>
                    <div class="logo">
                        <a href="#">
                            <img src="assets/images/logo.png" alt="Логотип">
                        </a>
                    </div>
                    <div class="search">
                        <form action="search.php">
                            <label><input type="text"></label>
                            <button><i class="icon-search"></i></button>
                        </form>
                    </div>
                    <nav>
                        <ul class="when-fixed">
                            <li><a href="#">Вступнику</a></li>
                            <li><a href="#">Студенту</a></li>
                            <li><a href="#">Співробітнику</a></li>
                            <li class="icon-text"><a href="#">
                                    <div>Карта НУХТ</div>
                                    <i class="icon-mapa"></i></a></li>
                            <li class="icon-text"><a href="#">
                                    <div>Розклад занять</div>
                                    <i class="icon-noun_25587_cc"></i></a></li>
                            <li class="icon-text"><a href="#">
                                    <div>Бібліотека</div>
                                    <i class="icon-biblio"></i></a></li>
                            <li><a href="#"><i class="icon-tel"></i></a></li>
                            <li>
                                <div class="lang">
                                    <a class="active" href="#"><i
                                                class="icon-ukr"></i>UK</a>
                                    <a href="#"><i class="icon-rus"></i>RU</a>
                                    <a href="#"><i class="icon-en"></i>EN</a>
                                    <div class="hidden-lang"></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
