import styles from "./NavBar.module.css"; // Assuming a CSS file for styling

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
    const linkNames = ["Food Library", "About"];

    return (
        <div className={`${styles['dropdown-menu']} ${styles['small-screen']} ${styles['navbar-links']}`}>
            {linkNames.map((name, index) => (
                <a key={index} href={`#link${index + 1}`}>{name}</a>
            ))}
        </div>
    );
}

function Menu() {
  return (
    <div
      className={`${styles["navbar-links"]} ${styles["large-screen"]}`}
      style={{ marginLeft: "auto" }}
    >
      <a href="#link1">Food Library</a>
      <a href="#link2">About</a>
    </div>
  );
}

export default Menu;
export { HamButtom, MenuLinks };
