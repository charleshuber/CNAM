jQuery(document).ready(function($) {

    /**
     * Enable datepickers on UPME date fields
     *
     */
	if (jQuery.fn.datepicker) {
	    $( ".upmeft_past_date" ).datepicker({ minDate: "-50Y", maxDate: 0 });
		$( ".upmeft_future_date" ).datepicker({ minDate: 0, maxDate: "+50Y" });
	}

    /**
     * Reset values of date fields
     */
    jQuery(".upmeft_past_date_reset").click(function(){
        var picker = jQuery(this).parent().find('.upmeft_past_date');
        jQuery.datepicker._clearDate(picker);
    });

    jQuery(".upmeft_future_date_reset").click(function(){
        var picker = jQuery(this).parent().find('.upmeft_future_date');
        jQuery.datepicker._clearDate(picker);
    });

    
    

});



