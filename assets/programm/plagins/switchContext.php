<?php
//Системные события : OnHandleRequest
$lngkey = substr( $_SERVER['REQUEST_URI'], 1, 2 );
if ( $modx->context->get( 'key' ) != "mgr" ) {
	switch ( $lngkey ) {
		case 'en':
			setlocale( LC_ALL, "en_US.UTF-8" );
			$modx->switchContext( 'eng' );
			$modx->setOption( 'cultureKey', 'en' );
			break;

		case 'ua':
			setlocale( LC_ALL, "uk_UA.UTF-8" );
			$modx->switchContext( 'ukr' );
			$modx->setOption( 'cultureKey', 'ua' );
			break;

		default:
			setlocale( LC_ALL, "ru_RU.UTF-8" );
			$modx->switchContext( 'web' );
			$modx->setOption( 'cultureKey', 'ru' );
			break;
	}
}