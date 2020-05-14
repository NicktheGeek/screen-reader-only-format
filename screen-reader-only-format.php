<?php
/**
 * Plugin Name: Screen Reader Only Text Format
 * Plugin URI: https://github.com/reaktivstudios/
 * Description: Adds a screen reader only text format to the block editor.
 * Author: Reaktiv Studios
 * Author URI: https://reaktivstudios.com
 * Version: 0.1.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package screen-reader-only-format
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


define( 'SROF_BLOCK_EDITOR', plugin_dir_path( __FILE__ ) );
define( 'SROF_BLOCK_EDITOR_URL', plugin_dir_url( __FILE__ ) );

/**
 * Block Initializer.
 */
require_once SROF_BLOCK_EDITOR . 'src/init.php';

