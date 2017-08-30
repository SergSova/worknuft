<html>
<head>
    <title><?= $subject ?></title>
</head>
<body><p><b>Данные отправителя:</b></p>
<table cellpadding=\"5\">
    <?php if ($name): ?>
        <tr valign="top">
            <td>Имя:</td>
            <td><?= $name ?></td>
        </tr>
    <?php endif; ?>
    <?php if ($phone): ?>
        <tr valign="top">
            <td>Телефон:</td>
            <td><?= $phone ?></td>
        </tr>
    <?php endif; ?>
    <?php if ($email): ?>
        <tr valign="top">
            <td>Email:</td>
            <td><?= $email ?></td>
        </tr>
    <?php endif; ?>
    <?php if ($page_link): ?>
        <tr valign="top" colspan="2">
            <td></td>
        </tr>
        <tr valign="top">
            <td>Страница:</td>
            <td><a href="<?= $page_link ?>"><?= $page_info ?></a></td>
        </tr>
    <?php endif; ?>
    <?php if ($message): ?>
        <tr valign="top">
            <td>Сообщение:</td>
            <td><?= $message ?></td>
        </tr>
    <?php endif; ?>
</table>
</body>
</html>