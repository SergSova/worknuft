<?php
$babel = $modx->getService('babel', 'Babel', $modx->getOption('babel.core_path', null, $modx->getOption('core_path') . 'components/babel/') . 'model/babel/', $scriptProperties);
if (!($babel instanceof Babel) || !$babel->babelTv)
    return;

$output = $input;

$resourceId = intval($input);
$contextKey = $modx->context->get('key');
$linkedResources = $babel->getLinkedResources($resourceId);
if (isset($linkedResources[$contextKey])) {
    $output = $linkedResources[$contextKey];
}
return $output;