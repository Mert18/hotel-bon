import React from 'react';
import classes from './layout.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <h2>Otel Logo</h2>
            </div>

            <div className={classes.nav}>
                <ul>
                    <li><Link href="/">Ana Sayfa</Link></li>
                    <li><Link href="/">Odalarımız</Link></li>
                    <li><Link href="/">Fotoğraflar</Link></li>
                    <li><Link href="/">Otelimiz</Link></li>
                    <li><Link href="/">İletişim</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
