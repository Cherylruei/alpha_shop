import React from "react";

const Header = () => {
  return (
    // <!-- header -->
    <header class="site-header">
      <div class="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          {/* <svg class="icon-toggle cursor-point">
            <use xlink:href="#svg-icon-toggle"></use>
          </svg> */}
        </label>

        {/* <!-- navbar-menu --> */}
        <nav class="navbar-menu">
          <ul class="nav-list site-menu-list mr-auto">
            <li class="nav-item">
              <span>男款</span>
            </li>
            <li class="nav-item">
              <span>女款</span>
            </li>
            <li class="nav-item">
              <span>最新消息</span>
            </li>
            <li class="nav-item">
              <span>客製商品</span>
            </li>
            <li class="nav-item">
              <span>聯絡我們</span>
            </li>
          </ul>
          <ul class="nav-list site-action-list">
            {/* <!-- search --> */}
            <li class="nav-item">
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-search"></use>
              </svg> */}
            </li>
            {/* <!-- cart --> */}
            <li class="nav-item">
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-cart"></use>
              </svg> */}
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-moon"></use>
              </svg> */}
              {/* <!-- sun --> */}
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-sun"></use>
              </svg> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <span class="header-logo-container">
          {/* <svg class="icon-logo cursor-point">
            <use xlink:href="#svg-icon-logo"></use>
          </svg> */}
        </span>
      </div>
    </header>
  );
};

export default Header;
