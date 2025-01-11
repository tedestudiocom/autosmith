<?php
/**
 *
 * @package           PluginPackage
 * @author            Michael Gangolf
 * @copyright         2024 Michael Gangolf
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: Smooth scrolling with Lenis
 * Description: Adds the Lenis library (by darkroom.engineering) to your WordPress page
 * Version:     1.0.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Michael Gangolf
 * Author URI:        https://www.migaweb.de/
 * License:           GPL v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('MIGA_SMOOTH_SCROLLING_LENIS_VERSION')) {
    define('MIGA_SMOOTH_SCROLLING_LENIS_VERSION', '1.1.13.1');
}

function miga_smooth_scrolling_enqueue_scripts()
{
    $value = get_option('miga_smooth_scrolling_exclude_page', []);
    if ($value == "") {
        $value = [];
    }
    if (
        in_array(get_the_id(), $value)
        || (class_exists('\Elementor\Plugin') && \Elementor\Plugin::$instance->preview->is_preview_mode())
    ) {
        return;
    }
    if (
        in_array(get_the_id(), $value)
        || (class_exists('\Elementor\Plugin') && \Elementor\Plugin::$instance->preview->is_preview_mode())
    ) {
        // don't enqueue script for this page
    } else {

        $smoothWheel = 1;
        if (get_option('miga_smooth_scrolling_disable_wheel') == "yes") {
            $smoothWheel = 0;
        }
        wp_enqueue_style('theme-lenis-style', plugin_dir_url(__FILE__) .  'style.css', [], MIGA_SMOOTH_SCROLLING_LENIS_VERSION);
        wp_enqueue_script('theme-lenis', plugin_dir_url(__FILE__) . 'js/vendor/lenis.min.js', [], MIGA_SMOOTH_SCROLLING_LENIS_VERSION, false);
        wp_enqueue_script('theme-main', plugin_dir_url(__FILE__) . 'js/main.js', [], MIGA_SMOOTH_SCROLLING_LENIS_VERSION, ['in_footer' => true]);
        wp_localize_script('theme-main', 'miga_smooth_scrolling_params', [
          "miga_smooth_scrolling_smoothWheel" => (int) esc_attr($smoothWheel),
          "miga_smooth_scrolling_anchor_offset" => esc_attr(get_option('miga_smooth_scrolling_anchor_offset')),
          "miga_smooth_scrolling_anchor" => (get_option('miga_smooth_scrolling_anchor_links') == "yes")
        ]);

    }
}

function miga_smooth_scrolling_menu()
{
    add_submenu_page(
        'options-general.php',
        'Smooth Scrolling Settings',
        'Smooth Scrolling',
        'manage_options',
        'miga_smooth_scrolling',
        'miga_smooth_scrolling_page_callback'
    );
}

function miga_smooth_scrolling_page_callback()
{
    ?>
<div class="wrap">
  <h1>Smooth Scrolling Settings</h1>
  <form method="post" action="options.php">
    <?php
    settings_fields('miga_linis_option_group');
    do_settings_sections('miga_smooth_scrolling');
    submit_button();
    ?>
  </form>
  <p>Plugin is using <a target="_blank" href="https://github.com/darkroomengineering/lenis">lenis <?php echo esc_attr(MIGA_SMOOTH_SCROLLING_LENIS_VERSION); ?></a> by <a target="_blank" href="https://github.com/darkroomengineering">darkroom.engineering</a></p>
</div>
<?php
}

function miga_smooth_scrolling_fields()
{

    $page_slug = 'miga_smooth_scrolling';
    $option_group = 'miga_linis_option_group';

    add_settings_section(
        'miga_smooth_scrolling_id',
        '',
        '',
        $page_slug
    );

    register_setting($option_group, 'miga_smooth_scrolling_disable_wheel', 'miga_smooth_scrolling_sanitize_checkbox');
    register_setting($option_group, 'miga_smooth_scrolling_exclude_page', 'miga_smooth_scrolling_sanitize_exclude_page');
    register_setting($option_group, 'miga_smooth_scrolling_anchor_links', 'miga_smooth_scrolling_sanitize_checkbox');
    register_setting($option_group, 'miga_smooth_scrolling_anchor_offset', 'miga_smooth_scrolling_sanitize_value');


    add_settings_field(
        'miga_smooth_scrolling_disable_wheel',
        'Disable mouse wheel',
        'miga_smooth_scrolling_mouse_wheel',
        $page_slug,
        'miga_smooth_scrolling_id'
    );

    add_settings_field(
        'miga_smooth_scrolling_exclude_page', // id
        'Exclude on these pages', // title
        'miga_smooth_scrolling_exclude_page_callback', // callback
        $page_slug,
        'miga_smooth_scrolling_id'
    );

    add_settings_field(
        'miga_smooth_scrolling_anchor_links', // id
        'Smooth anchor links', // title
        'miga_smooth_scrolling_anchor_links_callback', // callback
        $page_slug,
        'miga_smooth_scrolling_id'
    );
    add_settings_field(
        'miga_smooth_scrolling_anchor_offset', // id
        'Smooth anchor link offset', // title
        'miga_smooth_scrolling_anchor_offset_callback', // callback
        $page_slug,
        'miga_smooth_scrolling_id'
    );

}


function miga_smooth_scrolling_mouse_wheel($args)
{
    $value = get_option('miga_smooth_scrolling_disable_wheel');
    ?>
<label>
  <input type="checkbox" name="miga_smooth_scrolling_disable_wheel" <?php checked(esc_attr($value), 'yes') ?> /> Yes
</label>
<?php
}

function miga_smooth_scrolling_anchor_links_callback($args)
{
    $value = get_option('miga_smooth_scrolling_anchor_links');
    ?>
<label>
  <input type="checkbox" name="miga_smooth_scrolling_anchor_links" <?php checked(esc_attr($value), 'yes') ?> /> Yes
</label>
<?php
}
function miga_smooth_scrolling_anchor_offset_callback($args)
{
    $value = get_option('miga_smooth_scrolling_anchor_offset', 0);
    ?>
<label>
  <input type="number" name="miga_smooth_scrolling_anchor_offset" value="<?php echo(empty($value) ? '0' : esc_attr($value)); ?>"/>px
</label>
<?php
}


function miga_smooth_scrolling_exclude_page_callback()
{

    $value = get_option('miga_smooth_scrolling_exclude_page', []);
    if ($value == "") {
        $value = [];
    }
    echo '<select name="miga_smooth_scrolling_exclude_page[]" id="miga_smooth_scrolling_exclude_page" size="10" multiple="multiple">';

    $pages = get_pages();
    foreach ($pages as $page) {
        $option = '<option value="' . esc_attr($page->ID) . '"';

        if (in_array($page->ID, $value)) {
            $option .= " selected ";
        }

        $option .= '>';
        $option .= $page->post_title;
        $option .= '</option>';
        echo wp_kses($option, ['option' => ['value' => [], 'selected' => []]]);
    }

    echo '</select>';
}

function miga_smooth_scrolling_sanitize_checkbox($value)
{
    return 'on' == $value ? 'yes' : 'no';
}

function miga_smooth_scrolling_sanitize_exclude_page($value)
{
    return $value;
}
function miga_smooth_scrolling_sanitize_value($value)
{
    return (int)$value;
}

add_action('admin_menu', 'miga_smooth_scrolling_menu');
add_action('wp_enqueue_scripts', 'miga_smooth_scrolling_enqueue_scripts', 15);
add_action('admin_init', 'miga_smooth_scrolling_fields');
