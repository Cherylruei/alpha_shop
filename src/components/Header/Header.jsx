import { ReactComponent as IconToggle } from "../../files/icons/toggle.svg";
import { ReactComponent as IconSearch } from "../../files/icons/search.svg";
import { ReactComponent as IconCart } from "../../files/icons/cart.svg";
import { ReactComponent as IconMoon } from "../../files/icons/moon.svg";
import { ReactComponent as IconSun } from "../../files/icons/sun.svg";
import { ReactComponent as IconLogo } from "../../files/icons/logo.svg";

const Header = () => {
  return (
    // <!-- header -->
    <header class="site-header">
      <div class="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          <IconToggle />
        </label>
        {/* 
        <!-- navbar-menu --> */}
        <nav class="navbar-menu">
          <ul class="nav-list site-menu-list mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                男款
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                女款
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul class="nav-list site-action-list">
            {/* <!-- search --> */}
            <li class="nav-item">
              <IconSearch />
            </li>
            {/* <!-- cart --> */}
            <li class="nav-item">
              <IconCart />
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              <IconMoon />
              {/* <!-- sun --> */}
              <IconSun />
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a class="header-logo-container" href="#">
          <IconLogo />
        </a>
      </div>
    </header>
  );
};

export default Header;
