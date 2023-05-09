const Footer = () => {
  const overFooterLinks = (element: number) => {
    const allFooterLinks = document.querySelectorAll(
        ".footerlinks"
    )  as NodeListOf<HTMLElement>;
    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) =>
        index === 0 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
      );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
        );
        break;
      case 5:
        allFooterLinks.forEach((item, index) =>
          index === 5 ? item.style.color='rgba(237, 30, 121, 1)' : item.style.color ='rgba(237, 30, 121,0.2)'
        );
        break;
      default:
        allFooterLinks.forEach((item, index) => item.style.color='rgba(237, 30, 121, 1)'
      );
        break;
    }
  };
  const linkBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(
        ".footerlinks"
    )  as NodeListOf<HTMLElement>;
    allFooterLinks.forEach((item) => item.style.color='rgba(237, 30, 121, 1)');
  };
  return (
    <>
      <footer>
        <h1>
          Lets's
          <br />
          #ConnectOnCutting ?
        </h1>
        <aside onMouseLeave={linkBackToNormal}>
          <a
            href="/"
            className="footerlinks"
            onMouseOver={() => overFooterLinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </a>
          <a
            href="/story"
            className="footerlinks"
            onMouseOver={() => overFooterLinks(1)}
            data-cursorpointermini={true}
          >
            Story
          </a>
          <a
            href="/media"
            className="footerlinks"
            onMouseOver={() => overFooterLinks(2)}
            data-cursorpointermini={true}
          >
            Media
          </a>
          <a
            href="/franchise "
            className="footerlinks"
            onMouseOver={() => overFooterLinks(3)}
            data-cursorpointermini={true}
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerlinks"
            onMouseOver={() => overFooterLinks(4)}
            data-cursorpointermini={true}
          >
            Events
          </a>
          <a
            href="/chaiwalacares"
            className="footerlinks"
            onMouseOver={() => overFooterLinks(5)}
            data-cursorpointermini={true}
          >
            Chai Wala Cares
          </a>
        </aside>
        <div>
          <h5>Email</h5>
          <a href="mail-to:info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mail-to:franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel:1234567890">+911234567890</a>
        </div>
        <p>&copy; COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
