import styles from "./NavBar.module.css"; // Assuming a CSS file for styling


const links = [
  { name: "Food Library", href: "/library" },
  { name: "Return", href: "/" }
];

function Links() {
  return (
    <>
                {links.map((link, index) => (
                <a key={index} href={link.href}>{link.name}</a>
            ))}
    </>
  )
}


function HamButtom({ toggleMenu }) {
  return (
    <div
      className={`${styles["hamburger-menu"]} ${styles["small-screen"]}`}
      onClick={toggleMenu}
      style={{ marginLeft: "auto" }}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
}

function MenuLinks(){

    return (
        <div className={`${styles['dropdown-menu']} ${styles['small-screen']} ${styles['navbar-links']}`}>
            <Links />
        </div>
    );
}

function Menu() {
  return (
    <div
      className={`${styles["navbar-links"]} ${styles["large-screen"]}`}
      style={{ marginLeft: "auto" }}
    >
      <Links />
    </div>
  );
}

export default Menu;
export { HamButtom, MenuLinks };
