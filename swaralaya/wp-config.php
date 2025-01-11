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
define( 'DB_NAME', 'swaralaya' );

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
define( 'AUTH_KEY',         'HSpG?zPO@)jbdRAwS;Ra%$G#=Abl#mCM7AaS6L3nt,wKz^G?1Oy=HA%lxW<xJ,7@' );
define( 'SECURE_AUTH_KEY',  'KPl^S4{#NNN(Bo&R=g!@z]ZAnqj|*}v;D~0_QXJA.CWlUwP;dYP(Fxm4,CFOR-ZF' );
define( 'LOGGED_IN_KEY',    'T^H!:@Zw;9CkgWv+r@E+]8QWym-Tn!8%@ {LH^_Z&;uMLmc$My.C)BY.KIc{5b.y' );
define( 'NONCE_KEY',        '.:%:o*5uK4K!Eyw@EtoXt=8ZxOM}$b,@yGG~|YbM|BTwPE4}7B>*BY~do LZMZ1~' );
define( 'AUTH_SALT',        'X6<+z|40Qdaf<iX,D-p0nWorKA#VM.Z<_07yyzrvt]SLI_tt<AA(@_Vi>zs30t{E' );
define( 'SECURE_AUTH_SALT', 'k)ty5E5*{gB-F[;c=:Hn@I5y<=R{{7rAfLMz$nY5VxiJr@mM3&0zbN.mhkDs0P!!' );
define( 'LOGGED_IN_SALT',   '9G:Se{UBL-1K&&P=q,}Ciqw,hfXYQYn9y08wZ9soqh*ZuN~.7c~Q/#o(;06GDfls' );
define( 'NONCE_SALT',       'LeLAK-oy}UF1%$O>0}.>oA5.g^GGfS[Jag`d&N~8ed},j@M|b^rti-t^N>^6ss&g' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
