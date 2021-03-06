/**
 * Initializations script file
 * @author: Zaur Magomedov
 */

jQuery(document).ready(function($) {
    /**
     * Focus and blur on the input field
     */
    var formInput = $('.form__control');

    function addClassFn(object) {
        object.parents('.form__group').addClass('is-focused');
    }

    function remClassFn(object) {
        object.parents('.form__group').removeClass('is-focused');
    }

    formInput
        .on('focus', function() {
            addClassFn($(this));
        })
        .on('blur', function() {
            if($(this).val() === '') {
                remClassFn($(this));
            }
        });

    formInput.each(function(){
        if($(this).val()) {
            addClassFn($(this));
        }
    });

    /**
     * Init forms
     */
    // FeedbackForm
    $('#feedbackForm').simpleSendForm({
        successTitle: "Ваше сообщение успешно отправлено!",
        successText: "Мы ответим Вам в самое ближайшее время.",
        captcha: true
    });
});
