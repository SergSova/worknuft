<div class="inner-photo-slide">
    <div>
        <div class="inner" data-id="[[+idx]]">
            <img class="chocolate-image-move" src="assets/images/[[+logo]]"
                 alt="[[+alt]]" title="[[+img_title]]">
            <div class="images">
                [[!getImageList?
                &value=`[[+images]]`
                &alt=`[[+title]]`
                &tpl=`catalog-image-item`
                ]]
            </div>
            <div class="text">
                <div>[[+title]]<span>[[+date]]</span>
                </div>
            </div>
        </div>
    </div>
</div>