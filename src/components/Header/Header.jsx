import React  from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

const Header = ({filters, filter, onFilterChange}) => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filters.map((value,index)=><li key={index}><button onClick={()=>onFilterChange(value)} className={`${styles.filter} ${filter === value && styles.selected}`}>{value}</button></li>)}
            </ul>
        </header>
    );
}

export default Header