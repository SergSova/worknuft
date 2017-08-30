<?php
/**
 * Created by PhpStorm.
 * User: sergsova
 * Date: 29.06.17
 * Time: 11:00
 */

/** @var modX $modx */
$skip = $modx->getPlaceholder('skip');
if($skip){
    $skip_arr = explode(',',$skip);
    $skip_arr[]='-'.$id;
    $skip = implode(',',$skip_arr);
}else{
    $skip = '-'.$id;}
$modx->setPlaceholder('skip', $skip);