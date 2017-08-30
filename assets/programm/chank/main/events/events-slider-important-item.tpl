<div class="article" data-icon="[[+img-infografics:replace=`//==/`]]">
    <span class="date">[[+publishedon:date=`%d.%m.%Y`]]</span>
    <div class="main-image">
        <a href="[[~[[+id]]]]"><img src="[[+img_main:replace=`//==/`]]" alt="[[+pagetitle]]"></a>
    </div>
    <h4><a href="[[~[[+id]]]]">[[+pagetitle]]</a></h4>
    <div class="text">
        [[+content:ellipsis=`350`]]
        <a href="[[~[[+id]]]]" class="event-more">Читати далi</a>
    </div>
</div>

{if $isMainEvent == 1}
[[!skip_events?&id=`[[+id]]`]]
{/if}


