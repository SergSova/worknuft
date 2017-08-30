<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/render.php';

function getParam($name, $default = 0)
{
    return $_GET[$name] ? $_GET[$name] : $default;
}

$action_type = getParam('action_type');
if ( ! isset($action_type)) {
    echo json_encode(array('error' => '1'));

    return;
}

$variables = array(
    'action_type' => $action_type,
    'to'          => getParam('to'),
    'subject'     => getParam('subject'),
    'name'        => getParam('name'),
    'phone'       => getParam('phone'),
    'email'       => getParam('email'),
    'message'     => getParam('message'),
    'page_link'   => getParam('page_link'),
    'page_info'   => getParam('page_info'),
    'created_at'  => date('d/m/Y G:i:s'),
    'IP'          => $_SERVER['REMOTE_ADDR'],
    'user_agent'  => $_SERVER['HTTP_USER_AGENT']
);

$body = render('assets/programm/chank/mail_template', $variables);


$additional_headers[]  = "Content-type: text/html; charset=utf-8";
$additional_headers[]  = "From: Nuft <robot@nuft.com>";
$additional_parameters = null;


if ( ! mail(
    $variables['to'], $variables['subject'], $body, implode(
        "\r\n", $additional_headers
    )
)) {
    echo json_encode(array('error' => '3'));

    return;
} else {
    echo json_encode(array('success' => 'OK'));

    return;
}
