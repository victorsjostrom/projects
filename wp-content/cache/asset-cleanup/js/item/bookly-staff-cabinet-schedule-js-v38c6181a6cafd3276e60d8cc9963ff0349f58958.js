/*!/wp-content/plugins/bookly-addon-staff-cabinet/frontend/modules/staff_schedule/resources/js/staff-cabinet-schedule.js*/
(function($){window.booklyStaffSchedule=function(Options){var $container=$('.'+Options.form_id);if(!$container.length){return}
var options={get_staff_schedule:{action:'bookly_staff_cabinet_get_schedule',},saving:function(alerts){$.each(alerts,function(type,messages){if(messages.length>0){window.booklyNativeAlert(messages.join('\n'))}})},booklyAlert:function(alerts){options.saving(alerts)},l10n:BooklySCScheduleL10n};new BooklyStaffSchedule($container,options)}})(jQuery)
;