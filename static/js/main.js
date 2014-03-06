/*
 * main.js
 * Copyright (C) 2014 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

$(function() {

	function add_time() {
		var time_cnt = $('input[name="time-cnt"]').val();
		$('input[name="time-cnt"]').val(parseInt(time_cnt) + 1);

		var time_result = '<div id="column-time-' + time_cnt + '" class="column"> <div class="ui raised segment"> <div id="btn-delete-time-' + time_cnt + '" class="ui right red corner label"> <i class="delete basic icon"></i> </div> <div class="two fields"> <div class="field"> <label>Start Date</label> <div class="ui left icon input"> <input type="date" name="start-date-' + time_cnt + '" /> <i class="calendar icon"></i> </div> </div> <div class="field"> <label>End Date</label> <div class="ui left icon input"> <input type="date" name="end-date-' + time_cnt + '" /> <i class="calendar icon"></i> </div> </div> </div> <div class="two fields"> <div class="field"> <label>Start Time</label> <div class="ui left icon input"> <input type="time" name="start-time-' + time_cnt + '" /> <i class="time icon"></i> </div> </div> <div class="field"> <label>End Time</label> <div class="ui left icon input"> <input type="time" name="end-time-' + time_cnt + '" /> <i class="time icon"></i> </div> </div> </div> <div class="two fields"> <div class="field"> <label># of People</label> <div class="ui left icon input"> <input type="number" name="quota-' + time_cnt + '" /> <i class="users icon"></i> </div> </div> <div class="field"> <label>Repeat</label> <select name="repeat-' + time_cnt + '"> <option value="none">None</option> <option value="daily">Daily</option> <option value="weekly">Weekly</option> <option value="monthly">Monthly</option> </select> </div> </div> </div> </div>';

		$('#time-list').append(time_result);

		$('#btn-delete-time-' + time_cnt).click(function () {
			$('#column-time-' + time_cnt).remove();
		});

	}

	function add_presenter() {
		var presenter_cnt = $('input[name="presenter-cnt"]').val();
		$('input[name="presenter-cnt"]').val(parseInt(presenter_cnt) + 1);

		var presenter_result = '<div id="column-presenter-' + presenter_cnt + '" class="column"> <div class="ui raised segment"> <div id="btn-delete-presenter-' + presenter_cnt + '" class="ui right red corner label"> <i class="delete basic icon"></i> </div> <div class="three fields"> <div class="field"> <label>ID</label> <input type="text" name="presenter-id-' + presenter_cnt + '" /> </div> <div class="field"> <label>Name</label> <input type="text" name="presenter-name-' + presenter_cnt + '" /> </div> <div class="field"> <label>Group</label> <input type="text" name="presenter-group-' + presenter_cnt + '" /> </div> </div> </div> </div>';

		console.log(presenter_result);

		$('#presenter-list').append(presenter_result);

		$('#btn-delete-presenter-' + presenter_cnt).click(function () {
			$('#column-presenter-' + presenter_cnt).remove();
		});

	}

	$('#btn-setup').click(function () {
		window.location.href="setup.php";
	});

	$('#btn-presenter-list').change(function () {
		$('#presenter-list-filename').val(this.value.split('\\').pop());
	});

	$('#btn-time-list').change(function () {
		$('#time-list-filename').val(this.value.split('\\').pop());
	});

	$('#btn-add-time').click(add_time);
	$('#btn-add-presenter').click(add_presenter);


});

