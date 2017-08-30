<?php
/** @var modX $modx */
$doc_template = '2';
$arch_template = '3';
$post_template = '4';

$q = $modx->newQuery('modResource');
$q->where(
    array(
        'template' => $arch_template,
    )
);
$q->select('id,context_key');
$q->prepare();
$q->stmt->execute();
$arch_ids = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
$arch_ids = clear_arr($arch_ids);

if ($exist = $modx->getCollection('modResource',array('parent:in' => $arch_ids,'pagetitle' => date('Y'),))) {
    foreach ($exist as $item) {
        /** @var modResource $item */
        $item->set('deleted', '1');
        $item->set('publishedon', 0);
        $item->save();
    }
}

$q = $modx->newQuery('modResource');
$q->where(
    array(
        'template' => $post_template,
    )
);
$q->select('id');
$q->prepare();
$q->stmt->execute();
$vstup_ids = $q->stmt->fetchAll(PDO::FETCH_COLUMN);


/** @var modResource[] $documents */
$documents = $modx->getCollection(
    'modResource', array('template' => $doc_template, 'parent:in' => $vstup_ids)
);

foreach ($documents as $document) {
    /** @var modResource $arc_doc */
    if (array_key_exists($document->context_key, $arch_ids)) {
        $arc_doc = $modx->newObject('modResource', $document->_fields);
        $arc_doc->set('parent', $arch_ids[$document->context_key]);
        $arc_doc->set('pagetitle', date('Y'));
        $arc_doc->set('publishedon', '1');
        $arc_doc->save();
    }
}


/**
 * @param $arch_ids
 *
 * @return array
 */
function clear_arr($arch_ids)
{
    $arch_ids = array_map(
        function ($data) {
            return array($data['context_key'] => $data['id']);
        }, $arch_ids
    );
    $result   = array();
    foreach ($arch_ids as $arch_id) {
        foreach ($arch_id as $key => $item) {
            $result[$key] = $item;
        }
    }

    return $result;
}