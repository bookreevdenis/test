import $ from 'jquery'

export default class AdvicesPage {
	constructor () {
		let it = this;

		it.vars = () => {
			it.$selects = $('.el-select');
		}
	}

	/**
	 * Init
	 */
	initAll () {
		let it = this;

		it.vars();

		it.$selects.each((i, item) => {
			it.init($(item));
		});
	}

	/**
	 * Init
	 */
	init ($select) {
		let it = this;
		let $chosen = $select.find('.el-select__chosen'),
				$header = $select.find('.el-select__header'),
				$list = $select.find('.el-select__list'),
				$items = $list.find('.el-select__list-li');

		$header.on('click', function () {
			if ($select.hasClass('_opened')) {
				$select.removeClass('_opened');
			} else {
				$select.addClass('_opened');
			}
		});

		$items.on('click', function () {
			let $item = $(this),
					text = $item.text();

			$select.removeClass('_opened');
			$items.removeClass('_active');
			$item.addClass('_active');
			$chosen.text(text);
		});
	}
}