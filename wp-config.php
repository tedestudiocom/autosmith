<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'autosmith' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's$Nx4&tV)3/_ &SDNyeGi#u_@xW.m:GmT,ANWro[EY7ss:9|Z?XN*%%HF !N4ZoM' );
define( 'SECURE_AUTH_KEY',  '{x&!){V@rOz(eQ#Y,u[^U[4Vyj@mw%A(tu}/EU<wYHAs0~C?-70`&F0Kv(ndNMy%' );
define( 'LOGGED_IN_KEY',    '&rF0hACY;H`Jq3&O/%wRGQokP#DClw187x(Ms O#k(3jPZ:>sYdlO5u.@2Zs-0`B' );
define( 'NONCE_KEY',        'F-PJu;X2q|tZU?~iG _%W1IJFAJ9PuQ/CZX+K(p }cTE,Dz^{T/{jSkkNOI[d+]I' );
define( 'AUTH_SALT',        'A-aq#mem*K~vX&@1yA+1`%{T7[K)mc4*@4D1|Ujkms?Sp4WbXAq!GISt4?=du(Tk' );
define( 'SECURE_AUTH_SALT', '<$1&h3Se+:I4)W$6)BCv SmmsV[4<z#Xlo5 VMS~J{G+(BC+>d;cW*&geZDw80K*' );
define( 'LOGGED_IN_SALT',   'if]M@<-XOB|c=YzlHQ4~?xS=PG5We:E9qVhPzZ)9|WnS2x{`gK^QPHPgf`Y,k@_N' );
define( 'NONCE_SALT',       'R=_s)<`}eoK+|teyLq/4;:TVyM%%]Vd%Tztu+}u~7ZNtf.cqc g[C>GyKCqy}[7J' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'as_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
