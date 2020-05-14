<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package screen-reader-only-format
 */

/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function srof_block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'srof-blocks-js',
		SROF_BLOCK_EDITOR_URL . 'dist/main.js',
		[ 'wp-blocks', 'wp-element' ],
		'0.0.1',
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'srof_block_editor_assets' );

/**
 * Enqueue Gutenberg block assets for front end and editor.
 */
function srof_front_dual_assets() {
	// Styles.
	wp_enqueue_style(
		'srof-blocks-editor-css',
		SROF_BLOCK_EDITOR_URL . 'dist/main.css',
		[ 'wp-edit-blocks', 'wp-codemirror' ],
		'0.1'
	);
}
add_action( 'wp_enqueue_scripts', 'srof_front_dual_assets' );
add_action( 'enqueue_block_editor_assets', 'srof_front_dual_assets' );
