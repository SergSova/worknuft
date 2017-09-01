<div class="inner slide">
    <div class="image chocolate-image-move">
        <img src="[[+teachers_avatar:replace=`//==/`]]" alt="[[+teachers_name]]"/>
    </div>
    <div class="moveto" data-to=".slider.slider-text-teacher.customPagin.pagin-custom-place.nav-for" data-parent=".teachers-wrap">
        <div class="teachers-text">
            <div class="teachers-name">{$teachers_name}</div>
            <div class="position">{$teachers_position}</div>
            <div class="teachers-about ">[[+teachers_about:ellipsis=`550`]]</div>
            <div class="social">
                <a href="{$teachers_twitter}" tabindex="-1"><i
                            class="icon-twitter"></i></a>
                <a href="{$teachers_facebook}" tabindex="-1"><i
                            class="icon-facebook-squared"></i></a>
            </div>
            <a href="{$_modx->makeUrl($id)}" class="button">ДЕТАЛЬНІШЕ</a>
        </div>
    </div>
</div>