<?php
/**
 * Created by PhpStorm.
 * User: sergsova
 * Date: 22.08.17
 * Time: 16:31
 */
function render($chankName, $variables)
{
    extract($variables);
    ob_start();
    require($_SERVER['DOCUMENT_ROOT'] . '/' . $chankName . '.tpl');

    return ob_get_clean();
}