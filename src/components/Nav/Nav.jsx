import React from "react"
// import { window } from "browser-monads"
// import logo from "../../images/logo.png"
import { NavLink, NavBar, NavLinkContainer, NavLogo, NavLogoText } from './NavStyles';

const Nav = () => (
  <NavBar>
    <NavLogo style={{ justifyContent: `flex-start` }}>
      <NavLink to="/" modifiers="withImage">
        <svg xmlns="http://www.w3.org/2000/svg" width="58.706" height="51.837" viewBox="0 0 58.706 51.837" style={{ marginRight: `2rem` }}>
          <g transform="translate(-56.06 -368.178)">
            <path stroke="#3a3a3a" d="M106.482,410.155l-.592-.952-.022.06-.09.247-.135.345c.074.1.15.217.225.33.1.143.187.285.284.427a3.262,3.262,0,0,1,.33.652,3.393,3.393,0,0,1,0,2.279,5.427,5.427,0,0,1-.614,1.237,6.225,6.225,0,0,1-.405.555l.165.75.007.037.112-.18.12-.194.614-.99.12-.2v-.33l.016-.225.225-2.631.045-.577Z" transform="translate(-3.502 -2.907)" />
            <path stroke="#3a3a3a" d="M64.709,419.077a2.363,2.363,0,0,1-2.361-2.36V412.9a6.052,6.052,0,0,1,2.345-4.383c.194-.152.413-.316.647-.491,2.4-1.8,6.4-4.808,4.254-9.879-1.205-2.842-7.016-7.038-8.767-8.257a13.283,13.283,0,0,1-1.725-1.409c-2.872-2.807-3.7-5.867-2.529-9.355.035-.1.072-.206.109-.308a9.134,9.134,0,0,1,5.872-5.44l.1-.033A8.764,8.764,0,0,1,71.28,375.5a6.791,6.791,0,0,1,1.937,3.186,6.437,6.437,0,0,1-.584,4.738,5.017,5.017,0,0,1-3.69,2.1l-.649.1.343-.559a6.45,6.45,0,0,0,.865-2.3,3.064,3.064,0,0,0-.858-2.3,3.538,3.538,0,0,0-2.568-1.107,3.66,3.66,0,0,0-3.5,2.548,2.759,2.759,0,0,0,.267,2.384c.042.067,3.782,6.051,8.887,4.054a3.694,3.694,0,0,0,.542-.265c.047-.027.086-.05.124-.067h0c.009,0,.028-.014.068-.036.213-.115.42-.236.63-.357a10.48,10.48,0,0,1,5.453-1.636c1.16-.057,3.994-.044,6.994-.03,3.263.015,6.961.033,8.918-.043,3.53-.136,5.722-3.52,5.745-3.554a.307.307,0,1,1,.518.329c-.1.15-2.383,3.69-6.239,3.838-1.971.076-5.516.06-8.945.043-2.992-.013-5.818-.028-6.961.03a9.842,9.842,0,0,0-5.176,1.553c-.214.125-.426.247-.644.366-.038.02-.072.039-.1.053l-.069.041a4.476,4.476,0,0,1-.63.308A6.792,6.792,0,0,1,65,387.579a12.717,12.717,0,0,1-2.669-2.959,3.357,3.357,0,0,1-.332-2.9,4.274,4.274,0,0,1,4.082-2.974,4.157,4.157,0,0,1,3.016,1.3,3.672,3.672,0,0,1,1.022,2.758,5.671,5.671,0,0,1-.635,2,4.153,4.153,0,0,0,2.64-1.711,5.9,5.9,0,0,0,.5-4.246,6.2,6.2,0,0,0-1.772-2.9,8.148,8.148,0,0,0-8.017-2l-.1.03a8.52,8.52,0,0,0-5.478,5.067q-.053.143-.1.29c-1.1,3.287-.347,6.059,2.377,8.722a12.709,12.709,0,0,0,1.646,1.344c2.289,1.592,7.747,5.609,8.982,8.521,2.338,5.513-2.078,8.828-4.45,10.61-.231.174-.446.335-.637.485a5.528,5.528,0,0,0-2.109,3.9v3.808a1.746,1.746,0,0,0,3.493,0v-1.969a3.743,3.743,0,0,1,.77-2.311,3.476,3.476,0,0,1,1.1-.926c1.458-.78,9.8-6.448,9.883-6.506a.307.307,0,0,1,.346.508c-.345.234-8.452,5.744-9.94,6.539a2.882,2.882,0,0,0-.909.764,3.133,3.133,0,0,0-.638,1.932v1.969A2.363,2.363,0,0,1,64.709,419.077Z" transform="translate(0 -0.341)" />
            <path stroke="#3a3a3a" d="M106.513,403.226v7.594a3.262,3.262,0,0,0-.33-.652c-.1-.142-.187-.284-.284-.427v-6.514a.3.3,0,0,1,.308-.307A.308.308,0,0,1,106.513,403.226Z" transform="translate(-3.533 -2.462)" />
            <path stroke="#3a3a3a" d="M116.467,379.007a1.588,1.588,0,0,0-.015-.2.056.056,0,0,1,.007.037C116.459,378.856,116.467,378.909,116.467,379.007Z" transform="translate(-4.281 -0.753)" />
            <path stroke="#3a3a3a" d="M116.573,394.554c.151,3.673-3.163,6.829-3.538,7.174-.015.015-2.353,2.421-2.353,8.515v7.841a2.391,2.391,0,0,1-4.782,0V412.8a5.428,5.428,0,0,0,.614-1.237v6.522a1.776,1.776,0,0,0,3.553,0v-7.841c0-6.379,2.445-8.853,2.549-8.958.36-.337,3.485-3.306,3.35-6.7-.1-2.466-.479-8.943-.7-12.706-.007-.105-.015-.21-.015-.315l-.023-.315a1.849,1.849,0,0,0,.615.007c.007.1.015.2.022.307s.007.2.015.308C116.1,385.633,116.476,392.087,116.573,394.554Z" transform="translate(-3.533 -0.926)" />
            <g transform="translate(88.104 396.649)">
              <path stroke="#3a3a3a" d="M105.584,413.3a1.844,1.844,0,0,1-.136.3,6.146,6.146,0,0,1-.614,1,4.038,4.038,0,0,1-.322.4,4.149,4.149,0,0,1-.375.405l-.412.405c-.022.022-.038.045-.06.067l-3.013,3.418a2.084,2.084,0,1,1-3.126-2.759l3.043-3.448.112-.135s1.012-1.319-1.08-3.755-8.725-9.678-8.725-9.678l.4-.015c1.065,1.162,6.687,7.308,8.561,9.5,2.226,2.586,1.139,4.078,1.086,4.137l-.12.143-3.05,3.455a1.779,1.779,0,0,0,2.668,2.353l3.013-3.418.083-.082.405-.405a5.641,5.641,0,0,0,.509-.562,6.21,6.21,0,0,0,.405-.555,5.425,5.425,0,0,0,.614-1.237,3.392,3.392,0,0,0,0-2.279,3.262,3.262,0,0,0-.33-.652c-.1-.142-.187-.284-.284-.427-.075-.112-.151-.225-.225-.33-.248-.36-.5-.7-.735-1.034-1.364-1.9-2.436-3.4-2.136-5.585a10.168,10.168,0,0,1,.877-3.358v-.007l.367-.007s-.57.719-.945,3.411c-.321,2.383,1.109,3.958,2.707,6.236l.09.135c.179.256.36.525.54.8a1.049,1.049,0,0,1,.074.127,3.568,3.568,0,0,1,.361.8A3.815,3.815,0,0,1,105.584,413.3Z" transform="translate(-90.571 -398.845)" />
              <path stroke="#3a3a3a" d="M105.425,414.187a7.388,7.388,0,0,1-.614.877c-.038.053-.083.1-.12.142s-.083.1-.12.143c-.151.157-.241.247-.248.255l-.4.4a.382.382,0,0,1-.053.059l-3.013,3.411a2.39,2.39,0,0,1-3.584-3.164l3.156-3.583c.022-.03.794-1.17-1.08-3.35-2.061-2.4-8.65-9.6-8.718-9.67a.314.314,0,0,1,.016-.435.307.307,0,0,1,.434.022c.007.007.068.068.173.188,1.065,1.162,6.687,7.308,8.561,9.5,2.226,2.586,1.139,4.078,1.086,4.137l-.12.143-3.05,3.455a1.779,1.779,0,0,0,2.668,2.353l3.013-3.418.083-.082.405-.405a5.644,5.644,0,0,0,.509-.562,6.218,6.218,0,0,0,.405-.555,5.428,5.428,0,0,0,.614-1.237,3.393,3.393,0,0,0,0-2.279,3.263,3.263,0,0,0-.33-.652c-.1-.142-.187-.284-.284-.427-.075-.112-.151-.225-.225-.33-.248-.36-.5-.7-.735-1.034-1.364-1.9-2.436-3.4-2.136-5.585a10.17,10.17,0,0,1,.877-3.358v-.007a2.133,2.133,0,0,1,.127-.2.317.317,0,0,1,.435-.045.3.3,0,0,1,.045.435,8.088,8.088,0,0,0-.877,3.26c-.269,1.949.75,3.359,2.032,5.143.15.21.3.42.457.645.2.284.412.584.614.9.068.09.127.179.188.277A4.238,4.238,0,0,1,105.425,414.187Z" transform="translate(-90.548 -398.821)" />
            </g>
            <path stroke="#3a3a3a" d="M111.662,372.368a3.25,3.25,0,0,0-.337.518,1.356,1.356,0,0,0-.277-.15,2.308,2.308,0,0,0-.27-.143,9.394,9.394,0,0,0-1.574-.577,13.72,13.72,0,0,0-7.578.45l-.136.053-5.877-3.494a6.4,6.4,0,0,0,.96,7.346,6.118,6.118,0,0,0,1.874,1.319,11.828,11.828,0,0,1,4.992,4.348,9.3,9.3,0,0,1,1.154,6.507.306.306,0,0,1-.307.255h-.046a.305.305,0,0,1-.255-.352,8.815,8.815,0,0,0-.847-5.7,5.525,5.525,0,0,0-.345-.57,11.286,11.286,0,0,0-4.61-3.936,6.612,6.612,0,0,1-2.053-1.454,7.02,7.02,0,0,1-.9-8.35l.157-.263,6.162,3.658a14.083,14.083,0,0,1,7.819-.412,9.613,9.613,0,0,1,1.746.645,2.3,2.3,0,0,1,.27.15A1.406,1.406,0,0,1,111.662,372.368Z" transform="translate(-2.707 0)" />
            <path stroke="#3a3a3a" d="M90.714,422.186a2.349,2.349,0,0,1-1.5-.542l-1.078-.893L86.4,418.974a12.326,12.326,0,0,1-1.5-1.857,5.146,5.146,0,0,1-.937-2.892l0-.229c-.021-1.756-.04-3.272-1.534-4.611a14.008,14.008,0,0,0-1.427-1.022c-2.353-1.562-6.29-4.176-6.6-9.222a.307.307,0,0,1,.288-.325.31.31,0,0,1,.325.287c.293,4.741,3.926,7.152,6.329,8.748a14.239,14.239,0,0,1,1.5,1.077c1.7,1.519,1.718,3.32,1.738,5.061l0,.228a4.513,4.513,0,0,0,.837,2.564,11.685,11.685,0,0,0,1.428,1.765l1.724,1.765,1.042.86a1.756,1.756,0,0,0,2.237-2.707l-1.037-.858c-.284-.176-2.951-1.9-2.859-4.415.087-2.417,0-9.923,0-10a.307.307,0,0,1,.3-.31.3.3,0,0,1,.31.3c0,.075.088,7.6,0,10.028-.082,2.24,2.557,3.864,2.583,3.88l.037.026,1.054.872a2.367,2.367,0,0,1-1.286,4.183C90.867,422.182,90.791,422.186,90.714,422.186Z" transform="translate(-1.299 -2.171)" />
            <g transform="translate(107.403 370.997)">
              <path stroke="#3a3a3a" d="M117.813,376.867l-4.46-5.187a4.807,4.807,0,0,0-.735.787,3.792,3.792,0,0,0-.337.518,4.88,4.88,0,0,0,.547,5.591l1.266,1.485a2.429,2.429,0,0,0,1.567.824,2.126,2.126,0,0,0,.614,0,2.359,2.359,0,0,0,1.275-.562A2.461,2.461,0,0,0,117.813,376.867Zm-.465,3.223a2.1,2.1,0,0,1-1.094.487,1.848,1.848,0,0,1-.615-.007,2.128,2.128,0,0,1-1.312-.712l-1.266-1.477a4.573,4.573,0,0,1-.5-5.247,3.249,3.249,0,0,1,.337-.518,4.528,4.528,0,0,1,.427-.494l4.258,4.948A2.153,2.153,0,0,1,117.348,380.09Z" transform="translate(-111.343 -371.245)" />
              <path stroke="#3a3a3a" d="M118.022,376.639l-4.662-5.427-.232.2a5.177,5.177,0,0,0-.8.87,3.923,3.923,0,0,0-.337.524,5.2,5.2,0,0,0,.585,5.937l1.266,1.476a2.736,2.736,0,0,0,1.815.945c.1.007.187.015.277.015a2.576,2.576,0,0,0,.337-.022,2.752,2.752,0,0,0,1.754-4.52Zm-3.718,3.186-1.266-1.477a4.573,4.573,0,0,1-.5-5.247,3.246,3.246,0,0,1,.337-.518,4.53,4.53,0,0,1,.427-.494l4.258,4.948a2.153,2.153,0,0,1-.232,3.021,2.1,2.1,0,0,1-1.094.487,1.847,1.847,0,0,1-.615-.007A2.128,2.128,0,0,1,114.3,379.825Z" transform="translate(-111.32 -371.212)" />
            </g>
          </g>
        </svg>
        <NavLogoText >Koda Studio</NavLogoText>
      </NavLink>
    </NavLogo>
    <NavLinkContainer style={{ justifyContent: `flex-end` }}>
      <NavLink style={{ marginLeft: `3rem`, marginBottom: `-4px` }} modifiers="animated" to="/about">about</NavLink>
      <NavLink style={{ marginLeft: `3rem`, marginBottom: `-4px` }} modifiers="animated" to="/work">work</NavLink>
      <NavLink style={{ marginLeft: `3rem`, marginBottom: `-4px` }} modifiers="animated" to="/services">services</NavLink>
      <NavLink style={{ marginLeft: `3rem`, marginBottom: `-4px` }} modifiers="animated" to="/blog">blog</NavLink>
      <NavLink style={{ marginLeft: `3rem`, marginBottom: `-4px` }} modifiers="animated" to="/contact">contact</NavLink>
    </NavLinkContainer>
  </NavBar>
)

export default Nav
