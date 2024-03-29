import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.headerLeftLink}>Thank You Ben</Link>
        </div>
    );
}