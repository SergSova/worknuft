<article>
    <h4><a href="{$_modx->makeUrl($id)}">{$pagetitle}</a>
        <time>{{+article_date:strtotime:date=`%d.%m.%Y`}}</time>
    </h4>
    {$content}
    <a href="{$_modx->makeUrl($id)}" class="read-more">ЧИТАТИ ДАЛІ <i
                class="icon-arrow-right slider-next slick-arrow"
                style="display: inline;"></i>
    </a>
</article>